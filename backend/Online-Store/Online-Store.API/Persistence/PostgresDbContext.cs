using Microsoft.EntityFrameworkCore;
using Online_Store.API.Models;

namespace Online_Store.API.Persistence
{
    public class PostgresDbContext : DbContext
    {
        public PostgresDbContext(DbContextOptions<PostgresDbContext> options)
        : base(options)
        {


        }
        public DbSet<User> Users { get; set; }
    }
}
