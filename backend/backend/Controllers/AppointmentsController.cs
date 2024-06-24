using AutoMapper;
using backend.Context;
using backend.Models;
using backend.Models.Dto;
using Microsoft.AspNetCore.Mvc;
using Microsoft.EntityFrameworkCore;
using System.Numerics;

namespace backend.Controllers
{
    [Route("api/[controller]")]
    [ApiController]
    public class AppointmentsController : ControllerBase
    {
        private readonly AppDbContext dbContext;
        private readonly IMapper mapper;

        public AppointmentsController(AppDbContext _dbContext, IMapper mapper)
        {
            dbContext = _dbContext;
            this.mapper = mapper;
        }

        [HttpGet]
        public async Task<IActionResult> ObtenerCitas()
        {
            var citas = await dbContext.Appointments.ToListAsync();
            var citasDto = mapper.Map<List<AppointmentsDto>>(citas);
            return Ok(citasDto);
        }

        [HttpGet]
        [Route("{id:int}")]
        public async Task<IActionResult> ObtenerCita(int id)
        {
            var cita = await dbContext.Appointments.FirstOrDefaultAsync(appointment => appointment.AppointmentId == id);
            if (cita == null)
            {
                return NotFound();
            }
            
            var citaDto = mapper.Map<AppointmentsDto>(cita);
            return Ok(citaDto);
        }

        [HttpGet]
        [Route("doctor/{id:int}")]
        public async Task<IActionResult> ObtenerCitaPorDoctor(int id)
        {
            var doctorExiste = await dbContext.Doctors.AnyAsync(d => d.DoctorId == id);

            if (!doctorExiste)
            {
                return NotFound($"El doctor con ID {id} no existe.");
            }

            var citas = await dbContext.Appointments.Where(appointment => appointment.DoctorId == id).ToListAsync();

            if (citas == null || !citas.Any())
            {
                return NotFound($"No se encontraron citas para el doctor con ID {id}.");
            }

            var citasDto = mapper.Map<List<AppointmentsDto>>(citas);

            return Ok(citasDto);
        }

        [HttpPost]
        public async Task<ActionResult> CrearCita([FromBody] AppointmentsDto appointmentsDto)
        {
            if (appointmentsDto == null)
            {
                return BadRequest("Appointment data is null."); 
            }

            var cita = new Appointment
            {
                Date = appointmentsDto.Date,
                Time = appointmentsDto.Time,
                Clinic = appointmentsDto.Clinic,
                DoctorId = appointmentsDto.DoctorId,
                PatientId = appointmentsDto.PatientId,
            };

            dbContext.Appointments.Add(cita);
            await dbContext.SaveChangesAsync();

            return StatusCode(StatusCodes.Status200OK, new { message = "Cita creada con éxito" });
        }


    }
}
