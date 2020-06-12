var slideIndex = 0;
        showSlides();

        function showSlides() {
            var i;
            var slides = document.getElementsByClassName("mySlides");
            var dots = document.getElementsByClassName("dot");
            for (i = 0; i < slides.length; i++) {
                slides[i].style.display = "none";
            }
            slideIndex++;
            if (slideIndex > slides.length) {
                slideIndex = 1
            }
            for (i = 0; i < dots.length; i++) {
                dots[i].className = dots[i].className.replace(" active", "");
            }
            slides[slideIndex - 1].style.display = "block";
            dots[slideIndex - 1].className += " active";
            setTimeout(showSlides, 3000); // Change image every 2 seconds
        }

 // JavaScript code to pick  
        // a random color from array 
        function pickColor() {

            // Array containing colors 
            var colors = [
                'white', '#F9304D', '#112DF2',
                '#2C9B15', '#45377C', '#EFDB49' , 'black'
            ];

            // selecting random color 
            var random_color = colors[Math.floor(
                Math.random() * colors.length)];

            var x = document.getElementById('pick');
            x.style.color = random_color;
        }