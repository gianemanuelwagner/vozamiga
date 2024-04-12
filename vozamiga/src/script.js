// Variable global para almacenar la oración formada por las imágenes seleccionadas
var oracion = "";

function convertir() {
    var textTelegrafic = document.getElementById("inputText").value;
    var textNatural = textTelegrafic.replace(/⠠⠊⠅⠑⠎/g, "Hola").replace(/⠼⠊⠎/g, "Adéu");
    document.getElementById("resultat").innerText = textNatural;
}

function seleccionarImagen(imagen) {
    var resultado = "";
    switch (imagen) {
        case 'YO':
            resultado = "YO";
            break;
        case 'VOS':
            resultado = "VOS";
            break;
        case 'NOSOTROS':
            resultado = "Nosotros";
            break;
        case 'USTEDES':
            resultado = "Ustedes";
            break;
        case 'QUIERO':
            resultado = "QUIERO";
            break;
        case 'QUERES':
            resultado = "QUERES";
            break;
        case 'QUEREMOS':
            resultado = "QUEREMOS";
            break;
        case 'QUIEREN':
            resultado = "QUIEREN";
            break;
        case 'COMER':
            resultado = "COMER";
            break;
        case 'DORMIR':
            resultado = "DORMIR";
            break;
        case 'ESTUDIAR':
            resultado = "ESTUDIAR";
            break;
        case 'TRABAJAR':
            resultado = "TRABAJAR";
            break;
        default:
            resultado = "Seleccione una imagen válida.";
            break;
    }
    // Agregar la palabra seleccionada a la oración
    oracion += resultado + " ";
    document.getElementById("resultat").innerText = oracion;
}

function hablar() {
    // Verificar si el navegador es compatible con la síntesis de voz
    if ('speechSynthesis' in window) {
        // Crear un objeto de síntesis de voz
        var synthesis = window.speechSynthesis;
        
        // Obtener el texto a hablar desde el área de resultado
        var texto = document.getElementById("resultat").innerText;

        // Verificar si hay texto para hablar
        if (texto !== '') {
            // Crear un objeto de solicitud de síntesis de voz
            var utterance = new SpeechSynthesisUtterance(texto);
            
            // Iniciar la síntesis de voz
            synthesis.speak(utterance);
        } else {
            alert("No hay texto para hablar.");
        }
    } else {
        alert("Tu navegador no es compatible con la síntesis de voz.");
    }
}

function limpiar() {
    // Limpiar la variable que almacena la oración formada
    oracion = "";
    // Limpiar el área de resultado
    document.getElementById("resultat").innerText = "";
}
