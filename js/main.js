document.addEventListener("DOMContentLoaded", function() {

    //the bricks for the wall
    const characterArrayPlainText = [
        "a","b","c","d","e","f","g","h","i","j",
        "k","m","n","o","p","q","r","s","t",
        "u","v","w","x","y","z","2","3",
        "4","5","6","7","8","9","A","B","C","D",
        "E","F","G","H","I","J","K","L","M","N",
        "P","Q","R","S","T","U","V","W","X",
        "Y","Z","!","@","#","$","%","^","&","*",
        "(",")",
    ];

    //selects a random character
    function getRandomChar(max) {
            return (Math.floor(Math.random() * Math.floor(max)));
          }
        
    function createNewPassword(value, characterArray) {
        let password = "";
        if (characterArray === '3') {
            for (i = 0; i < value; i++) {
                password += characterArrayPlainText[getRandomChar(characterArrayPlainText.length)];
            }
        } if (characterArray === '2') {
            for (i = 0; i < value; i++) {
                password += characterArrayPlainText[getRandomChar(characterArrayPlainText.length-10)];
            }
        } if (characterArray === '1') {
            for (i = 0; i < value; i++) {
                password += characterArrayPlainText[getRandomChar(characterArrayPlainText.length-36)];
            }
        }
        return password;
    }        
    
    //respond to make new-password user request
    const buttonElement = document.getElementById('make-password');
    buttonElement.addEventListener("click", function() {

        const lengthPasswordElement = document.getElementById('length-password');
        const selectTypePasswordElement = document.querySelector('input[name="engine"]:checked');

        let newPassword = createNewPassword(lengthPasswordElement.value, selectTypePasswordElement.value);

        const newPasswordElement = document.getElementById('new-password');
        newPasswordElement.innerHTML += `
            <p>${newPassword}</p>
            <hr>
        `;
    });
});
