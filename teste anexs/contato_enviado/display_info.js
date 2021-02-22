const queryString = window.location.search;
const urlParams   = new URLSearchParams(queryString);

const nome  = urlParams.get("nome");
const fone  = urlParams.get("fone");
const email = urlParams.get("email");
const msg   = urlParams.get("mensagem");

document.getElementById("nome_id").innerText     = nome;
document.getElementById("fone_id").innerText     = fone;
document.getElementById("email_id").innerText    = email;
document.getElementById("mensagem_id").innerText = msg;