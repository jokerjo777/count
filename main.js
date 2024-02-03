
let count = localStorage.getItem('count') || 0;

function updateCount() {
    document.getElementById('count').innerHTML = count;
    localStorage.setItem('count', count);
}

document.getElementById('decreaseBtn').onclick = function() {
    count -= 1;
    updateCount();
}

document.getElementById('resetBtn').onclick = function() {
    count = 0;
    updateCount();
}

document.getElementById('increaseBtn').onclick = function() {
    count += 1;
    updateCount();
}

updateCount();
