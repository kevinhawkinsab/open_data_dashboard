using System.ComponentModel.DataAnnotations;
using static backend.Models.Enums.Enums;

namespace backend.Models
{
    public class Patient
    {
        [Key]
        public int PatientId { get; set; }

        [Required]
        public string Identification { get; set; }

        [Required]
        public string Email { get; set; }

        [Required]
        public string FirstName { get; set; }

        [Required]
        public string LastName { get; set; }

        [Required]
        [DataType(DataType.Date)]
        public DateTime Birthday { get; set; }

        [Required]
        public Gender Gender { get; set; }

        [StringLength(15)]
        public string? Phone { get; set; }

        public Status? Status { get; set; }

        public int UserId { get; set; }
        public User? User { get; set; }

        public ICollection<Appointment> Appointments { get; set; } = new List<Appointment>();
    }
}