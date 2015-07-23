// onclick="goBack()"

// function goBack() {
//     window.history.back();
// }

opened = false;
window.onload = function() {
  var btn = document.getElementsByTagName('button')[0];
  btn.addEventListener('click', onBtnClick);
}

function onBtnClick(e) {
    this.classList.remove("paused");
    this.classList.toggle('opened');
    showHide();
}

function showHide(){
    var about = document.querySelector('#about');
    about.classList.remove("paused");
    about.classList.toggle('show');
    about.classList.toggle('hide');
}
