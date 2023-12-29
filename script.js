const kmiText = document.getElementById('kmi');
const descText = document.getElementById('desc');
const form = document.querySelector('form');

function onFormReset() {
    kmiText.TextContent = 0;
    kmiText.className = '';
    descText.textContent = 'N/D';
}
function onformbtn(e) {
    e.preventDefault();

    const Ugis = parseFloat(form.input1.value);
    const Svoris = parseFloat(form.input2.value);

    if (isNaN(Svoris) || isNaN(Ugis) || Svoris <= 0 || Ugis <= 0) {
    alert ("Prašome įvesti skaičius"); return;
    }

    const UgisMetrais = Ugis/100;
    const kmi = Svoris / Math.pow(UgisMetrais, 2);
    const  desc = interpretkmi(kmi);

    kmiText.textContent = output.toFixed(2);
    descText.innerHTML = 'Jus <strong>${desc}</strong>';
};

function outputDesc(kmi) {
    if (kmi < 18.5) {
        return 'Masės trūkumas';        
    } else if (kmi < 25){
        return 'Normalus';        
    } else if (kmi < 30){
        return 'Viršsvoris';
    } else {
        return 'Nutukimas';
    }
};
