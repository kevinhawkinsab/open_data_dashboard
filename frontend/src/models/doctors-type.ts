type Doctor = {
    id: number;
    name: string;
    speciality: string;
    experience: number;
    rating: number;
    reviews: number;
    patients: number;
    avatar: string;
    about: string;
    phone: string;
    email: string;
    available: boolean;
};
  
export type DoctorModel = Doctor[];
  
