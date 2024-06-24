using static backend.Models.Enums.Enums;
using System.ComponentModel.DataAnnotations;
using Newtonsoft.Json;
using Newtonsoft.Json.Converters;

namespace backend.Models
{
    public class Doctor
    {
        [Key]
        public int DoctorId { get; set; }

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

        [JsonConverter(typeof(StringEnumConverter))]
        public Gender Gender { get; set; }

        [StringLength(15)]
        public string? Phone { get; set; }

        [JsonConverter(typeof(StringEnumConverter))]
        public Status Status { get; set; }

        public int SpecialityId { get; set; }
        public Speciality Speciality { get; set; }

        public int UserId { get; set; }
        public User User { get; set; }

        // Relación uno-a-muchos: un Doctor puede tener muchas Appointments
        public ICollection<Appointment> Appointments { get; set; } = new List<Appointment>();
    }
}
