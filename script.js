document.addEventListener("DOMContentLoaded", function() {
    validate();
});

const botaoSubmit = document.getElementById("form");
const errorMessage = document.getElementById("errorMessage");
const input = document.getElementById("input");

let usuario = {
  email: "",
};

botaoSubmit.addEventListener("submit", (e) => {
  e.preventDefault();
  const valor = input.value;

  if (valor === "") {
    errorMessage.innerHTML = "Valid email required";
    input.style.border = "2px solid red";

    return;
  } else {
    usuario = {
      email: valor,
    };

    localStorage.setItem("email", JSON.stringify(usuario));
    window.location.href = "success.html";
    validate()
    
    
  }
});

function validate() {
    const userEmail = document.querySelector(".user");
    const user = JSON.parse(localStorage.getItem("email"));
    
    userEmail.innerHTML = user.email;
}

 function clique() {
    localStorage.clear();
    window.location.href = "index.html";
}