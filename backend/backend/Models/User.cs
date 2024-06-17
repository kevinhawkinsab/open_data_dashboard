

using System.ComponentModel.DataAnnotations;
using System.Data;

namespace backend.Models
{
    public class User
    {
        public int UserId { get; set; }

        [Required]
        public string UserName { get; set; }

        [Required]
        public string Password { get; set; }

        [Required]
        public string Email { get; set; }
         
        public int RoleId { get; set; }
        public Role Role { get; set; }
    }
}
