const pantalla = document.querySelector('.pantalla'); 
const botones = document.querySelectorAll('.btn');


botones.forEach(boton => {
    boton.addEventListener('click', ()=> {
        // console.log(boton.textContent);
        const botonApretado = boton.textContent;
        
        if (boton.id === 'c') {
            pantalla.textContent = '0';
            return;
        };

        if (boton.id === 'borrar') {
            if(pantalla.textContent.length === 1 || pantalla.textContent === 'Error!' || pantalla.textContent === 'Syntaxt Error') {
                    pantalla.textContent = '0';
            } else {
                pantalla.textContent = pantalla.textContent.slice(0, -1);
            };
            return;
        };

        if(boton.id === 'igual') {
            try {
                pantalla.textContent = eval(pantalla.textContent);
            } catch {
                pantalla.textContent = 'Syntaxt Error!';
            }
            return;
        };

        /* Declaracion de variables para mostrar el numero del btn apretado desde mis clases mostradas en la pantalla */
        // pantalla.textContent += botonApretado;
        /* Coloco el += para anidar varios numeros en la pantalla para que se muestren ambos anidados */

        if (pantalla.textContent === '0' || pantalla.textContent === 'Error!' ) {
            pantalla.textContent = botonApretado;
        } else {
            pantalla.textContent += botonApretado;  
        };
        
    })
});