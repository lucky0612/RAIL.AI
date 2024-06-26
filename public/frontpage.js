document.getElementById('loginForm').onsubmit = function(event) {
    event.preventDefault();
    
    let username = document.getElementById('username').value;
    let password = document.getElementById('password').value;
    
    if (!username || !password || !captcha) {
      alert("Please fill out all fields.");
      return false;
    }
    
    // Here you would typically handle the form submission, e.g., using AJAX
    // For demonstration purposes, we'll just log to the console
    console.log('Username:', username, 'Password:', password, 'Captcha:', captcha);
    
    // Assuming validation passes, you might submit the form like this:
    // this.submit();
    
    // For now, we'll just clear the form
    this.reset();
    
    return false; // Prevent the form from submitting the traditional way
  };
  
// document.getElementById('loginForm').addEventListener('submit', function(event) {
//   event.preventDefault();
//   // Perform form validation or submission here
//   alert('Form submitted!');
// });