document.addEventListener("DOMContentLoaded", function() {
    var video = document.getElementById("bg-video");

    // Function to set the video source
    function setVideoSource() {
        // Set the video source paths accordingly
        video.src = 'dispositivimobili.MP4'; // Set video source
    }

    // Call the function to set video source on DOMContentLoaded
    setVideoSource();

    // Play the video automatically
    video.play();
});