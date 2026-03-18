using System.ComponentModel.DataAnnotations;

namespace mauro_movies_mvc.Models
{
    public class Genero
    {
        public int Id { get; set; }
        [Required]
        [StringLength(50)]
        public string Descripcion { get; set; }
        public List<Pelicula>? ListaPeliculasGenero { get; set; }
    }
}
