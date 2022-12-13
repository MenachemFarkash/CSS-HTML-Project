let vh = 'vh';
let pos = 25;
let activeBook = 1;
let issue2ContainerPos;
const issue1 = document.getElementById('issue1Container').style;
const issue2 = document.getElementById('issue2Container').style;

issue1.top = pos + vh;
issue2.top = 100 + vh;
window.addEventListener('wheel', function (event) {
    if (event.deltaY < 0 && activeBook <= 1) {
        changeColor();
        activeBook++;
        console.log('scrollUp');
        issue1.top = 100 + vh;
        issue2.top = pos + vh;
        this.document.getElementById('body').style.backgroundColor = 'rgb(64, 113, 210)';
        console.log(document.getElementById('body'));

        console.log('issue1' + ' ' + issue1.top);
        console.log('issue2' + ' ' + issue2.top);
    } else if (event.deltaY > 0 && activeBook >= 2) {
        activeBook--;
        console.log('scrollDown');
        issue1.top = pos + vh;
        issue2.top = 100 + vh;
        this.document.getElementById('body').style.backgroundColor = 'rgb(210, 64, 64)';

        console.log('issue1' + ' ' + issue1.top);
        console.log('issue2' + ' ' + issue2.top);
    }
});

function changeColor() {
    const background = document.getElementById('body');
    background.style.backgroundColor = 'yellow';
}
