let atdButton= document.getElementById('atd');
let tdnContainer = document.getElementById('tdncontainer');
let inputField = document.getElementById('inputField');

atdButton.addEventListener('click', function (){
    var paragraph = document.createElement('p')
    paragraph.classList.add('paragraph-styling');
    paragraph.innerText = inputField.value;
    tdncontainer.appendChild(paragraph);
    inputField.Value ="";
    paragraph.addEventListener('click', function (){
        paragraph.style.textDecoration = "line-through";
      })
    paragraph.addEventListener('dblclick', function (){
        tdnContainer.removeChild(paragraph);
    })
})
