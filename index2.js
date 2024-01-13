document.addEventListener('DOMContentLoaded', function () {
    const optionsList = [
        { animal: 'நாய்', image: 'https://img.freepik.com/free-photo/isolated-happy-smiling-dog-white-background-portrait-4_1562-693.jpg' },
        { animal: 'பூனை', image: 'https://images.pexels.com/photos/2071882/pexels-photo-2071882.jpeg?cs=srgb&dl=pexels-wojciech-kumpicki-2071882.jpg&fm=jpg' },
        { animal: 'எலி', image: 'https://img.freepik.com/free-vector/cute-little-mouse-with-big-ears-cartoon-character_1308-133236.jpg' },
        { animal: 'ஆடு', image: 'https://upload.wikimedia.org/wikipedia/commons/b/b2/Hausziege_04.jpg' },
        // Add more images and animals as needed
    ];

    let currentQuestionIndex = 0;
    let correctAnswer = optionsList[currentQuestionIndex].animal;
    let score = 0;

    const card = document.getElementById('card');
    const front = document.getElementById('front');
    const back = document.getElementById('back');
    const resultText = document.getElementById('result-text');
    const optionButtons = document.querySelectorAll('.option-btn');
    const animalImage = document.getElementById('animalImage');
    const nextBtn = document.getElementById('nextBtn');

    function flipCard() {
        card.classList.toggle('flipped');
    }

    function loadNextQuestion() {
        currentQuestionIndex++;
        if (currentQuestionIndex < optionsList.length) {
            correctAnswer = optionsList[currentQuestionIndex].animal;
            resultText.textContent = '';
            animalImage.src = optionsList[currentQuestionIndex].image;
            flipCard();
        } else {
            displayScore();
        }
    }

    function checkAnswer(selectedOption) {
        if (selectedOption === correctAnswer) {
            resultText.textContent = 'Correct!';
            score++;
        } else {
            resultText.textContent = 'Incorrect. The correct answer is: ' + correctAnswer;
        }

        flipCard();
    }

    function displayScore() {
        resultText.textContent = 'Quiz completed. Your score: ' + score + '/' + optionsList.length;
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

    nextBtn.addEventListener('click', function () {
        loadNextQuestion();
    });

    // Initial question load
    animalImage.src = optionsList[currentQuestionIndex].image;
});
