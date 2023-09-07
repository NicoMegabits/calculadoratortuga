
//Creo una constante con pocos valores para cada boton

//llamo al id del boton y la barra que se encuentra en el archivo html
const barratexto = document.getElementById("barra de numeros")
const boton1 = document.getElementById("BTN1") //Creas la accion que realizar el boton una vez precionado
const boton2 = document.getElementById("BTN2")


let a=0




if (a==0){
boton1.addEventListener("click" , function(){ 
    
    var b="1"
    
    barratexto.value = b
    
    
    
    return a++;

  
     
});}

boton2.addEventListener("click" , function(){ 
    
    const c="2"
    
    barratexto.value = c;
    

    return a++;
     
});


