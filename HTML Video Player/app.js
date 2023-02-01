const player=document.querySelector(".player")
const video=document.querySelector(".viewer")
const progress=player.querySelector(".progress")
const progressBar=player.querySelector(".progress_filled")
const toggle=player.querySelector(".toggle")
const ranges=player.querySelectorAll(".player_slider")
const skipButtons=player.querySelectorAll("[data-skip]")


//build out functions

function togglePlay(){
    video.paused ? video.play() : video.pause()
}

function updateToggle(){
    const icon = this.paused ? '►' : '❚ ❚';
    toggle.textContent=icon
}
 function skip(){
  
    video.currentTime += parseFloat(this.dataset.skip)
}

function handleRangeUpdate(){
    
    video[this.name]=this.value
}

function handleProgress(){
    const percent=(video.currentTime/video.duration)*100;
    progressBar.style.flexBasis=`${percent}%`
}

function scrub(e){
    const time=(e.offsetX/progress.offsetWidth)*video.duration
    video.currentTime=time;
}


//hook up the event listeners

video.addEventListener("click",togglePlay)
toggle.addEventListener("click",togglePlay)
video.addEventListener("play",updateToggle)
video.addEventListener("pause",updateToggle)
skipButtons.forEach(btn=>btn.addEventListener("click",skip))
ranges.forEach(input=>input.addEventListener("change",handleRangeUpdate))
//ranges.forEach(input=>input.addEventListener("mousemove",handleRangeUpdate))
video.addEventListener("timeupdate",handleProgress)
progress.addEventListener("click",scrub)