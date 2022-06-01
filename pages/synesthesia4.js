
let colorLink = "Click here to read about impossible colors.";

for (let i = 0; i < colorLink.length; i++){
    
    let c = (colorLink[i]).toLowerCase();
    let letter = colorLink[i];

    let textId = "fake-colors-link";

    document.write('<span id = '+textId+' class= '+c+'>' + letter+ '</span>');
}

