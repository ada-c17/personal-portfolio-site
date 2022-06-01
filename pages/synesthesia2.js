

let synText = "I have grapheme-color synesthesia, which causes the perception of numbers and letters to be associated with colors. When I see or think of a letter/number, I also see a color associated with that particular letter/number. Neuroscientists associate this with a higher volume of grey matter in some areas of the brain, particularly in the ventral occipital lobe, a part of the visual system and the area of the brain that is responsible for processing words, letters, and colors.";
for (let i = 0; i < synText.length; i++){
    
    let c = (synText[i]).toLowerCase();
    let letter = synText[i];

    let textId = "grapheme";

    document.write('<span id = '+textId+' class= '+c+'>' + letter+ '</span>');

    if(letter=="."){
        textId = "breakk";
        let x = "<br />" + "<br />";
        document.write('<span id = '+textId+'>' + x + '</span>');
    }
}

