function closeToast() {
  document.getElementById('toastError').style.display = 'none';
}

function isValidEmail(value) {
  return /^[^\s@]+@[^\s@]+\.[^\s@]+$/.test(value);
}

document.getElementById('forgotForm').addEventListener('submit', function (e) {
  e.preventDefault();

  const emailInput = document.getElementById('fpEmail');
  const errorMsg = document.getElementById('fpError');
  const toast = document.getElementById('toastError');
  const email = emailInput.value.trim();

  // Reset states
  errorMsg.style.display = 'none';
  toast.style.display = 'none';

  if (email === '') {
    errorMsg.textContent = 'Please enter email.';
    errorMsg.style.display = 'block';
    return;
  }

  if (!isValidEmail(email)) {
    errorMsg.textContent = 'Please enter email.';
    errorMsg.style.display = 'block';
    toast.style.display = 'flex';
    return;
  }

  // Valid email - proceed (demo behavior)
  alert('If this email is registered, password reset instructions have been sent.');
  // window.location.href = 'index.html';
});
