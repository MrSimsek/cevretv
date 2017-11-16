window.onload = function(){ 

    var modal = document.getElementById('show-modal');
    var modalVideo = document.getElementById("modal-video");
    var shows = document.querySelectorAll('.sm-video');

    function openModal() {
        for(var i=0, len = shows.length; i < len; i++){
            shows[i].style.backgroundColor = "";
        }
        modalVideo.src = this.getAttribute("data-video");
        this.style.backgroundColor = "orange";
        // window.scrollTo(0, 0);
    }

    for(var i=0, len = shows.length; i < len; i++){
        shows[i].addEventListener('click', openModal);
    }
};