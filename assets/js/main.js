window.onload = function(){ 
    // Get the modal
    var modal = document.getElementById('show-modal');
    var modalVideo = document.getElementById("modal-video");

    /*
    // Get the image and insert it inside the modal - use its "alt" text as a caption
    var show = document.getElementById('show-1');
    show.onclick = function(){
        modal.style.display = "block";
    }
    */

    function openModal() {
        modal.style.display = "block";
        modalVideo.src = this.getAttribute("data-video");
    }

    var shows = document.querySelectorAll('.show');
    for(var i=0, len = shows.length; i < len; i++){
        shows[i].addEventListener('click', openModal);
    }

    // Get the <span> element that closes the modal
    var span = document.getElementsByClassName("close")[0];
    
    // When the user clicks on <span> (x), close the modal
    span.onclick = function() { 
        modal.style.display = "none";
        modalVideo.src = "";
    } 
};