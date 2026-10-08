const colors = ['green', 'blue', 'red'];

function applyRandomColor(element) {
    const randomColor = colors[Math.floor(Math.random() * colors.length)];
    element.style.color = randomColor;
}

document.querySelectorAll('h5').forEach(h5 => {
    h5.addEventListener('click', () => applyRandomColor(h5));
});