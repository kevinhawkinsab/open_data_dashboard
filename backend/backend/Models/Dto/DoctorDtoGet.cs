using static backend.Models.Enums.Enums;
using System.ComponentModel.DataAnnotations;

namespace backend.Models.Dto
{
    public class DoctorDtoGet
    {
        public int DoctorId { get; set; }
        public string Identification { get; set; }
        public string Email { get; set; }
        public string FirstName { get; set; }
        public string LastName { get; set; }
        public DateTime Birthday { get; set; }
        public Gender Gender { get; set; }
        public string Phone { get; set; }
        public Status Status { get; set; }
        public int SpecialityId { get; set; }
    }
}
