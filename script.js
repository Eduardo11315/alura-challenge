     const mensajeEscrito = document.querySelector(".area_texto")
     const mensajeDesencriptado = document.querySelector(".texto_desencriptado")



     //Funcion Encriptado
function encriptar(stringEncriptado){
      let reglasEncriptar = [["a", "ai"], ["e", "enter"], ["i", "imes"], ["o", "ober"], ["u", "ufat"]];
      stringEncriptado = stringEncriptado.toLowerCase()


    for(let i = 0; i <reglasEncriptar.length; i++){
        if(stringEncriptado.includes(reglasEncriptar[i][0])){
            stringEncriptado = stringEncriptado.replaceAll(reglasEncriptar[i][0], reglasEncriptar[i][1])

        }
       }
       return stringEncriptado
    }


      //boton encriptar
function encriptarTexto(){
        const textoEncriptado = encriptar(mensajeEscrito.value)
        mensajeDesencriptado.value = textoEncriptado
        mensajeEscrito.value = "";
        mensajeDesencriptado.style.backgroundImage = "none";
    
    }

       //Funcion Desencriptar 
function desencriptar(stringDesencriptado){
    let reglasEncriptar = [["a", "ai"], ["e", "enter"], ["i", "imes"], ["o", "ober"], ["u", "ufat"]];
    stringDesencriptado = stringDesencriptado.toLowerCase()
    
    for(let i = 0; i < reglasEncriptar.length; i++){
        if(stringDesencriptado.includes(reglasEncriptar[i][1])){
            stringDesencriptado = stringDesencriptado.replaceAll(reglasEncriptar[i][1], reglasEncriptar[i][0])
        }
    }
    return stringDesencriptado
 } 
 
 
      //boton desencriptar

 function desencriptarTexto(){
        const textoEncriptado = desencriptar(mensajeEscrito.value)
        mensajeDesencriptado.value = textoEncriptado
        mensajeEscrito.value = "";
        

    }


       //validacion de texto

    function validarTexto(texto){
        let caracteres = /[~!@#$%^&*()_+|}{[\]\\\/?><:"`;.,áéíóúàèìòù']/g;
        let mayusculas = /[A-Z]/g;  
        let vacio=""; 
        
          
        if(texto.match(mayusculas)||texto.match(caracteres)){
            alert("No se permiten caracteres especiales ni mayusculas");
            return true; 
        }else if(texto==vacio){
           alert("Ingrese un mensaje para encriptar");
            return true;
       }else {
            return false;
        }
    }
        
         //boton copiar
         function copiarTexto(){
         const btnCopiar = document.querySelector(".copiar_texto");
         btnCopiar.addEventListener("click", copiar = () => {
            var contenido =document.querySelector(".texto_desencriptado").textContent;
            navigator.clipboard.writeText(contenido)
         })

        }
            
            





      