const track = document.getElementById("image-track");

window.onmousedown = e => {
     track.dataset.onmousedownAt = e.clientX;
    
}
window.onmousemove = () => {
    track.dataset.mouseDownAt = "0";
    track.dataset.prevPercentage = track.dataset.percenatge;
}
    window.onmousedown = e => {
        if(track.dataset.onmousedownAt === "0") return;
    const mouseDelta = parseFloat(track.dataset.mouseDownAt) - e.clientX,
            maxDelta = window.innerWidth / 2;
            const percentage = (mouseDelta / maxDelta) * -100;
                nextPercentage = parseFloat(track.dataset.prevPercentage) + percenatge;
                track.dataset.percenatge = nextPercentage;
            track.style.transform = 'translate(${nextPercentage}%, -50%)';

            track.animate({
                transform: 'translate(${nextPercentage}%, -50%'},
                { duration: 1200, fill: "forwards" });

    

    for(const image of track.getElementsByClassName("image")) {
        
        image.style.objectPosition = '${nextpercentage + 100} 50%';

        image.animate({
            objectPosition: '${100 + nextPercentage}% center'}, { duration: 1200, fill: "forwards" });
        
} }