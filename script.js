document.getElementById('checkButton').addEventListener('click', function() {
    const userInput = document.getElementById('answerInput').value;
    const correctVariable = "@correct_answer.present?"; // Dit is de juiste variabele naam

    // De bug: in de HTML-code staat "@correct_answr", de 'e' en 'w' missen.
    // De oplossing is de juiste variabele naam invoeren.
    if (userInput === correctVariable) {
        document.getElementById('bugSolution').classList.remove('hidden');
        document.getElementById('resultMessage').textContent = "Goed gedaan, de bug is opgelost!";
        document.getElementById('resultMessage').classList.remove('hidden');
        document.getElementById('resultMessage').style.color = "#4CAF50";
    } else {
        document.getElementById('resultMessage').textContent = "Helaas, de ingevoerde naam is onjuist. Probeer het opnieuw!";
        document.getElementById('resultMessage').classList.remove('hidden');
        document.getElementById('resultMessage').style.color = "red";
    }
});
