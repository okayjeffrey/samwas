function myPluginLoadEvent(func) {
    opened = false;
    // console.log('load');
      var btn = document.getElementById('burgermenu');
      btn.addEventListener('click', onBtnClick);
      btn.classList.remove("opacity0");
}
    function onBtnClick(e) {
        // console.log('button');
        this.classList.remove("paused");
        this.classList.toggle('opened');
        showHide();
    }

    function showHide(){
        // console.log('show/hide');
        var about = document.querySelector('#about');
        about.classList.remove("paused");
        about.classList.toggle('show');
        about.classList.toggle('hide');
    }

window.onload = function() {
    // console.log('onload');
    // pass the function you want to call at 'window.onload', in the function defined above
    myPluginLoadEvent(function(){
    // your awesome code to run on window.onload
    });
}
