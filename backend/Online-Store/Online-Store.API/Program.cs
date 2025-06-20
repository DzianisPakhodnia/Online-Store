using Microsoft.EntityFrameworkCore;
using Online_Store.API.Persistence;

var builder = WebApplication.CreateBuilder(args);

builder.Services.AddControllers();
builder.Services.AddEndpointsApiExplorer();
builder.Services.AddSwaggerGen();

builder.Services.AddDbContext<PostgresDbContext>(options =>
    options.UseNpgsql(builder.Configuration.GetConnectionString("DefaultConnection")));

builder.Services.AddCors(options =>
{
    options.AddPolicy("AllowFrontend", policy =>
    {
        policy.WithOrigins("http://denpa.tw1.ru:8080")
              .AllowAnyHeader()
              .AllowAnyMethod();
    });
});
builder.WebHost.UseUrls("http://0.0.0.0:8080");


var app = builder.Build();

if (app.Environment.IsDevelopment())
{
    app.UseSwagger();
    app.UseSwaggerUI();
}

using (var scope = app.Services.CreateScope())
{
    var db = scope.ServiceProvider.GetRequiredService<PostgresDbContext>();
    db.Database.Migrate();
}

app.UseRouting(); // добавлено

app.UseCors("AllowFrontend");

app.UseAuthorization();

app.MapControllers();

app.Run();
