// SETUP
const items = document.querySelectorAll(".item");
const smileMin = 512;
const smileMax = 586;
const visibleTime = 5000;   // Initial items display time (milliseconds)
let availableCodes = [];
let usedCodes =[];
let availableSpots = [0,1,2,3,4,5,6,7,8,9,10,11,12,13,14,15];
let usedSpots = [];
let randomNum;
let x;
let y = 0;
let choice = [];

// Generates 8 random smile codes to fill items divs
for(i=0; i < 8; i++) {

    if(i > 0) {

        while(availableCodes.includes(randomNum)) {
            
            randomNum = randomize(smileMin,smileMax);

        }

    } else {
        randomNum = randomize(smileMin,smileMax);
    }
    
    availableCodes[i] = randomNum;

}

for(i = 0; i < 8; i++) {

    x = randomize(0,availableSpots.length -1);
    items[availableSpots[x]].innerHTML = `<i>&#128${availableCodes[0]}</i>`;
    usedSpots.push(availableSpots.splice(x,1));
    
    x = randomize(0,availableSpots.length -1);
    items[availableSpots[x]].innerHTML = `<i>&#128${availableCodes[0]}</i>`;
    usedSpots.push(availableSpots.splice(x,1));
    usedCodes.push(availableCodes.shift());
}

function randomize(min, max) {
    return Math.floor(Math.random() * (max - min +1)) + min;
}

function toggleHide(el) {
    el.classList.toggle('hide');
}

addEventListener('click', (e) => {

    if(!e.target.classList.contains('item')) {
        return;
    } else {
        
        y > 1 ? y = 0 : y = y;

        toggleHide(e.target);

        choice[y] = e.target;
        y++;

        if(choice.length > 1) {

            if (choice[0].innerHTML === choice[1].innerHTML) {
                choice[0].style.cssText = "pointer-events:none";
                choice[1].style.cssText = "pointer-events:none";
                choice = [];

            } else {

                setTimeout(() => {
                    toggleHide(choice[0]);
                    toggleHide(choice[1]);
                    choice = [];
                }, 500);
            }
        }

    }
});

setTimeout(() => {
    items.forEach(function (el) {
        toggleHide(el);
    })
}, visibleTime);