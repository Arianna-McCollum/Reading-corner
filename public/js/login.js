async function loginFormHandler(event) {
    event.preventDefault();
  
    const email = document.querySelector('#email-login').value.trim();
    const password = document.querySelector('#password-login').value.trim();


  
    if (email && password) {
      console.log(email, password)
      console.log('logging in')
      const response = await fetch('/api/users/login', {
        method: 'post',
        body: JSON.stringify({
          email,
          password
        }),
        headers: { 'Content-Type': 'application/json' }
      });
      console.log('===============================================')
      console.log(response)
  
      if (response.ok) {
        document.location.replace('/dashboard');
      } else {
        $('#myModal').modal('show');
      }
    }
  }

  document.querySelector('.login-form').addEventListener('submit', loginFormHandler);