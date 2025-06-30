function finalizar() {

    condicoes()

    
    //----------------------------------------------------



    // logica de finalização.

    //Sushi/Nigiri

    atumTotal = 0;
    ebiTotal = 0;
    kaniTotal = 0;
    peixeBrancoTotal = 0;
    salmaoTotal = 0;
    sushiSkinTotal = 0;
    sushiTilapiaTotal = 0;
    djowSalmaoTotal = 0;
    djowGeleiaTotal = 0;
    alhoPoroTotal = 0;
    sicilianoTotal = 0;
    rigaTotal = 0;

    let paragrafoExistente = document.getElementById('msgatum');

    let paragrafoExistente2 = document.getElementById('msgEbi');

    let paragrafoExistente3 = document.getElementById('msgKani');

    let paragrafoExistente4 = document.getElementById('msgPeixeBranco');

    let paragrafoExistente5 = document.getElementById('msgSalmao');

    let paragrafoExistente6 = document.getElementById('msgSushiSkin');

    let paragrafoExistente7 = document.getElementById('msgSushiTilapia');

    let paragrafoExistente8 = document.getElementById('msgDjowSalmao');

    let paragrafoExistente9 = document.getElementById('msgDjowGeleia');

    let paragrafoExistente10 = document.getElementById('msgAlhoPoro');

    let paragrafoExistente11 = document.getElementById('msgSiciliano');

    let paragrafoExistente12 = document.getElementById('msgRigaware');
    
    if (paragrafoExistente) {
        paragrafoExistente.remove();


    }

    if (paragrafoExistente2) {
        paragrafoExistente2.remove();
    }

    if (paragrafoExistente3) {
        paragrafoExistente3.remove();
    }

    if (paragrafoExistente4){
        paragrafoExistente4.remove();
    }

    if(paragrafoExistente5){
        paragrafoExistente5.remove();
    }
    
    if(paragrafoExistente6){
        paragrafoExistente6.remove();
    }
    
    if(paragrafoExistente7){
        paragrafoExistente7.remove();
    }

    if(paragrafoExistente8){
        paragrafoExistente8.remove();
    }

    if(paragrafoExistente9){
        paragrafoExistente9.remove();
    }

    if(paragrafoExistente10){
        paragrafoExistente10.remove();
    }

    if(paragrafoExistente11){
        paragrafoExistente11.remove();
    }

    if(paragrafoExistente12){
        paragrafoExistente12.remove();
    }


    //----------------------------------------------------

   const contador = document.getElementById('quantidade')
   contador.innerHTML = '0';

   // Sashimis---------------------------------------------------------------------------------------------------/-------------

   sashimiSalmaoTotal = 0;
   sashimiAtumTotal = 0;
   sashimiPeixeBrancoTotal = 0;
   sashimiTilapiaTotal = 0;

   let paragrafoExistente13 = document.getElementById('msgSashimiSalmao');

   let paragrafoExistente14 = document.getElementById('msgSashimiAtum');

   let paragrafoExistente15 = document.getElementById('msgSashimiPeixeBranco');

   let paragrafoExistente16 = document.getElementById('msgSashimiTilapia');

   if(paragrafoExistente13){
    paragrafoExistente13.remove();
   }

   if(paragrafoExistente14){
    paragrafoExistente14.remove();
   }

   if(paragrafoExistente15){
    paragrafoExistente15.remove();
   } 

   if(paragrafoExistente16){
    paragrafoExistente16.remove();
   }


}