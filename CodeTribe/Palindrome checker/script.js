function checkPalindrome() {
    var inputText = document.getElementById('inputText').value.toLowerCase();
    
    // Remove special characters and spaces
    var regex = /[^a-zA-Z0-9]/g;
    inputText = inputText.replace(regex, '');
    
    var len = inputText.length;
    for (var i = 0; i < len/2; i++) {
        if (inputText[i] !== inputText[len - 1 - i]) {
            document.getElementById('result').textContent = "The word "+inputText+"is Not a palindrome.";
            return;
        }
    }
    document.getElementById('result').textContent = "The word "+ inputText + " is a palindrome";
}
