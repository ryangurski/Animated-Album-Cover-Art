document.addEventListener("DOMContentLoaded", function() {

    const toggleButton5= document.getElementById("button-icon3");
    const fadingText3 = document.getElementById("fade-in-text3");

        fadingText3.style.opacity = "0";

        toggleButton5.addEventListener('click', () => {

            if (fadingText3.style.opacity === '0') {
                fadingText3.style.opacity = '1'; 
            } else {
                fadingText3.style.opacity = '0';
            }
                            
        });
    
    const toggleButton6 = document.getElementById("button-citation");
    const div3 = document.getElementById("pop-up-container");
    
        div3.style.opacity = "0";
                            
        toggleButton6.addEventListener('click', () => {
                
            if (div3.style.opacity === "0") {
                div3.style.opacity = "1";
            } else {
                div3.style.opacity = "0";
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