using Microsoft.AspNetCore.Mvc;
using Microsoft.EntityFrameworkCore;
using Online_Store.API.Persistence;

namespace Online_Store.API.Controllers
{
    [ApiController]
    [Route("api/[controller]")]
    public class UsersController : ControllerBase
    {
        private readonly PostgresDbContext _postgresDbContext;

        public UsersController(PostgresDbContext postgresDbContext)
        {
            _postgresDbContext = postgresDbContext;
        }

        [HttpGet]
        public async Task<IActionResult> GetAllUsersAsync()
        {
            var users = await _postgresDbContext.Users.ToListAsync();
            return Ok(users);
        }
    }
}
