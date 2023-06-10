const left = document.getElementById('left-container')
// const items = document.getElementById('items')
const items = document.querySelectorAll('.items');
const right = document.getElementById('right-container')
const btn = document.getElementById('button') 
const hiddenbtn = document.getElementById('hiddenbtn')
let draggedItem = null;

items.forEach((item) => {
    item.addEventListener ('dragstart',dragstart)
})
right.addEventListener('dragover',dragOver)

right.addEventListener('drop', drop );

function dragstart (event) {
    draggedItem = event.target;
    // console.log(draggedItem)
    // console.log(event)
   
}

function dragOver(e) {
    e.preventDefault();
}

function drop() {
    
    this.appendChild(draggedItem);
    draggedItem.style.display = 'block';
    draggedItem = null;
    
    
}
btn,hiddenbtn.addEventListener('click', () => {
    
    right.innerHTML = " "
    left.innerHTML=""
    
    left.innerHTML = `
                <div id="items"  class="items" ondragstart="dragstart(event)"  draggable="true">Item 1</div>
                <div id="items" class="items" ondragstart="dragstart(event)" draggable="true">Item 2</div>
                <div id="items" class="items" ondragstart="dragstart(event)" draggable="true">Item 3</div>
                <div id="items" class="items" ondragstart="dragstart(event)" draggable="true">Item 4</div>
                <div id="items" class="items" ondragstart="dragstart(event)" draggable="true">Item 5</div>
                <div id="items" class="items" ondragstart="dragstart(event)" draggable="true">Item 6</div>
                <div id="items" class="items"ondragstart="dragstart(event)" draggable="true">Item 7</div>
                <div id="items" class="items" ondragstart="dragstart(event)" draggable="true">Item 8</div>
                <div id="items" class="items" ondragstart="dragstart(event)" draggable="true">Item 9</div>
  `;
  
    
})

