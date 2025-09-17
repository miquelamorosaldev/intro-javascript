// En aquest cas usem la crida:
//  <script src="js/forms.js" defer></script>
// per aconseguir que es carreguin les funcions quan el DOM està carregat.

    // Exercici 1: suma de dos números
    function sumar() {
        const n1 = parseFloat(document.getElementById("num1").value);
        const n2 = parseFloat(document.getElementById("num2").value);

        const resultat = n1 + n2;
        document.getElementById("resultat-suma").textContent = "Resultat: " + resultat;
    }

    // Exercici 2: comptar caràcters d'un text
    function comptar() {
        const text = document.getElementById("text").value;
        const longitud = text.length;

        document.getElementById("resultat-text").textContent =
            "El text té " + longitud + " caràcters.";
    }
