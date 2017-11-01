window.onload = function(){ 

    var modal = document.getElementById('show-modal');
    var modalVideo = document.getElementById("modal-video");

    function openModal() {
        modalVideo.src = this.getAttribute("data-video");
        window.scrollTo(0, 0);
    }

    var shows = document.querySelectorAll('.show');
    for(var i=0, len = shows.length; i < len; i++){
        shows[i].addEventListener('click', openModal);
    }

    /* var span = document.getElementsByClassName("close")[0];
    
    span.onclick = function() { 
        modal.style.display = "none";
        modalVideo.src = "";
    }  */
};