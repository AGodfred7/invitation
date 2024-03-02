document.addEventListener("DOMContentLoaded", function() {
  var video = document.getElementById("bg-video");
  var videoContainer = document.querySelector(".video-container");
  var overlayTimeout;
  var overlayVisible = false;

  video.addEventListener("click", function() {
      if (overlayVisible) {
          return; // If overlay is currently visible, prevent further clicks
      }

      clearTimeout(overlayTimeout); // Clear any existing timeout

      if (video.paused) {
          video.play();
          showOverlay("play");
          overlayVisible = true;
          overlayTimeout = setTimeout(function() {
              hideOverlay();
          }, 500); // Hide play overlay after 0.5 second
      } else {
          video.pause();
          showOverlay("pause");
          overlayVisible = true;
          overlayTimeout = setTimeout(function() {
              hideOverlay();
          }, 500); // Hide pause overlay after 0.5 second
      }
  });

  function showOverlay(type) {
      if (!document.querySelector(".overlay")) {
          var overlay = document.createElement("div");
          overlay.className = "overlay";
          overlay.style.position = "absolute";
          overlay.style.top = "50%";
          overlay.style.left = "50%";
          overlay.style.transform = "translate(-50%, -50%)";
          overlay.style.color = "rgba(255, 255, 255, 0.5)"; // Transparent white color
          overlay.style.fontSize = "72px";
          overlay.textContent = type === "play" ? "▶" : "❚❚"; // Unicode symbols for play and pause
          videoContainer.appendChild(overlay);
      }
  }

  function hideOverlay() {
      var overlay = document.querySelector(".overlay");
      if (overlay) {
          overlay.remove();
          overlayVisible = false;
      }
  }

  // Function to check if the device is a mobile device
  function isMobileDevice() {
      return /iPhone|iPad|iPod|Android/i.test(navigator.userAgent);
  }

  // Function to set the video source based on device type
  function setVideoSource() {
      if (isMobileDevice()) {
          video.src = 'invitationDamian.MP4'; // Set mobile video source
      } else {
          video.src = 'dispositivimobili.MP4'; // Set desktop video source
      }
  }

  // Call the function to set video source on DOMContentLoaded
  setVideoSource();
});
