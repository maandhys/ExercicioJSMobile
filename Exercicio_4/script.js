function save() {
  if ('localStorage' in window) {

    // const valueInputSession = document.getElementById('valuesession');
    // const valueInputLocal = document.getElementById('valuelocal');

    const valueNameLocal = document.getElementById('name');
    const valueAgeLocal = document.getElementById('age');
    const valueCityLocal = document.getElementById('city');
    const valueColorLocal = document.getElementById('color');

    // const valueNameSession = document.getElementById('name');
    // const valueAgeSession  = document.getElementById('age');
    // const valueCitySession  = document.getElementById('city');
    // const valueColorSession = document.getElementById('color');


    let reloadInputValue = function () {
      // valueInputSession.value = sessionStorage.getItem('myKey') || '';
      // valueNameSession.value = sessionStorage.getItem('name') || '';
      // valueAgeSession.value = sessionStorage.getItem('age') || '';
      // valueCitySession.value = sessionStorage.getItem('city') || '';
      // valueColorSession.value = sessionStorage.getItem('color') || '';


      // valueInputLocal.value = localStorage.getItem('myKey') || '';
      valueNameLocal.value = sessionStorage.getItem('name') || '';
      valueAgeLocal.value = sessionStorage.getItem('age') || '';
      valueCityLocal.value = sessionStorage.getItem('city') || '';
      valueColorLocal.value = sessionStorage.getItem('color') || '';
    }

    reloadInputValue();

    // valueInputSession.addEventListener('keyup', function () {
    //   sessionStorage.setItem('myKey', this.value);
    // });    

    valueNameLocal.addEventListener('keyup', function () {
      localStorage.setItem('name', this.value);
    });

    valueAgeLocal.addEventListener('keyup', function () {
      localStorage.setItem('local', this.value);
    });

    valueCityLocal.addEventListener('keyup', function () {
      localStorage.setItem('city', this.value);
    });

    valueColorLocal.addEventListener('keyup', function () {
      localStorage.setItem('color', this.value);
    });


    valueNameLocal.value = sessionStorage.getItem('name') || '';
    valueAgeLocal.value = sessionStorage.getItem('age') || '';
    valueCityLocal.value = sessionStorage.getItem('city') || '';
    valueColorLocal.value = sessionStorage.getItem('color') || '';
  }

  if ('localStorage' in window) {
    document.getElementById("form").hidden = false
    document.getElementById("cad").hidden = true

    document.getElementById("name").innerText = localStorage.getItem('name');
    document.getElementById("age").innerText = localStorage.getItem('age');
    document.getElementById("name").innerText = localStorage.getItem('city');

  } else {
    document.getElementById("form").hidden = true
    document.getElementById("cad").hidden = false
  }

}
function onLoad() {
  if ('localStorage' in window) {
    document.getElementById("form").hidden = false
    document.getElementById("cad").hidden = true

    // document.getElementById("name").innerText = localStorage.getItem('name');
    // document.getElementById("age").innerText = localStorage.getItem('age');
    // document.getElementById("name").innerText = localStorage.getItem('city');

  } else {
    document.getElementById("form").hidden = true
    document.getElementById("cad").hidden = false
  }
}

window.onload = setTimeout(onLoad, 1000)