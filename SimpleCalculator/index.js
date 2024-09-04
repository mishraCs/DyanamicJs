var stringToSolve = '';
document.getElementById('one').addEventListener('click', () => {
    let one = document.getElementById('one').innerHTML;
    stringToSolve += `${one}`;
    document.getElementById('calc-solve').innerHTML = stringToSolve;
});

document.getElementById('two').addEventListener('click', () => {
    let two = document.getElementById('two').innerHTML;
    stringToSolve += `${two}`;
    document.getElementById('calc-solve').innerHTML = stringToSolve;
});
document.getElementById('three').addEventListener('click', () => {
    let three = document.getElementById('three').innerHTML;
    stringToSolve += `${three}`;
    document.getElementById('calc-solve').innerHTML = stringToSolve;
});
document.getElementById('four').addEventListener('click', () => {
    let four = document.getElementById('four').innerHTML;
    stringToSolve += `${four}`;
    document.getElementById('calc-solve').innerHTML = stringToSolve;
});
document.getElementById('five').addEventListener('click', () => {
    let five = document.getElementById('five').innerHTML;
    stringToSolve += `${five}`;
    document.getElementById('calc-solve').innerHTML = stringToSolve;
});
document.getElementById('six').addEventListener('click', () => {
    let six = document.getElementById('six').innerHTML;
    stringToSolve += `${six}`;
    document.getElementById('calc-solve').innerHTML = stringToSolve;
});
document.getElementById('seven').addEventListener('click', () => {
    let seven = document.getElementById('seven').innerHTML;
    stringToSolve += `${seven}`;
    document.getElementById('calc-solve').innerHTML = stringToSolve;
});
document.getElementById('eight').addEventListener('click', () => {
    let eight = document.getElementById('eight').innerHTML;
    stringToSolve += `${eight}`;
    document.getElementById('calc-solve').innerHTML = stringToSolve;
});
document.getElementById('nine').addEventListener('click', () => {
    let nine = document.getElementById('nine').innerHTML;
    stringToSolve += `${nine}`;
    document.getElementById('calc-solve').innerHTML = stringToSolve;
});
document.getElementById('subtraction').addEventListener('click', () => {
    let subtraction = document.getElementById('subtraction').innerHTML;
    stringToSolve += `${subtraction}`;
    document.getElementById('calc-solve').innerHTML = stringToSolve;
});
document.getElementById('multiplication').addEventListener('click', () => {
    let multiplication = document.getElementById('multiplication').innerHTML;
    stringToSolve += `${multiplication}`;
    document.getElementById('calc-solve').innerHTML = stringToSolve;
});
document.getElementById('divison').addEventListener('click', () => {
    let divison = document.getElementById('divison').innerHTML;
    stringToSolve += `${divison}`;
    document.getElementById('calc-solve').innerHTML = stringToSolve;
});
document.getElementById('addition').addEventListener('click', () => {
    let addition = document.getElementById('addition').innerHTML;
    stringToSolve += `${addition}`;
    document.getElementById('calc-solve').innerHTML = stringToSolve;
});
document.getElementById('zero').addEventListener('click', () => {
    let zero = document.getElementById('zero').innerHTML;
    stringToSolve += `${zero}`;
    document.getElementById('calc-solve').innerHTML = stringToSolve;
});
document.getElementById('equal').addEventListener('click', () => {
    let toSolve = document.getElementById('calc-solve').innerHTML;
    const compute = (expression) => {
        try {
            return new Function('return ' + expression)();
        } catch (e) {
            return 'Error';
        }
    };
    document.getElementById('calc-solve').innerHTML = compute(toSolve);
});

document.getElementById('clear').addEventListener('click', () => {
    document.getElementById('calc-solve').innerHTML = '';
    stringToSolve = '';
});







