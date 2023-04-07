export function onActiveElement(elem) {
  elem.removeAttribute("disabled", "true");
  elem.classList.remove('disabled');
}

export function onNotActiveElement(elem){
  elem.setAttribute("disabled", "true");
  elem.classList.add('disabled');
}