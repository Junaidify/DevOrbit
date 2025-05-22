export function isValidEmail(email) {
  const regex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
  return regex.test(email);
}

export function isValidPassword(password) {
  const regex = /^[a-zA-Z0-9._-]{3,20}$/;
  return regex.test(username);
}
