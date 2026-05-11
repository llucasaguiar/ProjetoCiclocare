const form = document.getElementById('loginForm');

form.addEventListener('submit', async (e) => {

  e.preventDefault();

  const email = document.getElementById('email').value;

  const senha = document.getElementById('senha').value;

  const dadosLogin = {
    email,
    senha
  };

  try {

    const response = await fetch(
      'http://localhost:8080/auth/login',
      {
        method:'POST',

        headers:{
          'Content-Type':'application/json'
        },

        body:JSON.stringify(dadosLogin)
      }
    );

    if(response.ok){

      const data = await response.json();

      localStorage.setItem(
        'token',
        data.token
      );

      alert('Login realizado com sucesso!');

    }else{

      alert('Email ou senha inválidos');
    }

  } catch(error){

    console.error(error);

    alert('Erro ao conectar com servidor');

  }

});