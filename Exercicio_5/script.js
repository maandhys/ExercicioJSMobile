function save() {
  const information = {
    'name': document.getElementById('name').value,
    'creationDate': document.getElementById('creationDate').value,
    'numberCampus': document.getElementById('numberCampus').value,
    'numberStudent': document.getElementById('numberStudent').value,
    'numberTeachers': document.getElementById('numberTeachers').value,
    'numberCouser': document.getElementById('numberCouser').value,
    'mec': document.getElementById('mec').value
  }
  
  localStorage.setItem('universityInfos', JSON.stringify(information))
}

function onLoad() {
  var information = JSON.parse(localStorage.getItem('universityInfos'));
  if (information) {
    document.getElementById('name').value = information.name;
    document.getElementById('creationDate').value = information.creationDate;
    document.getElementById('numberCampus').value = information.numberCampus;
    document.getElementById('numberStudent').value = information.numberStudent;
    document.getElementById('numberTeachers').value = information.numberTeachers;
    document.getElementById('numberCouser').value = information.numberCouser;
    document.getElementById('mec').value = information.mec;
  }
}

window.onload = setTimeout(onLoad, 500)