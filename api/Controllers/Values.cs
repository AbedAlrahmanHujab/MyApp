using System;
using System.Collections.Generic;
using System.Linq;
using db;
using Microsoft.AspNetCore.Mvc;
using entity;
using Microsoft.EntityFrameworkCore;
using System.Threading.Tasks;

namespace api.Controllers
{
    [ApiController]
    [Route("api/[controller]")]
    public class Values : ControllerBase
    {
        private DataContext _context { get; set; }
        public Values(DataContext context)
        {
            _context = context;
        }

        // GET api/values
        [HttpGet]
        public async Task<ActionResult<IEnumerable<Value>>> Get()
        {
            var valuesEntity =await _context.Values.ToListAsync();
            return Ok(valuesEntity);
        }

        // GET api/values/5
        [HttpGet("{id}")]
        public async Task<ActionResult<string>> Get(int id)
        {
           Value entity= await _context.Values.SingleOrDefaultAsync(entity=>entity.Id==id);
           if (entity==null)
           {
               return Ok("No Data Found");
           }

           return Ok(entity);
        }
    }
}