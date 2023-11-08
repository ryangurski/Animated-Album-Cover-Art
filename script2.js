document.addEventListener("DOMContentLoaded", function() {

    const toggleButton3= document.getElementById("button-icon2");
    const fadingText2 = document.getElementById("fade-in-text2");

        fadingText2.style.opacity = "0";

        toggleButton3.addEventListener('click', () => {

            if (fadingText2.style.opacity === '0') {
                fadingText2.style.opacity = '1'; 
            } else {
                fadingText2.style.opacity = '0';
            }
                            
        });
    
    const toggleButton4 = document.getElementById("button-citation");
    const div2 = document.getElementById("pop-up-container");
    
        div2.style.opacity = "0";
                            
        toggleButton4.addEventListener('click', () => {
                
            if (div2.style.opacity === "0") {
                div2.style.opacity = "1";
            } else {
                div2.style.opacity = "0";
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

