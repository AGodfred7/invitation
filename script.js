document.addEventListener("DOMContentLoaded", function() {
    var video = document.getElementById("bg-video");

    // Function to set the video source
    function setVideoSource() {
        // Set the video source paths accordingly
        video.src = 'dispositivimobili.MP4'; // Set video source
    }

    // Call the function to set video source on DOMContentLoaded
    setVideoSource();

    // Play the video automatically (and ensure it's muted for iOS)
    video.play().then(function() {
        // Autoplay started successfully
    }).catch(function(error) {
        // Autoplay was prevented
        console.log("Autoplay was prevented: ", error);
    });

    // Mute the video for iOS devices to comply with autoplay policy
    video.muted = true;
});
