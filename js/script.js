function convert() {
    const km = document.getElementById("km").value;
    const miles = (km * 0.621371).toFixed(2);
    document.getElementById("result").innerHTML = `${km} km es igual a  ${miles} millas.`;
}