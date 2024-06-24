using System.ComponentModel.DataAnnotations;

namespace backend.Models.Dto
{
    public class AppoitmentsDtoGet
    {
        public int AppointmentId { get; set; }
        public DateTime Date { get; set; }
        public string Time { get; set; }
        public string Clinic { get; set; }
        public int PatientId { get; set; }
        public int DoctorId { get; set; }
    }
}
