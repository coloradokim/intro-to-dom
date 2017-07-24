document.body.onload = changeListItem;

function changeText() {
  let el = document.getElementById('about');
  el.innerText = "About Kim Schlesinger"
};

function changeListItem() {
  let el = document.getElementsByClassName('list');
  console.log(el[0].children);
};


function addElement() {
  var newParagraph = document.createElement('p');
  var newText = document.createTextNode('Howdy, g59!');

  newParagraph.appendChild(newText)
  document.getElementById('greeting').appendChild(newParagraph);
}
