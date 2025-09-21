export function setLocalStorage(obj) {
  localStorage.setItem('userSettings', JSON.stringify(obj));
}

export function getLocalStorage() {
  return JSON.parse(localStorage.getItem('userSettings'));
}