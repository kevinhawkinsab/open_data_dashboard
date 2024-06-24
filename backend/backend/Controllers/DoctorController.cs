using Microsoft.EntityFrameworkCore;
using backend.Models;
using Microsoft.AspNetCore.Mvc;
using backend.Context;
using AutoMapper;
using backend.Models.Dto;

namespace backend.Controllers
{
    [Route("api/[controller]")]
    [ApiController]
    public class DoctorController : ControllerBase
    {
        private readonly AppDbContext dbContext;
        private readonly IMapper mapper;

        public DoctorController(AppDbContext _dbContext, IMapper mapper)
        {
            dbContext = _dbContext;
            this.mapper = mapper;
        }

        [HttpGet]
        public async Task<IActionResult> ObtenerDoctores()
        {
            var doctores = await dbContext.Doctors.ToListAsync();
            var doctoresDto = mapper.Map<List<DoctorDtoGet>>(doctores);
            return Ok(doctoresDto);
        }

        [HttpGet]
        [Route("{id:int}")]
        public async Task<IActionResult> ObtenerDoctor(int id)
        {
            var doctor = await dbContext.Doctors.FirstOrDefaultAsync(doctor => doctor.DoctorId == id);
            if (doctor == null)
            {
                return NotFound();
            }

            var doctorDto = mapper.Map<DoctorDtoGet>(doctor);
            return Ok(doctorDto);
        }

        [HttpPost]
        public async Task<ActionResult<Doctor>> CrearDoctor([FromBody] DoctorDto doctorDto)
        {
            if (doctorDto == null)
            {
                return BadRequest("Doctor data is null.");
            }

            if (await dbContext.Users.AnyAsync(u => u.UserName == doctorDto.Username || u.Email == doctorDto.Email))
            {
                return BadRequest("A user with the same username or email already exists.");
            }

            if (await dbContext.Doctors.AnyAsync(d => d.Identification == doctorDto.Identification))
            {
                return BadRequest("A doctor with the same identification already exists.");
            }

            var hashedPassword = BCrypt.Net.BCrypt.HashPassword(doctorDto.Password);

            var user = new User
            {
                UserName = doctorDto.Username,
                Password = hashedPassword,
                Email = doctorDto.Email,
                RoleId = 3
            };

            dbContext.Users.Add(user);
            await dbContext.SaveChangesAsync();

            var doctor = new Doctor
            {
                Identification = doctorDto.Identification,
                Email = doctorDto.Email,
                FirstName = doctorDto.FirstName,
                LastName = doctorDto.LastName,
                UserId = user.UserId,
                Birthday = doctorDto.Birthday,
                Gender = doctorDto.Gender,
                Phone = doctorDto.Phone,
                Status = doctorDto.Status,
                SpecialityId = doctorDto.SpecialityId
            };

            dbContext.Doctors.Add(doctor);
            await dbContext.SaveChangesAsync();

            return StatusCode(StatusCodes.Status200OK, new { message = "Doctor creado con éxito" });
        }
    }
}
