function escribe(num) { 
    var colores = ["ninguno", "rojo", "amarillo", "verde", "azul",
    "morado","naranja","celeste","rosado","limón","gris"];
    var texto = document.getElementById('respuesta');
    texto.innerHTML = colores[num];
    
    switch(num){
        case 1: texto.style.color = "#E74C3C"; break;
        case 2: texto.style.color = "#ffd800"; break;
        case 3: texto.style.color = "#27AE60"; break;
        case 4: texto.style.color = "#1B4F72"; break;
        case 5: texto.style.color = "#6C3483"; break;
        case 6: texto.style.color = "orange"; break;
        case 7: texto.style.color = "#3498DB"; break;
        case 8: texto.style.color = "#F48FB1"; break;
        case 9: texto.style.color = "#CDDC39"; break;
        case 10: texto.style.color = "gray"; break;
        default: texto.style.color = "black";
    }
    
   
}

