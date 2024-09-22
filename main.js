// Assuming say the user's name don dey provided from the newsletter subscription form.
// In this case, it could be fetched from a backend or localStorage, depending on how you handle users.

document.addEventListener('DOMContentLoaded', function () {
  // Just an example to simulate getting user's first name from a backend or local storage, anyhow wey you like am
  const userFirstName = 'Moshood'; // Replace this with the actual first name dynamically

  const userNameElement = document.getElementById('user_name');
  userNameElement.textContent = userFirstName;
});
