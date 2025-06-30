function displayPedidos(){
    let pedido = document.getElementById('pedidos')
    
    if(pedido.style.display === 'none' || pedido.style.display ===''){
        pedido.style.display = 'block'
    }else{
        pedido.style.display = 'none'
    }
}

 function contadorDePedido(){
    

    let pedidos = document.getElementById('pedidos');
    let item = pedidos.querySelectorAll('p');
    let total = item.length


    let resultado = document.getElementById('quantidade');

    resultado.innerHTML =  total

}

function nigiri(){
    let sushi = document.querySelector('.SushiNigiri')
    let riga = document.querySelector('.sashimis')

    sushi.style.display = 'block'
    riga.style.display = 'none'
    
    
}

let sashimisCarregado = false; // controle para carregar apenas uma vez

function SaShimis(){
    let sushi = document.querySelector('.SushiNigiri')
    let riga = document.querySelector('.sashimis')

     sushi.style.display = 'none'

     // se ainda não carregou, faz o fetch.

     if(!sashimisCarregado){
        fetch('sashimi.html')
         .then(response => response.text())
         .then(html =>{
            riga.innerHTML = html;
            riga.style.display = 'block';
            sashimisCarregado = true;

         })

         .catch(error => {
            console.error('Erro ao carregar sashimi.html',error);
         })
     } else{
        // já carregado, só mostrar

        riga.style.display = 'block';
     }

    
}







