using System;
using System.Collections.Generic;
using System.Linq;
using System.Text;
using System.Threading.Tasks;
using Microsoft.AspNetCore.Mvc;
using Microsoft.AspNetCore.Mvc.RazorPages;
using static System.Net.Mime.MediaTypeNames;
using Rotativa.AspNetCore;

// For more information on enabling MVC for empty projects, visit https://go.microsoft.com/fwlink/?LinkID=397860

namespace Proyecto.Controllers
{
    public class InformesController : Controller
    {
        //public string Numinform { get; set; } = string.Empty;
        //public string Ejtxt { get; set; } = string.Empty;

        // GET: localhost: Views/Informes/DescargarInformes
        //[HttpGet]
        public IActionResult DescargarInformes()
        {
            return View();
        }

        public ActionResult ConvertToPDF()
        {
            return new ViewAsPdf("DescargarInformes");
        }

        //public AppDbContext() : base("name=DefaultConnection")
        //{

        //}

        //public DbSet<Customer> Customers { get; set; }

        //POST: localhost: Views/Informes/DescargarInformes
        //[HttpPost]
        //protected IActionResult Download_Click(string download)
        //{
        //return View();   
        //}
    }
}