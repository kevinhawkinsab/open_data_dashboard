using static backend.Models.Enums.Enums;
using System.ComponentModel.DataAnnotations;
using Newtonsoft.Json;
using Newtonsoft.Json.Converters;
namespace backend.Models.Dto
{
    public class DoctorDto
    {
        [Required]
        public string Identification { get; set; }

        [Required]
        public string Email { get; set; }

        [Required]
        public string Username { get; set; }

        [Required]
        public string Password { get; set; }

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

        [Required]
        public int SpecialityId { get; set; }
    }
}
