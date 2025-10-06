export function setLocalStorage(str, obj) {
  localStorage.setItem(str, JSON.stringify(obj));
}

export function getLocalStorage(str) {
  return JSON.parse(localStorage.getItem(str));
}