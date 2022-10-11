const ansObj = {
    array1 : ["As the sun sets on another day,", "when darkness surrounds you,", "If everything seems impossible,", "Inside yourself you will find,", "shadows may cover everything,", "Hope is always close by,", "When you feel empty,", "If you struggle to escape lonliness,", "Many feel consumed by their mistakes,", "In a world so vast,",],
    array2 : ["things feel too much,", "you struggle to look inside yourself,", "the stars seem no longer to shine,", "the light may be difficult to find,", "you have no idea how you got this far,", "every descision you have made has led you astray,", " when your worth feels lesser than this life leads you to believe,"],
    array3 : ["you can set out into the world and let beauty consume you.", "life beams like a nova from your bossom.", "once, darkness tried once to devour you and failed. As it shall again.", "that time is not your enemy, as long as you have it, there is hope.", "the Future can be anything you want it to be. It hasn't happened yet", "you are worthy of love!", "the answers are closer than you think.", "the day is always darkest before the dawn."]
}

let randArrNum = arr => Math.floor(Math.random() * arr.length)

const messageSelector = (arr) => {
    return arr[randArrNum(arr)]
}

let button = document.getElementById('button');
// let ans1 = document.getElementById('ans1');
// let ans2 = document.getElementById('ans2');
// let ans3 = document.getElementById('ans3');

// console.log(ans1)

button.onclick = () => {
    document.getElementById('ans1').innerHTML = `... ${messageSelector(ansObj.array1)}`;
    document.getElementById('ans2').innerHTML = `and ${messageSelector(ansObj.array2)}`;
    document.getElementById('ans3').innerHTML = `know ${messageSelector(ansObj.array3)}`;
};

button.onmousedown = () => {
    button.style.boxShadow = 'black 2px 2px';
}

button.onmouseup = () => {
    button.style.boxShadow = '';
}

alert

// console.log(`First part of quote ${messageSelector(ansObj.array1)}!`);
// console.log(`second part of quote "${messageSelector(ansObj.array2)}"`);
// console.log(`Final part ${messageSelector(ansObj.array3)}`);