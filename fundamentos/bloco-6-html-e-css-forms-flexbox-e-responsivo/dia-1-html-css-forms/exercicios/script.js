function submit(event) {
    event.preventDefault();
  }

window.onload = function () {
    let button = document.querySelector('#buttonSubmit');
    button.addEventListener('click', submit);
}