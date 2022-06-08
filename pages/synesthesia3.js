let heading =
  "Hover your cursor over any of the text on this page to see the color my brain associates with each letter.";
for (let i = 0; i < heading.length; i++) {
  let c = heading[i].toLowerCase();
  let letter = heading[i];
  if (letter == ".") {
    letter += "<br />";
  }
  let textId = "page-description";

  document.write(
    "<span id = " + textId + " class= " + c + ">" + letter + "</span>"
  );
}

let mySyn =
  "Some of the letters will remain black. This is because the colors I perceive those letters as are not ~actually~ possible to see. These are known as impossible colors. ";
for (let i = 0; i < mySyn.length; i++) {
  let c = mySyn[i].toLowerCase();
  let letter = mySyn[i];
  if (i == 0) {
    letter = "<br />" + letter;
  }
  let textId = "fake-colors";

  document.write(
    "<span id = " + textId + " class= " + c + ">" + letter + "</span>"
  );
}
