using static backend.Models.Enums.Enums;

namespace backend.Models.Dto;

public class PatientDtoGet
{
    public int PatientId { get; set; }
    public string Identification { get; set; }
    public string Email { get; set; }
    public string FirstName { get; set; }
    public string LastName { get; set; }
    public Gender Gender { get; set; }
    public string Phone { get; set; }
    public DateTime Birthday { get; set; }
    public Status Status { get; set; }
}
