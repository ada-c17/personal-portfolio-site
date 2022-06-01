
let synDef = "Synesthesia is a neurological phenomenon in which stimulation of one sensory pathway automatically activates a second sensory pathway, resulting in some kind of perceptual experience";
for (let i = 0; i < synDef.length; i++){
    
    let c = (synDef[i]).toLowerCase();
    let letter = synDef[i];
    let textId = "syn-definition";
    document.write('<span id = '+textId+' class= '+c+'>' + letter+ '</span>');
}


