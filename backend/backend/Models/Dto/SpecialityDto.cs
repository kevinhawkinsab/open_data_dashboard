using System.ComponentModel.DataAnnotations;

namespace backend.Models.Dto
{
    public class SpecialityDto
    {
        public int SpecialityId { get; set; }

        [Required]
        public string SpecialityName { get; set; }
    }
}
