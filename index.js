let num = 0;
let intervalId;


const startHandler = () => {
    const buttonOutputDiv = document.getElementById('button-output');

    // Clear the previous interval if it exists
    clearInterval(intervalId);

    buttonOutputDiv.textContent = '';
    const p = document.createElement('p');
    buttonOutputDiv.appendChild(p);

    intervalId = setInterval(() => {
        p.innerText = ++num;
        console.log(num);
    }, 1000);

}

const stopHandler = () => {
    clearInterval(intervalId);
}

const restartHandler = () => {
    num = 0
    const p = document.querySelector('#button-output p');
    p.innerText = num;
    console.log(num);
    startHandler();
}
