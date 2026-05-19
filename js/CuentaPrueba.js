document.addEventListener('DOMContentLoaded', () => {
  const registerForm = document.querySelector('#register-form');
  const loginForm = document.querySelector('#login-form');

    //codigo para el registro de cuenta
  if (registerForm) {
    registerForm.addEventListener('submit', (event) => {
      event.preventDefault();

    //recuperar los valores de los campos del formulario
      const username = document.querySelector('#new-username').value.trim();
      const password = document.querySelector('#new-password').value;
      const confirmPassword = document.querySelector('#confirm-password').value;

    //validacion de campos vacios
      if (!username || !password || !confirmPassword) {
        alert('Completa todos los campos');
        return;
      }
      //validacion de contraseñas
      if (password !== confirmPassword) {
        alert('Las contraseñas no coinciden');
        return;
      }

      //confirmacion de creacion de cuenta
      const account = { username, password };
      localStorage.setItem('cuenta', JSON.stringify(account));

      alert('Cuenta creada correctamente');
      window.location.href = 'IniciarSesion.html';
    });
  }

 //codigo para el inicio de sesion
  if (loginForm) {
    loginForm.addEventListener('submit', (event) => {
      event.preventDefault();

      //recuperar los valores de los campos del formulario
      const username = document.querySelector('#username').value.trim();
      const password = document.querySelector('#password').value;
      const savedAccount = JSON.parse(localStorage.getItem('cuenta'));

      //validacion de cuenta creada y validacion de usuario y contraseña
      if (savedAccount && username === savedAccount.username && password === savedAccount.password) {
      window.location.href = 'ConfiguracionSesion.html';
      } else {
        alert('Usuario o contraseña incorrectos');
      }
    });
  }
});

