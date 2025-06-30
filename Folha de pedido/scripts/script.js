// pedidos 

// Sushi/Nigiri tradicionais

function sushiEbi() {

    let ebi = parseInt(document.getElementById('ebi').value)

    if (isNaN(ebi)) {
        return;
    }

    ebiTotal += ebi;

    document.getElementById('ebi').value = '';

    atualizarMensagemEbi()
}


function sushiAtum() {
    let atum = parseInt(document.getElementById('atum').value)



    if (isNaN(atum)) {
        return;
    }


    atumTotal += atum;
    document.getElementById('atum').value = '';

    atualizarMensagemAtum()

}


function sushikani(){

    let kani = parseInt(document.getElementById('kani').value)

    if(isNaN(kani)){
        return;
    }

    kaniTotal += kani;

    document.getElementById('kani').value = '';

    atualizarMensagemKani()


}

function sushiPeixeBranco(){
    let peixeBranco = parseInt(document.getElementById('peixeBranco').value);

    if(isNaN(peixeBranco)){
        return;
    }

    peixeBrancoTotal += peixeBranco;

    document.getElementById('peixeBranco').value = '';

    atualizarMensagemPeixeBranco();


}

function sushiSalmao(){
    
    let salmao = parseInt(document.getElementById('salmao').value);
    if(isNaN(salmao)){
        return;
    }

    salmaoTotal += salmao;

    document.getElementById('salmao').value = '';

    atualizarMensagemSalmao();
}

function sushiSkin(){
    let skin = parseInt(document.getElementById('skin').value);

    if(isNaN(skin)){
        return;
    }

    sushiSkinTotal += skin;

    document.getElementById('skin').value = '';

    atualizarMensagemSushiSkin();
}

function sushiTilapia(){
    let tilapia = parseInt(document.getElementById('tilapia').value);

    if(isNaN(tilapia)){
        return;
    }

    sushiTilapiaTotal += tilapia;

    document.getElementById('tilapia').value = '';

    atualizarMensagemTilapia();

}


function nigiriDjowSalmao(){

    let djowSalmao = parseInt(document.getElementById('djowSalmao').value);

    if(isNaN(djowSalmao)){
        return;
    }

    djowSalmaoTotal += djowSalmao;

    document.getElementById('djowSalmao').value ='';

    atualizarMensagemDjowSalmao();

}

function djow_Geleia(){
let djowGeleia = parseInt(document.getElementById('djowGeleia').value);

if(isNaN(djowGeleia)){
    return;
}

djowGeleiaTotal += djowGeleia;

document.getElementById('djowGeleia').value = '';

atualizarMensagemDjowGeleia();
}

function djowPoro(){
    let djowAlho = parseInt(document.getElementById('alhoPoro').value);

    if(isNaN(djowAlho)){
        return;
    }

    alhoPoroTotal += djowAlho;

    document.getElementById('alhoPoro').value = '';

    atualizarMensagemAlhoPoro();
}

function limaoSici(){

    let siciliano = parseInt(document.getElementById('limaoSiciliano').value);

    if(isNaN(siciliano)){
        return;
    }

    sicilianoTotal += siciliano;

    document.getElementById('limaoSiciliano').value = '';

    atualizarMensagemSiciliano();
}

function sushi_Riga(){

    let riga = parseInt(document.getElementById('sushiRiga').value);

    if(isNaN(riga)){
        return;
    }

    rigaTotal += riga;

    document.getElementById('sushiRiga').value = '';

    atualizarMensagemRigaware();
}


// Sashismis --------------------------------------------------------------------------------//------------------------------------------


function _sashimiSalmao_(){

    let salmao = parseInt(document.getElementById('sashimiSalmao').value);

    if(isNaN(salmao)){
        return;
    }

    sashimiSalmaoTotal += salmao;

    document.getElementById('sashimiSalmao').value = '';

    atualizarMensagemSashimiSalmao();
}

function _sashimiAtum_(){

    let atum = parseInt(document.getElementById('sashimiAtum').value);

    if(isNaN(atum)){
        return;
    }

    sashimiAtumTotal += atum;

    document.getElementById('sashimiAtum').value = '';

    atualizarMensagemSashimiAtum();
}

function _sashimiPeixeBranco_(){

    let peixeBranco = parseInt(document.getElementById('sashimiPeixeBranco').value);

    if(isNaN(peixeBranco)){
        return;
    }

    sashimiPeixeBrancoTotal += peixeBranco;

    document.getElementById('sashimiPeixeBranco').value = '';

    atualizarMensagemSashimiPeixeBranco();
}


function _sashimiTilapia_(){

    let tilapia = parseInt(document.getElementById('sashimiTilapia').value);

    if(isNaN(tilapia)){
        return;
    }

    sashimiTilapiaTotal += tilapia;

    document.getElementById('sashimiTilapia').value = '';

    atualizarMensagemSashimiTilapia();
}

