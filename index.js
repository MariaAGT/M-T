function toggleMenu(id) {
    // Obtiene todos los submenús
    const allSubmenus = document.querySelectorAll('.submenu');
    
    // Cierra todos los submenús excepto el que se está abriendo
    allSubmenus.forEach(submenu => {
        if (submenu.id !== id) {
            submenu.classList.remove('active');
        }
    });

    // Alterna la visibilidad del submenú que se está abriendo
    const submenu = document.getElementById(id);
    submenu.classList.toggle('active');
}

function closeMenu(id) {
    // Cierra el submenú correspondiente
    const submenu = document.getElementById(id);
    submenu.classList.remove('active');
}
