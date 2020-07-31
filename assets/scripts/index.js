// scripts here:

function submitQuiz() {
    console.log('submitted');

// get each answer score
    function answerScore (qName) {
        var radiosNo = document.getElementsByName(qName);

        for (var i = 0, length = radiosNo.length; i < length; i++) {
               if (radiosNo[i].checked) {
        // do something with radiosNo
                var answerValue = Number(radiosNo[i].value);
            }
        }
        // change NaNs to zero
        if (isNaN(answerValue)) {
            answerValue = 0;
        }
        return answerValue;
    }

// calc score with answerScore function
    var calcScore = (answerScore('q1') + answerScore('q2') + answerScore('q3') + answerScore('q4') + answerScore('q5') + answerScore('q6')+ answerScore('q7')+ answerScore('q8')+ answerScore('q9')+ answerScore('q10'));
    console.log("CalcScore: " + calcScore); // it works!

// function to return correct answer string
    function correctAnswer (correctStringNo, qNumber) {
        console.log("qNumber: " + qNumber);  // logs 1,2,3,4 after called below
        return ("The correct answer for question #" + qNumber + ": &nbsp;<strong>" +
            (document.getElementById(correctStringNo).innerHTML) + "</strong>");
        }

// print correct answers only if wrong (calls correctAnswer function)
    if (answerScore('q1') === 0) {
        document.getElementById('correctAnswer1').innerHTML = correctAnswer('correctString1', 1);
    }
    if (answerScore('q2') === 0) {
        document.getElementById('correctAnswer2').innerHTML = correctAnswer('correctString2', 2);
    }
    if (answerScore('q3') === 0) {
        document.getElementById('correctAnswer3').innerHTML = correctAnswer('correctString3', 3);
    }
    if (answerScore('q4') === 0) {
        document.getElementById('correctAnswer4').innerHTML = correctAnswer('correctString4', 4);
    }
    if (answerScore('q5') === 0) {
        document.getElementById('correctAnswer4').innerHTML = correctAnswer('correctString5', 5);
    }
    if (answerScore('q6') === 0) {
        document.getElementById('correctAnswer4').innerHTML = correctAnswer('correctString6', 6);
    }
    if (answerScore('q7') === 0) {
        document.getElementById('correctAnswer4').innerHTML = correctAnswer('correctString7', 7);
    }
    if (answerScore('q8') === 0) {
        document.getElementById('correctAnswer4').innerHTML = correctAnswer('correctString8', 8);
    }
    if (answerScore('q9') === 0) {
        document.getElementById('correctAnswer4').innerHTML = correctAnswer('correctString9', 9);
    }
    if (answerScore('q10') === 0) {
        document.getElementById('correctAnswer4').innerHTML = correctAnswer('correctString10', 10);
    }

// calculate "possible score" integer
    var questionCountArray = document.getElementsByClassName('question');

    var questionCounter = 0;
    for (var i = 0, length = questionCountArray.length; i < length; i++) {
        questionCounter++;
    }

// show score as "score/possible score"
    var showScore = "Skor kamu: " + calcScore +"/" + questionCounter;
// if 4/4, "perfect score!"
    if (calcScore >= 9) {
        showScore = showScore + "&nbsp; <strong>Kamu bisa wakilin sekolah buat olimpiade nih!</strong>"
    };
    if (calcScore < 9 && calcScore >= 7) {
        showScore = showScore + "&nbsp; <strong>Bagus, tapi kamu masih kalah sama Nandan</strong>"
    };
    if (calcScore < 7 && calcScore >= 5) {
        showScore = showScore + "&nbsp; <strong>Kamu harus belajar lebih keras lagi</strong>"
    };
    if (calcScore < 5) {
        showScore = showScore + "&nbsp; <strong>Terlalu banyak ngurus geng motor nih</strong>"
    };
    document.getElementById('userScore').innerHTML = showScore;
}

$(document).ready(function() {

$('#submitButton').click(function() {
    $(this).addClass('hide');
});

});

function getName() {
    return localStorage.getItem("userName");
}

function updateHTML() {
    var name = getName();
    // document.getElementById("greeting").innerHTML = "Hello, " + name + "! Welcome!";
    document.getElementById("name").value = name;
}

function myFunction() {
    // Gets input value
    var name = document.getElementById("loginname").value;

    // Saves data to retrieve later
    localStorage.setItem("userName", name);

    // Updates HTML
    updateHTML();
}