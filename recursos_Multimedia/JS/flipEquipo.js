// Inicializa todos los imagenes de los miembros con la funcionalidad de voltear la imagen
document.addEventListener('DOMContentLoaded', function() {
    const bocetos = document.querySelectorAll('.boceto');
    
    bocetos.forEach(boceto => {
        boceto.addEventListener('click', function(e) {
            e.preventDefault();
            // Toma el container del miembro padre para encontrar ambas imágenes
            const miembro = this.closest('.miembro');
            
            if (miembro) {
                // Toma ambas imágenes dentro de este miembro
                const bocetoImg = miembro.querySelector('.boceto');
                const infoImg = miembro.querySelector('.info_miembro');
                
                // Alterna la class volteada
                bocetoImg.classList.toggle('flipped');
                infoImg.classList.toggle('flipped');
            }
        });
        
        // Añadir el cursor pointer para indicar que se puede hacer clic
        boceto.style.cursor = 'pointer';
    });
    
    // Añadir manejadores de clic a las imágenes para voltearlas de nuevo
    const infoImages = document.querySelectorAll('.info_miembro');
    infoImages.forEach(infoImg => {
        infoImg.addEventListener('click', function(e) {
            e.preventDefault();
            const miembro = this.closest('.miembro');
            
            if (miembro) {
                const bocetoImg = miembro.querySelector('.boceto');
                const infoImg = miembro.querySelector('.info_miembro');
                
                // Alterna la class volteada
                bocetoImg.classList.toggle('flipped');
                infoImg.classList.toggle('flipped');
            }
        });
        
        // Añadir el cursor pointer para indicar que se puede hacer clic
        infoImg.style.cursor = 'pointer';
    });
});