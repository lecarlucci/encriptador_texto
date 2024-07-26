const shift = 3; // Desplazamiento para el cifrado César

    function encrypt() {
        let input = document.getElementById('inputText').value;
        let output = '';
        for (let i = 0; i < input.length; i++) {
            let char = input.charCodeAt(i);
            if (char >= 65 && char <= 90) {
                output += String.fromCharCode((char - 65 + shift) % 26 + 65);
            } else if (char >= 97 && char <= 122) {
                output += String.fromCharCode((char - 97 + shift) % 26 + 97);
            } else {
                output += input.charAt(i);
            }
        }
        document.getElementById('outputText').value = output;
    }

    function decrypt() {
        let input = document.getElementById('inputText').value;
        let output = '';
        for (let i = 0; i < input.length; i++) {
            let char = input.charCodeAt(i);
            if (char >= 65 && char <= 90) {
                output += String.fromCharCode((char - 65 - shift + 26) % 26 + 65);
            } else if (char >= 97 && char <= 122) {
                output += String.fromCharCode((char - 97 - shift + 26) % 26 + 97);
            } else {
                output += input.charAt(i);
            }
        }
        document.getElementById('outputText').value = output;
    }