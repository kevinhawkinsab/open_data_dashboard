using System.ComponentModel.DataAnnotations;

namespace backend.Models
{
    public class Speciality
    {
        public int SpecialityId { get; set; }

        [Required]
        public string SpecialityName { get; set; }

        public ICollection<Doctor> Doctors { get; set; } = new List<Doctor>();
    }
}
