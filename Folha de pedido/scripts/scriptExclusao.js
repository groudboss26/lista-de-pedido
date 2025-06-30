
function ExcluirEbi() {
    let ebi = parseInt(document.getElementById('ebi').value)

    if (isNaN(ebi)) {
        return;
    }


    ebiTotal -= ebi

    if (ebiTotal < 0) {
        ebiTotal = 0
    }
    document.getElementById('ebi').value = ''


    atualizarMensagemEbi()

}


function excluirAtum() {
    let atum = parseInt(document.getElementById('atum').value)



    if (isNaN(atum)) {
        return;
    }


    atumTotal -= atum;

    if (ebiTotal < 0) {
        ebiTotal = 0
    }

    document.getElementById('atum').value = '';

    atualizarMensagemAtum()
}

function excluirKani(){

    let kani = parseInt(document.getElementById('kani').value)

    if(isNaN(kani)){
        return;
    }

    kaniTotal -= kani

    if(kaniTotal < 0){
        kaniTotal = 0
    }

    document.getElementById('kani').value = ''

    atualizarMensagemKani()
}

function excluirPeixeBranco(){
    let peixeBranco = parseInt(document.getElementById('peixeBranco').value);

    if(isNaN(peixeBranco)){
        return;
    }
    peixeBrancoTotal -= peixeBranco;

    if(peixeBrancoTotal < 0){
        peixeBrancoTotal = 0
    }

    document.getElementById('peixeBranco').value = '';

    atualizarMensagemPeixeBranco();
}

function excluirSalmao(){
    let salmao = parseInt(document.getElementById('salmao').value);

    if(isNaN(salmao)){
        return;
    }

    salmaoTotal -= salmao;

    if(salmaoTotal < 0){

        salmaoTotal = 0;
    }

    document.getElementById('salmao').value = '';

    atualizarMensagemSalmao();
}

function excluirSkin(){
    
    let skin = parseInt(document.getElementById('skin').value);

    if(isNaN(skin)){
        return;

    }
sushiSkinTotal -= skin;

if(sushiSkinTotal < 0){
    sushiSkinTotal = 0;
}

document.getElementById('skin').value = '';

atualizarMensagemSushiSkin();

}

function excluirTilapia(){
    let tilapia = parseInt(document.getElementById('tilapia').value);

    if(isNaN(tilapia)){
        return
    }

    sushiTilapiaTotal -= tilapia;

    if(sushiTilapiaTotal < 0){
        sushiTilapiaTotal = 0
    }

    document.getElementById('tilapia').value = '';

    atualizarMensagemTilapia()
}

function excluirDjowSalmao(){
    
    let djowSalmao = parseInt(document.getElementById('djowSalmao'));

    if(isNaN(djowsalmao)){
        return;
    }

    djowSalmaoTotal -= djowSalmao;

    if(djowTotal < 0){
        djowSalmaoTotal = 0;
    }

    document.getElementById('djowSalmao').value = '';

    atualizarMensagemDjowSalmao();
}

function excluirDjow_Geleia(){
    let djowGeleia = parseInt(document.getElementById('djowGeleia').value);

    if(isNaN(djowGeleia)){
        return;
    }

    djowGeleiaTotal -= djowGeleia;
    if(djowGeleiaTotal < 0){
        djowGeleiaTotal = 0
    }

    document.getElementById('djowGeleia').value = '';

    atualizarMensagemDjowGeleia();
}

function excluirDjowPoro(){
    let djowPoro = parseInt(document.getElementById('alhoPoro').value);

    if(isNaN(djowPoro)){
        return;
    }

    alhoPoroTotal -= djowPoro;

    if(alhoPoroTotal < 0 ){
        alhoPoroTotal = 0
    }

    document.getElementById('alhoPoro').value = '';

    atualizarMensagemAlhoPoro();

}

function excluirLimaoSici(){

    let siciliano = parseInt(document.getElementById('limaoSiciliano').value);

    if(isNaN(siciliano)){
        return;
    }

    sicilianoTotal -= siciliano;

    if(sicilianoTotal < 0 ){
        sicilianoTotal = 0
    }

    document.getElementById('limaoSiciliano').value = '';

    atualizarMensagemSiciliano();
}

function excluir_Riga(){

    let riga = parseInt(document.getElementById('sushiRiga').value);

    if(isNaN(riga)){
        return;
    }

    rigaTotal -= riga;

    if(rigaTotal < 0 ){
        sicilianoTotal = 0
    }

    document.getElementById('sushiRiga').value = '';

    atualizarMensagemRigaware();
}


// sashimis-------------------------------------------------------------------------------------------------------------/----------------------


function excluirSashimiSalmao(){

    let salmao = parseInt(document.getElementById('sashimiSalmao').value);

    if(isNaN(salmao)){
        return;
    }

    sashimiSalmaoTotal -= salmao;

    if(sashimiSalmaoTotal < 0 ){
        sashimiSalmaoTotal = 0
    }

    document.getElementById('sashimiSalmao').value = '';

    atualizarMensagemSashimiSalmao();
} 

function excluirSashimiAtum(){

    let atum = parseInt(document.getElementById('sashimiAtum').value);

    if(isNaN(atum)){
        return;
    }

    sashimiAtumTotal -= atum;

    if(sashimiAtumTotal < 0 ){
        sashimiAtumTotal = 0
    }

    document.getElementById('sashimiAtum').value = '';

    atualizarMensagemSashimiAtum();
}

function excluirSashimiPeixeBranco(){

    let peixeBranco = parseInt(document.getElementById('sashimiPeixeBranco').value);

    if(isNaN(peixeBranco)){
        return;
    }

    sashimiPeixeBrancoTotal -= peixeBranco;

    if(sashimiPeixeBrancoTotal < 0 ){
        sashimiPeixeBrancoTotal = 0
    }

    document.getElementById('sashimiPeixeBranco').value = '';

    atualizarMensagemSashimiPeixeBranco();
}

function excluirSashimiTilapia(){

    let tilapia = parseInt(document.getElementById('sashimiTilapia').value);

    if(isNaN(tilapia)){
        return;
    }

    sashimiTilapiaTotal -= tilapia;

    if(sashimiTilapiaTotal < 0 ){
        sashimiTilapiaTotal = 0
    }

    document.getElementById('sashimiTilapia').value = '';

    atualizarMensagemSashimiTilapia();
}





