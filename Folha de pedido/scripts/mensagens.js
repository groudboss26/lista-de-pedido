// Sushi/Nigiri Ebi

function atualizarMensagemEbi() {

    paragrafoExistente2 = document.getElementById('msgEbi')

    if (!paragrafoExistente2) {
        let pedido = document.getElementById('pedidos')

        newDiv2 = document.createElement('div')
        addParagrafo2 = document.createElement('p')

        addParagrafo2.id = 'msgEbi';
        addParagrafo2.innerHTML = `Você adicionou ${ebiTotal} de sushi/nigiri Ebi.`

        pedido.appendChild(newDiv2)
        newDiv2.appendChild(addParagrafo2)
        
        contadorDePedido()
        paragrafoExistente2 = addParagrafo2;
    } else {
        paragrafoExistente2.innerHTML = `Você adicionou ${ebiTotal} de sushi/nigiri Ebi.`
    }
// se o total do pedido chegar a zero, o item será excluido.
    if (ebiTotal > 0) {

        paragrafoExistente2.innerHTML = `Você adicionou ${ebiTotal} sushi/nigiri ebi.`
    } else if (paragrafoExistente2) {
        paragrafoExistente2.remove();

        contadorDePedido()
    }
}

// Sushi/Nigiri Atum

function atualizarMensagemAtum() {
    let paragrafoExistente = document.getElementById('msgatum');



    if (!paragrafoExistente) {
        let pedido = document.getElementById('pedidos')
        let newDiv = document.createElement('div')
        let addParagrafo = document.createElement('p')

        addParagrafo.id = 'msgatum'
        addParagrafo.innerHTML = `Você adicionou ${atumTotal} de sushi/nigiri Atum`


        pedido.appendChild(newDiv)
        newDiv.appendChild(addParagrafo)
        contadorDePedido()

        paragrafoExistente = addParagrafo;
    } else {
        paragrafoExistente.innerHTML = `Você adicionou ${atumTotal} de sushi/nigiri Atum`

    }

    if (atumTotal > 0) {

        paragrafoExistente.innerHTML = `Você adicionou ${atumTotal} de sushi/nigiri Atum`

// se o total do pedido chegar a zero, o item será excluido.

    } else if (paragrafoExistente) {
        paragrafoExistente.remove();
        contadorDePedido()
    }
}
// Sushi / Nigiri Kani
function atualizarMensagemKani() {

    let paragrafoExistente = document.getElementById('msgKani');

    if (!paragrafoExistente) {

        let pedido = document.getElementById('pedidos')

        let newDiv = document.createElement('div')
        let addParagrafo = document.createElement('p')

        addParagrafo.id = 'msgKani'

        addParagrafo.innerHTML = `Você adicionou ${kaniTotal} de sushi/nigiri kani`

        pedido.appendChild(newDiv)
        newDiv.appendChild(addParagrafo)
        paragrafoExistente = addParagrafo;
        contadorDePedido()
    } else {
        paragrafoExistente.innerHTML = `Você adicionou ${kaniTotal} de sushi/nigiri kani.`
    }
// se o total do pedido chegar a zero, o item será excluido.
    if (kaniTotal > 0) {
        paragrafoExistente.innerHTML = `Você adicionou ${kaniTotal} de sushi/nigiri Kani`

    } else if (paragrafoExistente) {
        paragrafoExistente.remove();
        contadorDePedido()
    }


}
// Sushi / Nigiri Peixe Branco
function atualizarMensagemPeixeBranco() {
    let paragrafoExistente = document.getElementById('msgPeixeBranco');

    if (!paragrafoExistente) {
        let pedido = document.getElementById('pedidos');

        let newDiv = document.createElement('div');

        let addParagrafo = document.createElement('p');

        addParagrafo.id = 'msgPeixeBranco';

        addParagrafo.innerHTML = `Você adicionou ${peixeBrancoTotal} de sushi/nigiri Peixe Branco.`

        pedido.appendChild(newDiv);
        newDiv.appendChild(addParagrafo);
        paragrafoExistente = addParagrafo;
        contadorDePedido()
    }

    else {
        paragrafoExistente.innerHTML = `Você adicionou ${peixeBrancoTotal} sushi/nigiri peixe branco.`
    }
// se o total do pedido chegar a zero, o item será excluido.
    if (peixeBrancoTotal > 0) {
        paragrafoExistente.innerHTML = `Você adicionou ${peixeBrancoTotal} de sushi/nigiri Peixe branco`

    } else if (paragrafoExistente) {
        paragrafoExistente.remove();
        contadorDePedido()
    }

}
// Sushi / Nigiri Salmão
function atualizarMensagemSalmao() {
    let paragrafoExistente = document.getElementById('msgSalmao');

    if (!paragrafoExistente) {

        let pedido = document.getElementById('pedidos')

        let newDiv = document.createElement('div')

        let addParagrafo = document.createElement('p')

        addParagrafo.id = 'msgSalmao';

        addParagrafo.innerHTML = `Você adicionou ${salmaoTotal} sushi/nigiri salmão.`

        pedido.appendChild(newDiv);
        newDiv.appendChild(addParagrafo);
        paragrafoExistente = addParagrafo;

        contadorDePedido()
    }
    else {
        paragrafoExistente.innerHTML = `Você adicionou ${salmaoTotal} sushi/nigiri salmão.`
    }

    // se o total do pedido chegar a zero, o item será excluido.

    if (atumTotal > 0) {
        paragrafoExistente.innerHTML = `Você adicionou ${salmaoTotal} de sushi/nigiri Salmão.`

    } else if (paragrafoExistente) {
        paragrafoExistente.remove();
        contadorDePedido()
    }
}
// Sushi / Nigiri Skin
function atualizarMensagemSushiSkin() {
    let paragrafoExistente = document.getElementById('msgSushiSkin');

    if (!paragrafoExistente) {
        let pedido = document.getElementById('pedidos');

        let newDiv = document.createElement('div');

        let addParagrafo = document.createElement('p');
        addParagrafo.id = 'msgSushiSkin'
        addParagrafo.innerHTML = `Você adicionou ${sushiSkinTotal} sushi/nigiri skin.`

        pedido.appendChild(newDiv);
        newDiv.appendChild(addParagrafo);
        paragrafoExistente = addParagrafo;

        contadorDePedido()

    }
    else {
        paragrafoExistente.innerHTML = `Você adicionou ${sushiSkinTotal} sushi/nigiri skin.`

    }

    // se o total do pedido chegar a zero, o item será excluido.

    if (sushiSkinTotal > 0) {
        paragrafoExistente.innerHTML = `Você adicionou ${sushiSkinTotal} sushi/nigiri skin.`
    } else if (paragrafoExistente) {
        paragrafoExistente.remove();
        contadorDePedido()
    }


}

function atualizarMensagemTilapia(){
    
    let paragrafoExistente = document.getElementById('msgSushiTilapia');

    if(!paragrafoExistente) {
        let pedido = document.getElementById('pedidos');

        let newDiv = document.createElement('div');

        let addParagrafo = document.createElement('p')
        addParagrafo.id = 'msgSushiTilapia';
        addParagrafo.innerHTML = `Você adicionou ${sushiTilapiaTotal} sushi/nigiri Tílapia.`

        pedido.appendChild(newDiv);
        newDiv.appendChild(addParagrafo);
        paragrafoExistente = addParagrafo;

        contadorDePedido()
    }
     else{
        paragrafoExistente.innerHTML = `Você adicionou ${sushiTilapiaTotal} sushi/nigiri Tílapia.`
     }

     // se total do pedido chegar a zero, o item será excluido.

     if(sushiTilapiaTotal > 0){
        paragrafoExistente.innerHTML = `Você adicionou ${sushiTilapiaTotal} sushi/nigiri Tílapia.`
     }else if(paragrafoExistente){
        paragrafoExistente.remove();
        contadorDePedido();
     }
}


function atualizarMensagemDjowSalmao(){
    let paragrafoExistente = document.getElementById('msgDjowSalmao');

    if(!paragrafoExistente){
        let pedido = document.getElementById('pedidos');

        let newDiv = document.createElement('div')

        let addParagrafo = document.createElement('p')
         addParagrafo.id = 'msgDjowSalmao';
         addParagrafo.innerHTML = `Você adicionou ${djowSalmaoTotal} Djow Salmão.`

        pedido.appendChild(newDiv);
        newDiv.appendChild(addParagrafo);
        paragrafoExistente = addParagrafo;

        contadorDePedido();
    }

    else{
        paragrafoExistente.innerHTML = `Você adicionou ${djowSalmaoTotal} Djow Salmão.`
    }

    // se Total do pedido chegar a zero, o item será excluido.

    if(djowSalmaoTotal > 0){
        paragrafoExistente.innerHTML = `Você adicionou ${djowSalmaoTotal} Djow Salmão.`
    }

    else if(paragrafoExistente){
        paragrafoExistente.remove();
        contadorDePedido();
    }
}

function atualizarMensagemDjowGeleia(){
    let paragrafoExistente = document.getElementById('msgDjowGeleia');

    if(!paragrafoExistente){
        let pedido = document.getElementById('pedidos');

        let newDiv = document.createElement('div');

        let addParagrafo = document.createElement('p');
        addParagrafo.id ='msgDjowGeleia';
        addParagrafo.innerHTML = `Você adicionou ${djowGeleiaTotal} Djow Geleia de Pimenta.`

        pedido.appendChild(newDiv);
        newDiv.appendChild(addParagrafo);
        paragrafoExistente = addParagrafo

        contadorDePedido();
    }

    // se total de pedido chegar a zero, o item será excluido.

    if(djowGeleiaTotal > 0){
        paragrafoExistente.innerHTML = `Você adicionou ${djowGeleiaTotal} Djow Geleia de Pimenta.`

    }
    else if(paragrafoExistente){
        paragrafoExistente.remove();
        contadorDePedido();
    }
}

function atualizarMensagemAlhoPoro(){

    let paragrafoExistente = document.getElementById('msgAlhoPoro');

    if(!paragrafoExistente){
        let pedido = document.getElementById('pedidos');

        let newDiv = document.createElement('div');

        let addParagrafo = document.createElement('p')
        addParagrafo.id = 'msgAlhoPoro';
        addParagrafo.innerHTML = `Você adicionou ${alhoPoroTotal} de Djow de Tílapia de Alho Poró.`

        pedido.appendChild(newDiv);
        newDiv.appendChild(addParagrafo);
        
        paragrafoExistente = addParagrafo

        contadorDePedido();
    }

    // se total de pedido chegar a zer, o item será excluido.

    if(alhoPoroTotal > 0){
        paragrafoExistente.innerHTML = `Você adicionou ${alhoPoroTotal} de Djow de Tílapia de Alho Poró.`
    }
    else if(paragrafoExistente){
        paragrafoExistente.remove();
        contadorDePedido();
    }
}


function atualizarMensagemSiciliano(){

    let paragrafoExistente = document.getElementById('msgSiciliano');

    if(!paragrafoExistente){
        let pedido = document.getElementById('pedidos');

        let newDiv = document.createElement('div');

        let addParagrafo = document.createElement('p')
        addParagrafo.id = 'msgSiciliano';
        addParagrafo.innerHTML = `Você adicionou ${sicilianoTotal} de Djow de Tílapia com Alho Poró.`

        pedido.appendChild(newDiv);
        newDiv.appendChild(addParagrafo);
        
        paragrafoExistente = addParagrafo

        contadorDePedido();
    }

    // se total de pedido chegar a zer, o item será excluido.

    if(sicilianoTotal > 0){
        paragrafoExistente.innerHTML = `Você adicionou ${sicilianoTotal} de Djow de Tílapia com Limão Siciliano.`
    }
    else if(paragrafoExistente){
        paragrafoExistente.remove();
        contadorDePedido();
    }
}

function atualizarMensagemRigaware(){

let paragrafoExistente = document.getElementById('msgRigaware');

    if(!paragrafoExistente){
        let pedido = document.getElementById('pedidos');

        let newDiv = document.createElement('div');

        let addParagrafo = document.createElement('p')
        addParagrafo.id = 'msgRigaware';
        addParagrafo.innerHTML = `Você adicionou ${rigaTotal} de Rigaware.`

        pedido.appendChild(newDiv);
        newDiv.appendChild(addParagrafo);
        
        paragrafoExistente = addParagrafo

        contadorDePedido();
    }

    // se total de pedido chegar a zer, o item será excluido.

    if(rigaTotal > 0){
        paragrafoExistente.innerHTML = `Você adicionou ${rigaTotal} de Djow de Tílapia com Limão Siciliano.`
    }
    else if(paragrafoExistente){
        paragrafoExistente.remove();
        contadorDePedido();
    }
   
}

// Sashimis -----------------------------------------------------------------------------------------------------------------//----------------------


function atualizarMensagemSashimiSalmao(){

let paragrafoExistente = document.getElementById('msgSashimiSalmao');

    if(!paragrafoExistente){
        let pedido = document.getElementById('pedidos');

        let newDiv = document.createElement('div');

        let addParagrafo = document.createElement('p')
        addParagrafo.id = 'msgSashimiSalmao';
        addParagrafo.innerHTML = `Você adicionou ${sashimiSalmaoTotal} de Sashimi de Salmão.`

        pedido.appendChild(newDiv);
        newDiv.appendChild(addParagrafo);
        
        paragrafoExistente = addParagrafo

        contadorDePedido();
    }

    // se total de pedido chegar a zer, o item será excluido.

    if(sashimiSalmaoTotal > 0){
        paragrafoExistente.innerHTML = `Você adicionou ${sashimiSalmaoTotal} de Sashimi de Salmão.`
    }
    else if(paragrafoExistente){
        paragrafoExistente.remove();
        contadorDePedido();
    }
   
}

function atualizarMensagemSashimiAtum(){

let paragrafoExistente = document.getElementById('msgSashimiAtum');

    if(!paragrafoExistente){
        let pedido = document.getElementById('pedidos');

        let newDiv = document.createElement('div');

        let addParagrafo = document.createElement('p')
        addParagrafo.id = 'msgSashimiAtum';
        addParagrafo.innerHTML = `Você adicionou ${sashimiAtumTotal} de Sashimi de Atum.`

        pedido.appendChild(newDiv);
        newDiv.appendChild(addParagrafo);
        
        paragrafoExistente = addParagrafo

        contadorDePedido();
    }

    // se total de pedido chegar a zer, o item será excluido.

    if(sashimiAtumTotal > 0){
        paragrafoExistente.innerHTML = `Você adicionou ${sashimiAtumTotal} de Sashimi de Atum.`
    }
    else if(paragrafoExistente){
        paragrafoExistente.remove();
        contadorDePedido();
    }
   
}

function atualizarMensagemSashimiPeixeBranco(){

let paragrafoExistente = document.getElementById('msgSashimiPeixeBranco');

    if(!paragrafoExistente){
        let pedido = document.getElementById('pedidos');

        let newDiv = document.createElement('div');

        let addParagrafo = document.createElement('p')
        addParagrafo.id = 'msgSashimiPeixeBranco';
        addParagrafo.innerHTML = `Você adicionou ${sashimiPeixeBrancoTotal} de Sashimi de Peixe Branco.`

        pedido.appendChild(newDiv);
        newDiv.appendChild(addParagrafo);
        
        paragrafoExistente = addParagrafo

        contadorDePedido();
    }

    // se total de pedido chegar a zero, item será excluido.

    if(sashimiPeixeBrancoTotal > 0){
        paragrafoExistente.innerHTML = `Você adicionou ${sashimiPeixeBrancoTotal} de Sashimi de Peixe Branco.`
    }
    else if(paragrafoExistente){
        paragrafoExistente.remove();
        contadorDePedido();
    }
   
}

function atualizarMensagemSashimiTilapia(){

let paragrafoExistente = document.getElementById('msgSashimiTilapia');

    if(!paragrafoExistente){
        let pedido = document.getElementById('pedidos');

        let newDiv = document.createElement('div');

        let addParagrafo = document.createElement('p')
        addParagrafo.id = 'msgSashimiTilapia';
        addParagrafo.innerHTML = `Você adicionou ${sashimiTilapiaTotal} de Sashimi de Tilapia.`

        pedido.appendChild(newDiv);
        newDiv.appendChild(addParagrafo);
        
        paragrafoExistente = addParagrafo

        contadorDePedido();
    }

    // se total de pedido chegar a zero, item será excluido.

    if(sashimiTilapiaTotal > 0){
        paragrafoExistente.innerHTML = `Você adicionou ${sashimiTilapiaTotal} de Sashimi de Tilapia.`
    }
    else if(paragrafoExistente){
        paragrafoExistente.remove();
        contadorDePedido();
    }
   
}