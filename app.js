document.body.onload = changeText;

function changeText() {
  var el = document.getElementById('about');
  el.innerText = 'About Kim Schlesinger'
};

function changeListItem() {
  var el = document.getElementsByClassName('list');
  el[0].children[0].innerText = 'HIIIIIII!';
};

function addElement() {
  var newParagraph = document.createElement('p');
  var newText = document.createTextNode('Hi, g59!');

  newParagraph.appendChild(newText);
    console.log(newParagraph);

  document.getElementById('greeting').appendChild(newParagraph)
};
