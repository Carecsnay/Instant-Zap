/* 
    APÓS RECEBER O CONTEÚDO DA TAG PARA A FUNÇÃO, VOU ARMAZENAR A INFORMAÇÃO NA VARIÁVEL "MESSAGE"
    E ASSIM, O SCRIPT É EXECUTADO.
*/
function sendToWhatsapp(message) {
    //DESSA MANEIRA CAPTURA AS FORMULAS DA TAG "P"...
    // let text = message.firstElementChild.innerHTML;

    //CAPTURA SOMENTE O TEXTO DA TAG "P" E ARMAZENA NA VARIAVEL TEXT
    let text = message.firstElementChild.innerText;
    //ENCONDANDO PARA O WHATSAPP ENTENDER A MENSAGEM
    text = window.encodeURIComponent(text);

    //ARMAZENA O NUMERO NA VARIÁVEL PHONE
    let phone = prompt("Insira um número válido, formato aceitável (XX) XXXXX-XXXX ");
    //VERIFICA SE O NUMERO ESTÁ VAZIO
    if (phone == "") {
        alert("Por favor, informe o número corretamente");
        return;
    }

    //CORRIGE A AÇÃO DO BOTÃO CANCELAR
    else if (phone == null) {
        return;
    }

    //MANEIRA ANTIGA DE SE FAZER MANDAR MSG PARA O WHATSAPP (PRECISA DO WHATSAPP INSTALADO)
    //window.open("https://api.whatsapp.com/send?phone=55" + phone + "&text=" + text, "_blank");

    //MANEIRA NOVA DE SE FAZER MANDAR MSG PARA O WHATSAPP (NÃO PRECISA DO WHATSAPP INSTALADO)
    window.open("https://web.whatsapp.com/send?phone=55" + phone + "&text=" + text, "_blank");
}