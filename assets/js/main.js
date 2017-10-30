window.onload = function(){ 
    // Get the modal
    var modal = document.getElementById('show-modal');

    // Get the image and insert it inside the modal - use its "alt" text as a caption
    var show = document.getElementById('show-1');
    var modalOne = document.getElementById("modal-1");
    show.onclick = function(){
        modal.style.display = "block";
    }

    // Get the <span> element that closes the modal
    var span = document.getElementsByClassName("close")[0];

    // When the user clicks on <span> (x), close the modal
    span.onclick = function() { 
    modal.style.display = "none";
    }
};