function imc() {
    let peso_m = parseFloat(document.getElementById("pesom").value)
    let altura_m = parseFloat(document.getElementById("altum").value)
    let imc_m = peso_m / (altura_m ** 2)
    document.getElementById("res_imc").innerHTML = "El índice de masa corporal de la mascota es de: " + imc_m.toFixed(2)
}
function edad_f() {
    let a = parseInt(document.getElementById("gest_m").value)
    let mesm = parseInt(document.getElementById("mes_m").value)
    let ames = mesm / 12
    let de = ames + a
    let edad_form = 16 * (Math.log(de)) + 31
    document.getElementById("res_edad").innerHTML = "La edad de la mascota según la formula es de: " + edad_form.toFixed(2) + " años"
}
function edad_t() {
    let amasc = parseInt(document.getElementById("gest_m").value)
    let mesmasc = parseInt(document.getElementById("mes_m").value)
    let amesmasc = mesmasc / 12
    let sumaa = amesmasc + amasc
    let edad_tan = sumaa*7
    document.getElementById("res_edad2").innerHTML = "La edad de la mascota según el tanteo es de: " + edad_tan.toFixed(2) + " años"
}