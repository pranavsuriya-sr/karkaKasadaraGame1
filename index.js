document.addEventListener('DOMContentLoaded', function () {
    const options = ['Dog', 'Cat', 'Mouse', 'Goat'];
    const correctAnswer = 'Dog';

    const card = document.getElementById('card');
    const front = document.getElementById('front');
    const back = document.getElementById('back');
    const resultText = document.getElementById('result-text');
    const optionButtons = document.querySelectorAll('.option-btn');

    function flipCard() {
        card.classList.toggle('flipped');
    }

    function checkAnswer(selectedOption) {
        if (selectedOption === correctAnswer) {
            resultText.textContent = 'Correct!';
        } else {
            resultText.textContent = 'Incorrect. The correct answer is: ' + correctAnswer;
        }

        flipCard();
    }

    front.addEventListener('click', function () {
        flipCard();
    });

    optionButtons.forEach(function (button) {
        button.addEventListener('click', function () {
            const selectedOption = button.textContent;
            checkAnswer(selectedOption);
        });
    });

});