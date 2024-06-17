using Microsoft.EntityFrameworkCore;
using backend.Models;
using Microsoft.AspNetCore.Mvc;
using backend.Context;
using backend.Models.Dto;
using AutoMapper;

namespace backend.Controllers
{
    [Route("api/[controller]")]
    [ApiController]
    public class SpecialityController: ControllerBase
    {

        private readonly AppDbContext dbContext;

        public SpecialityController(AppDbContext _dbContext)
        {
            dbContext = _dbContext;
        }

        [HttpGet]
        public async Task<IActionResult> ObtenerEspecialidades()
        {
            var specialities = await dbContext.Specialities
                .Select(p => new SpecialityDto
                {
                    SpecialityId = p.SpecialityId,
                    SpecialityName = p.SpecialityName
                })
                .ToListAsync();

            return Ok(specialities);
        }

        [HttpGet]
        [Route("{id:int}")]
        public async Task<IActionResult> ObtenerIdEspecialidad(int id)
        {
            var especialidad = await dbContext.Specialities.Where(s => s.SpecialityId == id).Select(s => new SpecialityDto
            {
                SpecialityId = s.SpecialityId,
                SpecialityName = s.SpecialityName
            }).FirstOrDefaultAsync();

            if (especialidad == null)
            {
                return NotFound();
            }

            return Ok(especialidad);
        }

        [HttpPost]
        public async Task<ActionResult<Speciality>> CrearEspecialidad([FromBody] SpecialityDto specialityDto)
        {
            if (!ModelState.IsValid)
            {
                return BadRequest(ModelState);
            }

            if (await dbContext.Specialities.AnyAsync(u => u.SpecialityName == specialityDto.SpecialityName))
            {
                return BadRequest("A speciality with the same name already exists.");
            }

            var speciality = new Speciality
            {
                SpecialityName = specialityDto.SpecialityName
            };

            dbContext.Specialities.Add(speciality);
            await dbContext.SaveChangesAsync();

            return CreatedAtAction(nameof(CrearEspecialidad), new { id = speciality.SpecialityId }, new { message = "Especialidad creada con éxito" });
        }

    }
}
