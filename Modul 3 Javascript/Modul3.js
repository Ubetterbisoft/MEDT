            function red() {
               return "#ff0000"
            }
            function yellow(){
               return "#ffff00"
            }


            
            let footer = document.getElementById('footer');
            function changeColor(){
                footer.style.backgroundColor = red();
            }
            function changeColor2(){
               footer.style.backgroundColor = yellow();
            }
         
           
            
            function doSomething() {
                footer.innerHTML = event.clientX + " / " + event.clientY;
            }

            let lipsum = document.getElementById('lipsum');
            lipsum.addEventListener('mousemove',doSomething);
            lipsum.addEventListener('mouseover', changeColor);
            lipsum.addEventListener('mouseout',changeColor2);
