using backend.Models;
using Microsoft.EntityFrameworkCore;

namespace backend.Context
{
    public class AppDbContext: DbContext
    {

        public AppDbContext(DbContextOptions<AppDbContext> options) : base(options) { }

        public DbSet<User> Users { get; set; }
        public DbSet<Role> Roles { get; set; }
        public DbSet<Patient> Patients { get; set; }
        public DbSet<Doctor> Doctors { get; set; }
        public DbSet<Speciality> Specialities { get; set; }
        public DbSet<Appointment> Appointments {  get; set; }
        

        protected override void OnModelCreating(ModelBuilder modelBuilder)
        {
            base.OnModelCreating(modelBuilder);

            modelBuilder.Entity<User>(col =>
            {
                col.HasOne(u => u.Role).WithMany(r => r.Users).HasForeignKey(u => u.RoleId).OnDelete(DeleteBehavior.Restrict);
            });

            modelBuilder.Entity<Patient>(col =>
            {
                col.HasOne(p => p.User).WithMany().HasForeignKey(p => p.UserId).OnDelete(DeleteBehavior.Restrict);
                col.Property(p => p.Status).HasConversion<string>();
                col.Property(p => p.Gender).HasConversion<string>();
            });

            modelBuilder.Entity<Doctor>(col =>
            {
                col.HasOne(d => d.User).WithMany().HasForeignKey(d => d.UserId).OnDelete(DeleteBehavior.Restrict);

                col.HasOne(d => d.Speciality).WithMany(s => s.Doctors).HasForeignKey(d => d.SpecialityId).OnDelete(DeleteBehavior.Restrict);

                col.Property(d => d.Status).HasConversion<string>();
                col.Property(d => d.Gender).HasConversion<string>();
            });

            modelBuilder.Entity<Appointment>(col =>
            {
                col.HasOne(a => a.Patient).WithMany(p => p.Appointments).HasForeignKey(a => a.PatientId).OnDelete(DeleteBehavior.Restrict);

                col.HasOne(a => a.Doctor).WithMany(d => d.Appointments).HasForeignKey(a => a.DoctorId).OnDelete(DeleteBehavior.Restrict);

                col.Property(a => a.CreationDate).HasDefaultValueSql("GETDATE()");
            });


            modelBuilder.Entity<Role>().ToTable("Role");
            modelBuilder.Entity<User>().ToTable("User");
            modelBuilder.Entity<Doctor>().ToTable("Doctor");
            modelBuilder.Entity<Patient>().ToTable("Patient");
            modelBuilder.Entity<Speciality>().ToTable("Speciality");
            modelBuilder.Entity<Appointment>().ToTable("Appointment");
        }
    }
}
