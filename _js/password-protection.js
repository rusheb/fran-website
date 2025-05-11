// Simple password protection script
(function() {
  // Check if user has already entered the password in this session
  if (sessionStorage.getItem('siteAccess') === 'granted') {
    return; // User already has access
  }
  
  // Create overlay elements
  const overlay = document.createElement('div');
  overlay.id = 'password-overlay';
  overlay.style.position = 'fixed';
  overlay.style.top = '0';
  overlay.style.left = '0';
  overlay.style.width = '100%';
  overlay.style.height = '100%';
  overlay.style.backgroundColor = 'rgba(255, 255, 255, 0.98)';
  overlay.style.zIndex = '9999';
  overlay.style.display = 'flex';
  overlay.style.flexDirection = 'column';
  overlay.style.justifyContent = 'center';
  overlay.style.alignItems = 'center';
  overlay.style.fontFamily = 'sans-serif';
  
  // Create content for the overlay
  const content = document.createElement('div');
  content.style.maxWidth = '400px';
  content.style.padding = '20px';
  content.style.textAlign = 'center';
  
  const heading = document.createElement('h2');
  heading.textContent = 'This site is under construction';
  heading.style.marginBottom = '20px';
  
  const message = document.createElement('p');
  message.textContent = 'Please enter the password to view the site:';
  message.style.marginBottom = '20px';
  
  const form = document.createElement('form');
  form.id = 'password-form';
  form.style.display = 'flex';
  form.style.flexDirection = 'column';
  form.style.alignItems = 'center';
  
  const input = document.createElement('input');
  input.type = 'password';
  input.id = 'site-password';
  input.placeholder = 'Enter password';
  input.style.padding = '10px';
  input.style.marginBottom = '15px';
  input.style.width = '100%';
  input.style.borderRadius = '4px';
  input.style.border = '1px solid #ccc';
  
  const button = document.createElement('button');
  button.type = 'submit';
  button.textContent = 'Submit';
  button.style.padding = '10px 20px';
  button.style.backgroundColor = '#007bff';
  button.style.color = 'white';
  button.style.border = 'none';
  button.style.borderRadius = '4px';
  button.style.cursor = 'pointer';
  
  // Add error message element
  const errorMsg = document.createElement('p');
  errorMsg.id = 'password-error';
  errorMsg.style.color = 'red';
  errorMsg.style.marginTop = '10px';
  errorMsg.style.display = 'none';
  
  // Assemble the DOM elements
  form.appendChild(input);
  form.appendChild(button);
  form.appendChild(errorMsg);
  
  content.appendChild(heading);
  content.appendChild(message);
  content.appendChild(form);
  
  overlay.appendChild(content);
  
  // Add event listener for form submission
  function setupFormListener() {
    document.getElementById('password-form').addEventListener('submit', function(event) {
      event.preventDefault();
      const password = document.getElementById('site-password').value;
      if (password === 'noon-rear-right') {
        sessionStorage.setItem('siteAccess', 'granted');
        document.body.removeChild(overlay);
      } else {
        const errorEl = document.getElementById('password-error');
        errorEl.textContent = 'Incorrect password. Please try again.';
        errorEl.style.display = 'block';
      }
    });
  }
  
  // Add overlay to the page when DOM is loaded
  function addOverlay() {
    document.body.appendChild(overlay);
    setupFormListener();
    // Focus on the password input
    document.getElementById('site-password').focus();
  }
  
  // Add overlay when DOM is ready
  if (document.readyState === 'loading') {
    document.addEventListener('DOMContentLoaded', addOverlay);
  } else {
    addOverlay();
  }
})(); 