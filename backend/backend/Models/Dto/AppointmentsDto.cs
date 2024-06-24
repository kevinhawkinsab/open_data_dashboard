using System.ComponentModel.DataAnnotations;

namespace backend.Models.Dto
{
    public class AppointmentsDto
    {
        [Required]
        public DateTime Date { get; set; }

        [Required]
        public string Time { get; set; }

        [Required]
        public string Clinic { get; set; }

        public DateTime CreationDate { get; set; } = DateTime.Now;

        [Required]
        public int PatientId { get; set; }

        [Required]
        public int DoctorId { get; set; }
    }
}
