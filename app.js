const logoChange = () =>{
    const logoImages = [
        "./assets/triangle.png",
        "./assets/eclipse.png",
        "./assets/square.png"
    ];

    const logo = document.querySelector('#logo img');
    const logoName = document.querySelector('#logo h1');
    let counter = 0;
    logo.src = logoImages[counter];

    interval = setInterval(() => {
        if(counter >= logoImages.length-1){
            logo.src = logoImages[logoImages.length-1];
            logoName.classList.add('show-logo-name');
            counter++;
            if(counter >= 6){
                logoName.classList.remove('show-logo-name');
            }
        }
        else{
            counter++;
            logo.src = logoImages[counter];
        }
    }, 500);
}

const imagesForContainer = () =>{
    const images = [
        "./assets/first.jpg",
        "./assets/second.jpg",
        "./assets/third.jpg",
        "./assets/fourth.jpg",
        "./assets/fifth.jpg",
        "./assets/sixth.jpg",
        "./assets/seventh.jpg",
        "./assets/eigtht.jpg",
        "./assets/ninth.jpg",
        "./assets/tenth.jpg",
    ];

    const imagesContainer = document.querySelector('.images-container');
    let counter = 0;

    interval = setInterval(() => {
        if(counter === images.length-1){
            counter = 0;
        }
        imagesContainer.style.background = `url("${images[counter]}") no-repeat center`;
        imagesContainer.style.backgroundSize = 'cover';
        counter++;
    }, 750);
}

const workTagHover = () =>{
    const workTag = document.getElementById('work-tag');
    const footerTag = document.getElementById('footer-tag');
    const blurred = document.querySelector('#blurred');
    const logo = document.getElementById('logo');
    const rightSideFooter = document.querySelector('.right-side');
    const footerBottom = document.querySelector('.footer-bottom');
    const footerBottomText = document.querySelector('.footer-bottom-text');

    workTag.addEventListener('mouseover', () =>{
        blurred.style.filter = 'blur(5px)';
        logo.style.filter = 'blur(5px)';
    })

    workTag.addEventListener('mouseout', () =>{
        blurred.style.filter = 'blur(0px)';
        logo.style.filter = 'blur(0px)';
    })

    footerTag.addEventListener('mouseover', () =>{
        blurred.style.filter = 'blur(5px)';
        logo.style.filter = 'blur(5px)';
        footerBottom.style.filter = 'blur(5px)';
        rightSideFooter.style.filter = 'blur(5px)';
        footerBottomText.style.filter = 'blur(5px)';
    })

    footerTag.addEventListener('mouseout', () =>{
        blurred.style.filter = 'blur(0px)';
        logo.style.filter = 'blur(0px)';
        footerBottom.style.filter = 'blur(0px)';
        rightSideFooter.style.filter = 'blur(0px)';
        footerBottomText.style.filter = 'blur(0px)';
    })

    footerBottom.addEventListener('mouseover', () =>{
        if(window.matchMedia('(max-width:768px)').matches){
            footerBottomText.style.transform = 'translateY(0px)';
        } else{
            footerBottomText.style.transform = 'translateY(-20px)';
        }
    })

    footerBottom.addEventListener('mouseout', () =>{
        footerBottomText.style.transform = 'translateY(0px)';
    })
}

const textShadow = () => {
    const text = document.getElementById('footer-tag');
    const textP = document.querySelector('#footer-tag p')
    const textSpan = document.querySelector('#footer-tag span')
    const walk = 100;
    
    function shadow(e) {
        const {offsetWidth: width, offsetWidth: height } = text;

        let {offsetX: x, offsetY: y} = e;
        if(this !== e.target){
            x = x + e.target.offsetLeft;
            y = y + e.target.offsetTop;
        }
        const xWalk = Math.round(( x / width * walk) - (walk / 2));
        const yWalk = Math.round(( y / width * walk) - (walk / 2));

        textP.style.textShadow = `${xWalk}px ${yWalk}px 5px rgba(255,255,255, .1)`;
        textSpan.style.textShadow = `${xWalk}px ${yWalk}px 5px rgba(227,30,60, .1)`;
    }

    text.addEventListener('mousemove', shadow);
    text.addEventListener('mouseout', () =>{
        textP.style.textShadow = 'none';
        textSpan.style.textShadow = 'none';
    })
}

const nugsFunction = () => {
    const nugsButton = document.querySelector('.first-row button');
    const nugsContainer = document.querySelector('.nugs-container');
    const nugsNevermindButton = document.querySelector('#nugs-container .nugs-bottom-container button');
    const appearContainer = document.querySelector('#appear-on-nugs-show');

nugsButton.addEventListener('click', () =>{
    nugsContainer.classList.add('show-nugs');
    appearContainer.classList.add('appear-now');
    nugsNevermindButton.addEventListener('click', () =>{
        nugsContainer.classList.remove('show-nugs')
    })

    document.querySelector('body').addEventListener('click', e =>{
        console.log(e.target)
        if(e.target.id === 'appear-on-nugs-show' || e.target.className === 'fade-in'){
            nugsContainer.classList.remove('show-nugs');
        }
    })
})
}

nugsFunction();
textShadow();
imagesForContainer();
logoChange();
workTagHover();