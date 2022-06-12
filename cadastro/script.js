function Cadastro() {
  const senha = document.querySelector("#senha").value;
  const usuario = document.querySelector("#user").value;
  const email = document.querySelector("#email").value;
  localStorage.setItem("user", usuario);

  localStorage.setItem("email", email);

  localStorage.setItem("pass", senha);
  if (usuario == "" || email == "" || senha == "") {
    alert("Preencha todos os campos!");
  } else {
    location.href = "../login/login.html";
  }
}

function Logar() {
  var userL = document.getElementById("userL").value;
  var senhaL = document.getElementById("senhaL").value;
  var userLogin = localStorage.getItem("user");
  var senhaLogin = localStorage.getItem("pass");
  if (userL == userLogin && senhaL == senhaLogin) {
    location.href = "../home/home.html";
  } else {
    alert("Usuario ou senha não cadastrados, tente novamente!");
  }
}
