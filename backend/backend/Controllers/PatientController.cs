using Microsoft.EntityFrameworkCore;
using backend.Models;
using Microsoft.AspNetCore.Mvc;
using backend.Context;
using backend.Models.Dto;
using static backend.Models.Enums.Enums;
using AutoMapper;
using BCrypt.Net;

namespace backend.Controllers
{
    [Route("api/[controller]")]
    [ApiController]
    public class PatientController : ControllerBase
    {
        private readonly AppDbContext dbContext;
        private readonly IMapper mapper;

        public PatientController(AppDbContext _dbContext, IMapper mapper)
        {
            dbContext = _dbContext;
            this.mapper = mapper;
        }

        [HttpGet]
        public async Task<IActionResult> ObtenerPacientes()
        {
            var pacientes = await dbContext.Patients.ToListAsync();
            var pacientesDto = mapper.Map<List<PatientDtoGet>>(pacientes);
            return StatusCode(StatusCodes.Status200OK, pacientesDto);
        }

        [HttpGet]
        [Route("{id:int}")]
        public async Task<IActionResult> ObtenerPaciente(int id)
        {
            var paciente = await dbContext.Patients.FirstOrDefaultAsync(patient => patient.PatientId == id);
           
            if (paciente == null)
            {
                return NotFound();
            }

            var pacienteDto = mapper.Map<PatientDtoGet>(paciente);

            return StatusCode(StatusCodes.Status200OK, pacienteDto);

        }

        [HttpPost]
        public async Task<ActionResult<Patient>> CrearPaciente([FromBody] PatientDto patienDtot)
        {
            if(patienDtot == null)
            {
                return BadRequest("Patient data is null.");
            }

            if (await dbContext.Users.AnyAsync(u => u.UserName == patienDtot.Username || u.Email == patienDtot.Email))
            {
                return BadRequest("A user with the same username or email already exists.");
            }

            if (await dbContext.Patients.AnyAsync(p => p.Identification == patienDtot.Identification))
            {
                return BadRequest("A patient with the same identification already exists.");
            }

            var hashedPassword = BCrypt.Net.BCrypt.HashPassword(patienDtot.Password);

            var user = new User
            {
                UserName = patienDtot.Username,
                Password = hashedPassword,
                Email = patienDtot.Email,
                RoleId = 2
            };

            dbContext.Users.Add(user);
            await dbContext.SaveChangesAsync();


            var patient = new Patient
            {
                Identification = patienDtot.Identification,
                Email = patienDtot.Email,
                FirstName = patienDtot.FirstName,
                LastName = patienDtot.LastName,
                UserId = user.UserId,
                Birthday = patienDtot.Birthday,
                Gender = patienDtot.Gender,
                Phone = patienDtot.Phone,
                Status = patienDtot.Status
            };

            dbContext.Patients.Add(patient);
            await dbContext.SaveChangesAsync();

            return StatusCode(StatusCodes.Status200OK, new { message = "Paciente creado con éxito" });
        }

    }
}
