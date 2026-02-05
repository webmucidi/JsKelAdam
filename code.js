let sacVarMi = false;
let resim=document.querySelector("img")

document.addEventListener("click",degistir);

function degistir(){
    sacVarMi = !sacVarMi;

    if(sacVarMi){
        resim.src = "images/sac.png";
    }else{
        resim.src = "images/kel.png";
    }
    
}