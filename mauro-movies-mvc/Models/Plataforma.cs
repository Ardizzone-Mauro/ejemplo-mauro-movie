using System.ComponentModel.DataAnnotations;

namespace mauro_movies_mvc.Models
{
    public class Plataforma
    {
        public int Id { get; set; }
        [Required]
        [StringLength(50)]
        public string Nombre { get; set; }
        [Url]
        public string Url { get; set; }
        [Url]
        public string LogoUrl { get; set; }
        public List<Pelicula>? ListaPeliculasPlataforma { get; set; }
    }
}
