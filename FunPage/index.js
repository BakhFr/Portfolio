function openDialog(event){

event.preventDefault();
const modal = document.getElementById("modal-one");
modal.classList.add('open');
const exits = modal.querySelectorAll('.modal-exit');
exits.forEach(function (exit) {
  exit.addEventListener('click', function (event) {
    event.preventDefault();
    modal.classList.remove('open');
  });
});

const input = document.getElementById("name").value;
//const value = input?.value;
console.log('input', input);

const modalTitle = document.getElementById("modal-title");
const modalText = document.getElementById("modal-text");
modalTitle.innerHTML = `Hi, ${input}!`;
modalText.innerHTML = `You are beatiful`;
}
