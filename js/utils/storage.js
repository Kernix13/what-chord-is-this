export function setLocalStorage(key, obj) {
  localStorage.setItem(key, JSON.stringify(obj));
}

export function getLocalStorage(key) {
  return JSON.parse(localStorage.getItem(key));
}