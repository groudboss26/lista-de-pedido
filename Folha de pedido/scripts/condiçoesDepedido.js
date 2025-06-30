
function condicoes(){

    let nome = document.getElementById('nome').value;
    
    let date = document.getElementById('data').value;
    let dataformatada = date.split("-").reverse().join("/")
    
    let numTel = document.getElementById('tel').value;
    let numTelLimpo = numTel.replace(/\D/g,'');// Retirar qualquer dado que não for numero
    let numTelFormatado = numTelLimpo.replace(/(\d{2})(\d{5})(\d{4})/, '($1)$2-$3')

    if(!nome || !numTelLimpo || !dataformatada){
        alert(`Por favor, preencha todos os dados
            \nNome!
            \nTelefone!
            \nData!
            `)
            return;
            
        }
    
    if(numTelLimpo.length !== 11){
        alert(`O número tem que ser preenchido!!
            \nO número de telefone deve ter exatamente 11 dígitos (DDD + número).`);
            return;
            
            
        }
        
        
        
        
            
            let totais = [
                atumTotal,ebiTotal,kaniTotal,peixeBrancoTotal, salmaoTotal,sushiSkinTotal,sushiTilapiaTotal,
                djowSalmaoTotal,djowGeleiaTotal,alhoPoroTotal,sicilianoTotal,rigaTotal,sashimiSalmaoTotal,sashimiAtumTotal,sashimiPeixeBrancoTotal,
                sashimiTilapiaTotal
            ]
            if (totais.every(total => total === 0 )) {
            
                alert(`Pedido de Nome:${nome};
                    \n\nTelefone:${numTelFormatado}; 
                    \n\ndata: ${dataformatada}
                    \n\nNenhum pedido foi feito!!`)
                
                return;
                
                
            }
            
            document.getElementById('nome').value = ''
            
            document.getElementById('data').value = ''
            
            document.getElementById('tel').value = '';
            
            
            
            let mensagem = `O pedido foi feito por :
    \nNome: ${nome}, 
    \nTel: ${numTelFormatado}, 
    \nData: ${dataformatada}.`
    
    if(atumTotal > 0){
        mensagem += `\n\nSushi/Nigiri Atum: ${atumTotal}.`
    }
    if(ebiTotal > 0){
        mensagem += `\n\nSushi/Nigiri Ebi: ${ebiTotal}.`
    }
    if(kaniTotal > 0){
        mensagem += `\n\nSushi/Nigiri Kani: ${kaniTotal}.`
    }
    if(peixeBrancoTotal > 0){
        mensagem += `\n\nsushi/Nigiri Peixe Branco: ${peixeBrancoTotal}.`
    }
    if(salmaoTotal > 0 ){
        mensagem += `\n\nSushi/Nigiri Salmão: ${salmaoTotal}.`
    }
    if(sushiSkinTotal> 0 ){
        mensagem += `\n\nSushi/Nigiri Skin: ${sushiSkinTotal}.`
    }
    if(sushiTilapiaTotal > 0){
        mensagem += `\n\nSushiNigiri Tilapia: ${sushiTilapiaTotal}.`
    }

    if(djowSalmaoTotal > 0){
        mensagem += `\n\nDjow Salmão : ${djowSalmaoTotal}.`
    }

    if(djowGeleiaTotal > 0){

        mensagem += `\n\nDjow Geleia de Pimenta: ${djowGeleiaTotal}`
    }
    if(alhoPoroTotal > 0){
        mensagem += `\n\nDjow de Tílapia com Alho Poró: ${alhoPoroTotal}`
    }
    if(sicilianoTotal > 0){
        mensagem += `\n\nDjow de Limão Siciliano: ${sicilianoTotal}`
    }
    if(rigaTotal > 0){
        mensagem += `\n\nRigaware: ${rigaTotal}`
    }
    // Sashimi Salmão -------------------------------------------------------------------------------------------------/-----------------/

    if(sashimiSalmaoTotal > 0){
        mensagem += `\n\nSashimi de Salmão: ${sashimiSalmaoTotal}`
    }
    if(sashimiAtumTotal > 0){
        mensagem += `\n\nSashimi de Atum: ${sashimiAtumTotal}`
    }
    if(sashimiPeixeBrancoTotal > 0){
        mensagem += `\n\nSashimi de Peixe Branco: ${sashimiPeixeBrancoTotal}`
    }
    if(sashimiTilapiaTotal > 0){
        mensagem += `\n\nSashimi de Tilapia: ${sashimiTilapiaTotal}`
    }
    
    alert(mensagem);

    }
   




