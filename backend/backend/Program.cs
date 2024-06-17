using backend.Context;
using backend.Models;
using Microsoft.EntityFrameworkCore;
using Newtonsoft.Json.Converters;
using Microsoft.OpenApi.Models;
using static backend.Models.Enums.Enums;
using Microsoft.OpenApi.Any;

var builder = WebApplication.CreateBuilder(args);

// Add services to the container.
// Crear variable para cadena de conexion
var connectionString = builder.Configuration.GetConnectionString("CadenaConeccion");
builder.Services.AddDbContext<AppDbContext>(options => options.UseSqlServer(connectionString));

// Agregar AutoMapper
builder.Services.AddAutoMapper(typeof(MappingProfile));

// Configurar Newtonsoft.Json y StringEnumConverter
builder.Services.AddControllers()
    .AddNewtonsoftJson(options =>
    {
        options.SerializerSettings.Converters.Add(new StringEnumConverter());
    });

// Configurar Swagger para manejar enums como cadenas
builder.Services.AddSwaggerGen(c =>
{
    c.SwaggerDoc("v1", new OpenApiInfo { Title = "My API", Version = "v1" });
    c.UseInlineDefinitionsForEnums(); // Opcional: Para mostrar los enums inline
    c.MapType<Gender>(() => new OpenApiSchema
    {
        Type = "string",
        Enum = new List<IOpenApiAny>
        {
            new OpenApiString(Gender.Male.ToString()),
            new OpenApiString(Gender.Female.ToString())
        }
    });
    c.MapType<Status>(() => new OpenApiSchema
    {
        Type = "string",
        Enum = new List<IOpenApiAny>
        {
            new OpenApiString(Status.Active.ToString()),
            new OpenApiString(Status.Inactive.ToString())
        }
    });
});

builder.Services.AddEndpointsApiExplorer();

// Permitir el uso de CORS
builder.Services.AddCors(options =>
{
    options.AddPolicy("NuevaPolitica", app =>
    {
        app.AllowAnyOrigin().AllowAnyHeader().AllowAnyMethod();
    });
});

var app = builder.Build();

// Configure the HTTP request pipeline.
if (app.Environment.IsDevelopment())
{
    app.UseSwagger();
    app.UseSwaggerUI();
}

app.UseCors("NuevaPolitica");

app.UseAuthorization();

app.MapControllers();

app.Run();