let app = angular.module('Questionnaire', []);

app.controller('QuestionController', function ($scope) {

    let testArray = [
        {
            question: "What does the Latin phrase 'filioque' mean?",
            answer: "And the Son",
            points: 400,
        },

        {
            question: "What country was the poet Czeslaw Milosz originally from?",
            answer: "Poland",
            points: 300,
        },

        {
            question: "Who is, without a doubt, the most hated character in the Star Wars saga?",
            answer: "Jar Jar Binks",
            points: 200,
        },

        {
            question: "Which author of a famous dystopian novel died on the same day as both President John F. Kennedy and author C.S. Lewis?",
            answer: "Aldous Huxley",
            points: 100,
        },
    ];

    let current = 0;
    $scope.question = testArray[current].question;

    $scope.guessHistory = [];


    $scope.nextQuestion = function () {
        if ($scope.guess === testArray[current].answer) {
            $scope.score = $scope.score + testArray[current].points;
            $scope.guessHistory.push(
                {
                    theGuess: $scope.guess,
                    correct: true,
                    });
        } else {
            $scope.score = $scope.score - testArray[current].points;
            $scope.guessHistory.push(
                {
                    theGuess: $scope.guess,
                    correct: false,
                    });
        }

        $scope.guess = "";

        if (current < testArray.length - 1) {
            current++
            $scope.question = testArray[current].question;
        } else {
            current = 0;
            $scope.question = testArray[current].question;
        }

        if ($scope.score < 0) {
            console.log("How don't you know these??");
        }
    }

    $scope.guess = "";
    $scope.score = 0;

});



