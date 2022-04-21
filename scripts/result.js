"use strict";



// var confetti  = require("./confetti-falling-animation/confetti")
function mistakes(elem) {
    var results = JSON.parse(localStorage.quizResult)
    console.log("results", results)
    for (var i = 0; i < results.length; i++) {
        if (!results[i].result) {
            elem.innerHTML += ("<div class='suggestion'> <span>question " + (i + 1) + ": " + results[i].err_msg + "</span></div>")

        } else {
            elem.innerHTML += ("<div class='suggestion correct'> <span>question " + (i + 1) + " is correct</span></div>")

        }
    }
}

function displayInfo() {
    var s_info = JSON.parse(localStorage.student_info);
    var elem = document.getElementById("card-foot")
    elem.innerHTML += "<span>" + "attempts" + localStorage.getItem(s_info.sid) + "/2</span>";
    if (localStorage.getItem(s_info.sid) < 2) {
        elem.innerHTML += "<a href='./quiz.html'>" + "dsfsdfsdf" + "</a>";

    }
    elem.innerHTML += "<span>" + s_info.fname + " " + s_info.lname + "</span>";
    elem.innerHTML += "<span>" + s_info.sid + "</span>";


}

function init() {
    var score = localStorage.score
    var score_element = document.getElementById("score")
    score_element.innerHTML = score + "/5"
    var suggestions = document.getElementById("improvement")
    mistakes(suggestions)
    displayInfo()
        // startConfetti()

}

window.onload = init;