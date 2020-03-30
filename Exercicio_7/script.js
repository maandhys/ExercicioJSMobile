
function myIp() {
  fetch(
    "https://ipinfo.io/", {
    headers: {
      "Accept": "application/json"
    }
  }).then(function (response) {
    response.text()
      .then(function (result) {
        var x =  JSON.parse(result);
          document.getElementById("ip").value = x.ip;
          document.getElementById("hostname").value = x.hostname;
          document.getElementById("city").value = x.city;
          document.getElementById("region").value = x.region;
          document.getElementById("country").value = x.country;
          document.getElementById("loc").value = x.loc;
          document.getElementById("org").value = x.org;
          document.getElementById("postal").value = x.postal;
          document.getElementById("timezone").value = x.timezone;
        })
  }).catch(error => console.error(error))
}
window.onload = myIp()
