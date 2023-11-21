function obtenerUsuarios() {
    return fetch('https://jsonplaceholder.typicode.com/users')
      .then(response => {
        if (!response.ok) {
          throw new Error('Error al obtener usuarios');
        }
        return response.json();
      })
      .catch(error => {
        console.error('Error al obtener usuarios:', error);
      });
  }
  
  function generarEdadAleatoria() {
    return Math.floor(Math.random() * (60 - 18 + 1)) + 18;
  }
  
  function mostrarDetallesUsuarios() {
    const listaUsuarios = document.getElementById('listaUsuarios');
  
    obtenerUsuarios()
      .then(usuarios => {
        usuarios.forEach(usuario => {
          const edadAleatoria = generarEdadAleatoria();
          const listItem = document.createElement('li');
  
          const direccion = `${usuario.address.street}, ${usuario.address.suite}, ${usuario.address.city}`;
  
          listItem.innerHTML = `
            <strong>Name:</strong> ${usuario.name} <br>
            <strong>Age:</strong> ${edadAleatoria} <br>
            <strong>Username:</strong> ${usuario.username} <br>
            <strong>Image:</strong> <img src="assets/img/${usuario.id}.jpeg" alt="Imagen de ${usuario.name}" width="100" height="100"> <br>
            <strong>Phone:</strong> ${usuario.phone} <br>
            <strong>Email:</strong> ${usuario.email} <br>
            <strong>Company:</strong> ${usuario.company.name} <br>
            <strong>Address:</strong> ${direccion} <br><br>
          `;
          listaUsuarios.appendChild(listItem);
        });
      });
  }
  
  window.onload = function () {
    mostrarDetallesUsuarios();
  };