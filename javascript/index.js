const vsenha = document.querySelector("#senha");





let senhaNormal= localStorage.getItem("senhaNormal");
let senhaPreferencial= localStorage.getItem("senhaPreferencial");
let ultSenha = localStorage.getItem("ultSenha");

if(!senhaNormal){
    senhaNormal=0
}
if(!senhaPreferencial){
    senhaPreferencial=0
}
if(!ultSenha){
    ultSenha="N"
}

mostrarSenha()
window.addEventListener("keydown", function(e){

if(e.key == "n" || e.key == "N"){
 senhaNormal++;
 ultSenha= "N";
 audio.play()
}else if(e.key == "p" || e.key == "P"){
   senhaPreferencial++; 
   ultSenha= "P"
   audio.play()
}
else if(e.key == "r" || e.key == "R"){
    senhaNormal= 0;
    senhaPreferencial=0
    ultSenha="N";
    audio.play()
     }
    mostrarSenha()

localStorage.setItem("senhaNormal",senhaNormal)
localStorage.setItem("senhaPreferencial",senhaPreferencial)
localStorage.setItem("ultSenha",ultSenha)
let audio = new Audio("senha.mp3")

});



function mostrarSenha(){
    if(ultSenha=="N"){
        vsenha.innerHTML = "N" + parseInt(senhaNormal).toLocaleString('pt-br',{minimumIntegerDigits:3});
    }else{
        vsenha.innerHTML = "P" + parseInt(senhaPreferencial).toLocaleString('pt-br',{minimumIntegerDigits:3});
    }
}



