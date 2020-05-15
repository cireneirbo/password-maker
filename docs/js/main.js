document.addEventListener("DOMContentLoaded", function() {
    //holds all of the Ascii characters
    const characterArrayFull = [];
        for (let i = 33; i < 123; i++) {
            characterArrayFull.push([i]);
        }
    
    //holds the common characters, numbers, uppercase, lowercase Ascii characters
    const characterArrayCommon = [
        33,35,36,37,38,40,41,42,48,
        49,50,51,52,53,54,55,56,57,
        64,65,66,67,68,69,70,71,72,
        73,74,75,76,77,78,79,80,81,
        82,83,84,85,86,87,88,89,90,
        94,97,98,99,100,101,102,103,
        104,105,106,107,108,109,110,
        111,112,113,114,115,116,117,
        118,119,120,121,122
    ];

    //holds the numbers, uppercase, lowercase Ascii characters
    const characterArrayBasic = [
        48,49,50,51,52,53,54,55,56,
        57,65,66,67,68,69,70,71,72,
        73,74,75,76,77,78,79,80,81,
        82,83,84,85,86,87,88,89,90,
        97,98,99,100,101,102,103,104,
        105,106,107,108,109,110,
        111,112,113,114,115,116,117,
        118,119,120,121,122
    ];

    //new way?
    const characterArrayPlainText = [
        A,B,C,D,E,F,G,H,I,J,K,L,M,N,O,P,Q,R,S,T,U,V,W,X,Y,Z,a,b,c,d,e,f,g,h,i,j,k,l,m,n,o,p,q,r,s,t,u,v,w,x,y,z,0,1,2,3,4,5,6,7,8,9
    ];

    //selects a random Ascii character
    function getRandomChar(max) {
            return String.fromCharCode(Math.floor(Math.random() * Math.floor(max))+33);
          }
    
    //forms the new password
    function createNewPassword(value, characterArray) {
        let password = "";
        if (characterArray === 3) {
            for (i = 0; i < value; i++) {
                password += getRandomChar(characterArrayFull.length);
            }
        } else if (characterArray === 2) {
            for (i = 0; i < value; i++) {
                password += getRandomChar(characterArrayCommon.length);
            }
        } else {
            for (i = 0; i < value; i++) {
                password += getRandomChar(characterArrayBasic.length);
            }
        }
        return password;
    }        
    
    //respond to make new-password user request
    const inputElement = document.getElementById('make-password');
    inputElement.addEventListener("click", function() {

        const lengthPasswordElement = document.getElementById('length-password');
        const selectTypePasswordElement = document.querySelector('input[name="engine"]:checked');

        
        alert(selectTypePasswordElement.value);
        let newPassword = createNewPassword(lengthPasswordElement.value, selectTypePasswordElement.value);

        const newPasswordElement = document.getElementById('new-password');
        newPasswordElement.innerHTML += `
            <p>${newPassword}</p>
        `;
    });
});