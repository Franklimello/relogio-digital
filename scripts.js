function updateClock() {
    
    const hoursElement = document.querySelector('.hours');
    const minutesElement = document.querySelector('.minutes');
    const secondsElement = document.querySelector('.seconds');

    const now = new Date();
    const hours = now.getHours().toString().padStart(2, '0');
    const minutos = now.getMinutes().toString().padStart(2, '0');
    const seconds = now.getSeconds().toString().padStart(2, '0');

    hoursElement.textContent = hours;
    minutesElement.textContent = minutos;
    secondsElement.textContent = seconds;
}

setInterval(updateClock, 1000);