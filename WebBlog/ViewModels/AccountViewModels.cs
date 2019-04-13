using System;
using System.Collections.Generic;
using System.ComponentModel.DataAnnotations;
using System.Linq;
using System.Threading.Tasks;

namespace WebBlog.ViewModels
{
    public class Credentials
    {
        [Required(ErrorMessage = "Поле є обов'язковим")]
        [EmailAddress(ErrorMessage = "Не валідна пошта")]
        public string Email { get; set; }
        [Required(ErrorMessage = "Поле є обов'язковим")]
        public string Password { get; set; }
    }
}
