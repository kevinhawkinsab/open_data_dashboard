using Microsoft.EntityFrameworkCore;
using backend.Models;
using Microsoft.AspNetCore.Mvc;
using backend.Context;

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
            var listaRoles = await dbContext.Roles.ToListAsync();
            return StatusCode(StatusCodes.Status200OK, listaRoles);
        }

        [HttpGet]
        [Route("{id:int}")]
        public async Task<IActionResult> ObtenerRole(int id)
        {
            var role = await dbContext.Roles.FirstOrDefaultAsync(role => role.RoleId == id);
            return StatusCode(StatusCodes.Status200OK, role);
        }

        [HttpPost]
        public async Task<IActionResult> CrearRole(Role role)
        {
            if(role == null || string.IsNullOrEmpty(role.RoleName))
            {
                return BadRequest("Invalid role data");
            }

            dbContext.Roles.Add(role);  
            await dbContext.SaveChangesAsync();

            return StatusCode(StatusCodes.Status200OK, new { message  = "Rol creado con éxito!"});
        }
    }
}
