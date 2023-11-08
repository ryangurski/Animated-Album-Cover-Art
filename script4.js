document.addEventListener("DOMContentLoaded", function() {

    const toggleButton6= document.getElementById("button-icon4");
    const fadingText4 = document.getElementById("fade-in-text4");

        fadingText4.style.opacity = "0";

        toggleButton6.addEventListener('click', () => {

            if (fadingText4.style.opacity === '0') {
                fadingText4.style.opacity = '1'; 
            } else {
                fadingText4.style.opacity = '0';
            }
                            
        });
    
    const toggleButton7 = document.getElementById("button-citation");
    const div4 = document.getElementById("pop-up-container");
    
        div4.style.opacity = "0";
                            
        toggleButton7.addEventListener('click', () => {
                
            if (div4.style.opacity === "0") {
                div4.style.opacity = "1";
            } else {
                div4.style.opacity = "0";
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