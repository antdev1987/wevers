// Get the modal
var modal = document.getElementById('myModal');

// Get the button that opens the modal
var btn = document.querySelectorAll('.openModal');

// Get the <span> element that closes the modal
var span = document.getElementsByClassName('close')[0];

// When the user clicks the button, open the modal
btn.forEach((item) => {
  item.onclick = function () {
    const modaloption = document.querySelectorAll('.modal__option');
    const pop = document.querySelector(`#modaltrabajando`);
    modal.style.display = 'flex';

    modaloption.forEach((item, idx) => {
      if (idx !== 0) return;

      item.style.display = 'block';
      console.log(modaloption);
    });

    pop.style.display = 'none';
  };
});

// When the user clicks on <span> (x), close the modal
span.onclick = function () {
  modal.style.display = 'none';
};

// When the user clicks anywhere outside of the modal, close it
window.onclick = function (event) {
  if (event.target == modal) {
    modal.style.display = 'none';
  }
};

let options = document.querySelectorAll('.option');

let trabaja = document.querySelector('#trabaja');

options.forEach((item) => {
  item.addEventListener('click', () => {
    showModal(item.id);
  });
});

function showModal(cual) {
  const modaloption = document.querySelectorAll('.modal__option');
  const pop = document.querySelector(`#modal${cual}`);

  modaloption.forEach((item, idx) => {
    if (idx === 0) return;

    item.style.display = 'none';
    console.log(modaloption);
  });

  pop.style.display = 'block';
}

trabaja.addEventListener('click', () => {
  const modaloption = document.querySelectorAll('.modal__option');
  const pop = document.querySelector(`#modaltrabajando`);
  modal.style.display = 'flex';

  modaloption.forEach((item) => {
    item.style.display = 'none';
    console.log(modaloption);
  });

  pop.style.display = 'block';
});
