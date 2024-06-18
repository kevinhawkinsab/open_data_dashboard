using Microsoft.EntityFrameworkCore;
using backend.Models;
using Microsoft.AspNetCore.Mvc;
using backend.Context;
using backend.Models.Dto;

namespace backend.Controllers
{
    [Route("api/[controller]")]
    [ApiController]
    public class RoleController: ControllerBase
    {
        private readonly AppDbContext dbContext;

        public RoleController(AppDbContext _dbContext) 
        {
            dbContext = _dbContext;
        }

        [HttpGet]
        public async Task<IActionResult> ObtenerRoles()
        {
            var roles = await dbContext.Roles
             .Select(r => new RoleDto
             {
                 RoleId = r.RoleId,
                 RoleName = r.RoleName
             })
             .ToListAsync();

            return Ok(roles);
        }

        [HttpGet]
        [Route("{id:int}")]
        public async Task<IActionResult> ObtenerRole(int id)
        {
            var role = await dbContext.Roles.Where(r => r.RoleId == id).Select(roleDto => new RoleDto
            {
                RoleId = roleDto.RoleId,
                RoleName = roleDto.RoleName
            }).FirstOrDefaultAsync();

            if (role == null)
            {
                return NotFound();
            }

            return Ok(role);
        }

        [HttpPost]
        public async Task<ActionResult<RoleDto>> CrearRole([FromBody] RoleDto roleDto)
        {
            if (!ModelState.IsValid)
            {
                return BadRequest(ModelState);
            }

            if (await dbContext.Roles.AnyAsync(r => r.RoleName == roleDto.RoleName))
            {
                return BadRequest("A role with the same name already exists.");
            }

            var role = new Role
            {
                RoleName = roleDto.RoleName
            };

            dbContext.Roles.Add(role);
            await dbContext.SaveChangesAsync();

            var responseDto = new RoleDto
            {
                RoleId = role.RoleId,
                RoleName = role.RoleName
            };
            return CreatedAtAction(nameof(ObtenerRole), new { id = role.RoleId }, responseDto);

        }
    }
}
