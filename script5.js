document.addEventListener("DOMContentLoaded", function() {

    const toggleButton7= document.getElementById("button-icon5");
    const fadingText5 = document.getElementById("fade-in-text5");

        fadingText5.style.opacity = "0";

        toggleButton7.addEventListener('click', () => {

            if (fadingText5.style.opacity === '0') {
                fadingText5.style.opacity = '1'; 
            } else {
                fadingText5.style.opacity = '0';
            }
                            
        });
    
    const toggleButton8 = document.getElementById("button-citation");
    const div5 = document.getElementById("pop-up-container");
    
        div5.style.opacity = "0";
                            
        toggleButton8.addEventListener('click', () => {
                
            if (div5.style.opacity === "0") {
                div5.style.opacity = "1";
            } else {
                div5.style.opacity = "0";
            }
        });

    function updateClock() {
        const now = new Date();
        let hours = now.getHours();
        let minutes = now.getMinutes();
               
        hours = hours % 12;
        hours = hours ? hours : 12; 
            
        const timeString = `${hours}:${minutes < 10 ? '0' : ''}${minutes}`;
                
        document.getElementById('time').textContent = timeString;
    }
            
        updateClock();
        setInterval(updateClock, 60000);

});