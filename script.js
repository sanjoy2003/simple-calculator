let input = document.querySelector('.calculator-screen');
let buttons = document.querySelectorAll('.button');
let string = "";

buttons.forEach((button) => {
    button.addEventListener('click', (e) => {
        if (e.target.innerHTML === '=') {
            try {
                string = eval(string);
            } catch {
                string = "Error";
            }
            input.value = string;
        } else if (e.target.innerHTML === 'C') {
            string = "";
            input.value = string;
        } else {
            string += e.target.innerHTML;
            input.value = string;
        }
    });
});
