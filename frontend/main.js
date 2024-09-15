let seconds = 60;
let timerInterval;

function startTimer() {
    clearInterval(timerInterval);
    timerInterval = setInterval(() => {
        seconds--;

        if (seconds < 0) {
            seconds = 60;
        }

        document.getElementById('timer').textContent = seconds;
    }, 1000);
}

function updateSelectedCurrency() {

    const currencySelect = document.getElementById('currencySelect');
    const selectedText = currencySelect.options[currencySelect.selectedIndex].text;

    document.getElementById('selectedCurrency').textContent = selectedText;
}

function buyButtonClicked() {
    
    const currencySelect = document.getElementById('currencySelect');
    const selectedValue = currencySelect.value;
    const selectedText = currencySelect.options[currencySelect.selectedIndex].text;

    document.getElementById('selectedCurrency').textContent = selectedText;

    alert(`Buy ${selectedText}`);
}

// Start the timer automatically
startTimer();


//Touggle Button
const toggleBtn = document.getElementById('toggle-btn');
const body = document.body;

toggleBtn.addEventListener('click', () => {
  body.classList.toggle('dark-mode');
});

//Code for Counting the Numbers
document.addEventListener("DOMContentLoaded", function() {
    var traderateElement = document.querySelector('.traderate');
    var targetValue = 3990980;
    var traderateCount = 0;
    traderateElement.classList.add('counting');
    var interval = setInterval(function() {
        // Increment the count
        traderateCount += 19999; // Adjust the increment as needed
        traderateElement.textContent = '₹ ' + numberWithCommas(traderateCount);
        if (traderateCount >= targetValue) {
            clearInterval(interval);
            traderateElement.textContent = '₹ ' + numberWithCommas(targetValue);
        }
    }, 10); 
    function numberWithCommas(x) {
        return x.toString().replace(/\B(?=(\d{3})+(?!\d))/g, ",");
    }
});


// function flashTitleNotification(){
//     var originalTitle = document.title;
//     var isFlash = false;
//     function changeTitle(){
//         document.title = isFlash ?
//         "(10+ Messages) QUADB TECH ❤️ " : originalTitle;
//         isFlash = !isFlash;
//     }
//     setInterval(changeTitle, 1000);
// }
// window.onload = flashTitleNotification;


 window.addEventListener(
            'beforeunload',event => {
                event.preventDefault();
                event.returnValue = '';
            }
        );