document.addEventListener("DOMContentLoaded", function() {

    const toggleButton = document.getElementById("button-icon");
    const text = document.getElementById("draw-text");
    const fadingText = document.getElementById("fade-in-text");

        text.style.opacity = "1";
        fadingText.style.opacity = "0";
                        
        toggleButton.addEventListener('click', () => {
            
            if (text.style.opacity === "1") {
                text.style.opacity = "0";
            } else {
                text.style.opacity = "1";
            }

            if (fadingText.style.opacity === '0') {
                fadingText.style.opacity = '1'; 
            } else {
                fadingText.style.opacity = '0';
            }
                            
        });
                        
    const toggleButton2 = document.getElementById("button-citation");
    const div = document.getElementById("pop-up-container");

        div.style.opacity = "0";
                        
        toggleButton2.addEventListener('click', () => {
            
            if (div.style.opacity === "0") {
                div.style.opacity = "1";
            } else {
                div.style.opacity = "0";
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

    