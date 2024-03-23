var linkEsqueceuSenha = document.getElementById("link-esqueceu-senha");
var excluirRecuper = document.getElementById("excluir");
var teste = document.getElementById("teste");
var formularioLogin = document.getElementById("formulario-login");
var body = document.body;

linkEsqueceuSenha.addEventListener("click", function (event) {
  event.preventDefault();
  teste.style.display = "block";
  formularioLogin.style.filter = "blur(7px)";
  body.style.backgroundColor = "#384149d6";
  formularioLogin.style.opacity = "0.5";
});

excluirRecuper.addEventListener("click", function () {
  teste.style.display = "none";
  formularioLogin.style.filter = "none";
  formularioLogin.style.opacity = "1";
  body.style.backgroundColor = "aliceblue";
});
