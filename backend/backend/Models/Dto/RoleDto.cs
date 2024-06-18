using System.ComponentModel.DataAnnotations;

namespace backend.Models.Dto
{
    public class RoleDto
    {
        public int RoleId { get; set; }

        //[Required(ErrorMessage = "The filed role name is required")]
        [Required]
        public string RoleName { get; set; }

    }
}
