using API.Data;
using API.Entities;
using Microsoft.AspNetCore.Mvc;
using Microsoft.EntityFrameworkCore;

namespace API.Controllers
{
   
    public class ProductsController : BaseAPIController
    {
        private readonly StoreDbContext _context;
        public ProductsController(StoreDbContext context)
        {
            _context = context;
        }
        [HttpGet]
        public async Task<ActionResult<List<Product>>> GetProducts (){
            var productList = await  _context.Products.ToListAsync();
            return Ok(productList);
        }
        [HttpGet("{id}")]
        public async Task<ActionResult<Product>> GetProductById(int id){
            var product =await _context.Products.FirstOrDefaultAsync(x => x.Id == id);
            return Ok(product);
        }
    }
}