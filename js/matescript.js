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
                '#A6A1D0', '#D77790', '#E17142',
                '#66C3C1', '#939D18', '#E1AC3E' , 'black'
            ];

            // selecting random color 
            var random_color = colors[Math.floor(
                Math.random() * colors.length)];

            var x = document.getElementById('pick');
            x.style.color = random_color;
        }