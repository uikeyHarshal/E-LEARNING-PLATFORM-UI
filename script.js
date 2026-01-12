// VIDEO WATCH PROGRESS
const video = document.getElementById("courseVideo");
const statusText = document.getElementById("watchStatus");

if (video) {
  video.addEventListener("timeupdate", () => {
    const progress = Math.floor(
      (video.currentTime / video.duration) * 100
    );

    localStorage.setItem("courseProgress", progress);

    if (statusText) {
      statusText.innerText = `Progress: ${progress}%`;
    }
  });
}

// DASHBOARD PROGRESS DISPLAY
const savedProgress = localStorage.getItem("courseProgress");

const fill = document.getElementById("progress-fill");
const text = document.getElementById("progress-text");

if (savedProgress && fill && text) {
  fill.style.width = savedProgress + "%";
  text.innerText = savedProgress + "%";
}
// OPTIONAL: RESET PROGRESS BUTTON
const resetButton = document.getElementById("resetProgress");       
if (resetButton) {  
    resetButton.addEventListener("click", () => {   
        localStorage.removeItem("courseProgress");
        if (fill && text) {   
            fill.style.width = "0%";   
            text.innerText = "0%";   
        }           
        if (statusText) {   
            statusText.innerText = "Progress: 0%";   

        }
        if (video) {   
            video.currentTime = 0;   
        }           
    });
}   