export function setItem(itemName, item) {
  return localStorage.setItem(itemName, JSON.stringify(item));
}

export function getItem(itemName) {
  const item = localStorage.getItem(itemName);
  return JSON.parse(item);
}

export function removeItem(itemName) {
  return localStorage.removeItem(itemName);
}
