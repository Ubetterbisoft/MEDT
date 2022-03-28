let elem = document.getElementById('content');
    let lipsum = document.getElementById('lipsum');
    /** console.log(elem.parentNode)
    console.log(elem.childNodes)
    console.log(elem.previousSibling)
    console.log(elem.nextSibling)
    console.log(lipsum.parentNode.parentNode.childNodes[7]);
    */
    
    let footer = document.getElementById('footer');
    function doSomething() {
        footer.innerHTML = event.clientX + " / " + event.clientY;
    }
    function red() {
        footer.style.backgroundColor = '#FF0000';
    }
    function white() {
        footer.style.backgroundColor = '#FFFFFF';
    }
    lipsum.addEventListener('mousemove',doSomething);
    lipsum.addEventListener('mouseover', red);
    lipsum.addEventListener('mouseout', white)