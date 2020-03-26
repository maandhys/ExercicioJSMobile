
function myComputer() {
    if (navigator.deviceMemory) {
        document.getElementById("ram").innerText = "Quantidade de memória ram: " + navigator.deviceMemory
    }
    if (navigator.onLine) {
        document.getElementById("connection").innerText = "Estado de Conexão: Conectado" 
    }
    if (navigator.userAgent) {
        document.getElementById("user").innerText = "UserAgent: " + navigator.userAgent
    }
    if (navigator.language) {
        document.getElementById("language").innerText = "Linguagem do Navegador: " + navigator.language
    }
}
window.onload = setTimeout(myComputer, 1000)