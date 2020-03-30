function save() {

  localStorage.setItem('name', document.getElementById('name').value);
  localStorage.setItem('age', document.getElementById('age').value);
  localStorage.setItem('city', document.getElementById('city').value);
  localStorage.setItem('color', document.getElementById('color').value);

}

function onLoad() {

  if (localStorage.getItem('name')) {
    document.getElementById("form").hidden = true
    document.getElementById("cad").hidden = false

    document.getElementById('nameSaved').innerHTML = localStorage.getItem('name');
    document.getElementById('ageSaved').innerText = localStorage.getItem('age');
    document.getElementById('citySaved').innerText = localStorage.getItem('city');
    document.body.style.background = localStorage.getItem('color');
  } else {
    document.getElementById("form").hidden = false
    document.getElementById("cad").hidden = true
  }
}

window.onload = setTimeout(onLoad, 500)