using AutoMapper;
using backend.Models.Dto;

namespace backend.Models
{
    public class MappingProfile : Profile
    {
        public MappingProfile()
        {
            CreateMap<Patient, PatientDtoGet>();
            CreateMap<Doctor, DoctorDtoGet>();
            CreateMap<Appointment, AppoitmentsDtoGet>();
        }
    }
}