const slideDescription = [
    'My dog be like:',
    'When you learn German',
    'Junior every day',
    'Team work'
]

const controls = document.querySelectorAll('.control');
const circleControls = document.querySelectorAll('.circle-control');
let activecircleControl = 0;


controls.forEach((element, index)=> {
    element.addEventListener('click', () => {
    document.querySelector('.slider-img').style.transform=`translateX(-${100 * index}%)`;
    let memeDescription = document.querySelector('.meme-description');
    memeDescription.textContent = slideDescription[index];
    circleControls[activecircleControl].classList.remove('checked');
    activecircleControl = index;
    circleControls[activecircleControl].classList.add('checked');
    })
})

