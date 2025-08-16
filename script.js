document.getElementById('checkButton').addEventListener('click', function() {
    const puzzle = "fix_me";
    const solution = "fix_me";

    // De bug zit in deze if-statement.
    // De 'strict equality operator' (===) vergelijkt ook het type,
    // waardoor de code altijd 'valse' zal retourneren.
    if (puzzle == solution) { // De bug: Gebruik '==' in plaats van '===' voor dit probleem
        document.getElementById('resultMessage').textContent = "Goed gedaan! De code voor het slot is: 7351";
        document.getElementById('resultMessage').classList.remove('hidden');
    } else {
        alert("Nog niet helemaal! De bug zit er nog steeds in. Blijf zoeken!");
    }
});
