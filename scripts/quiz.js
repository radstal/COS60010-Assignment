"use strict";

function checkInfo() {
    var result = true;
    var err_msg = ""
    var id_regrexpair = {
        "fname": { "regex": RegExp("^[a-z\sA-z-]{0,30}$"), "msg": "firstname must be alpha 1 - 30 character" },
        "lname": { "regex": RegExp("^[a-z\sA-z-]{0,30}$"), "msg": "lastname must be alpha 1 - 30 character" },
        "sid": { "regex": RegExp("^[0-9]{7}$"), "msg": "student id must be numeric 7 or 10 char" }
    }
    const keys = Object.keys(id_regrexpair)
    console.log("keys", keys)
    for (var i = 0; i < keys.length; i++) {

        console.log(id_regrexpair[keys[i]]["regex"].test(
            document.getElementById(keys[i]).value
        ))
        if (!(id_regrexpair[keys[i]]["regex"].test(
                document.getElementById(keys[i]).value
            ))) {
            err_msg += (id_regrexpair[keys[i]]["msg"] + "\n")
            result = false;
        }
    }

    var ret = {
        "result": result,
        "err_msg": err_msg,
        "value": {
            "fname": document.getElementById("fname").value,
            "lname": document.getElementById("lname").value,
            "sid": document.getElementById("sid").value,

        }
    }
    console.log("ret info", ret)
    return ret;


}

function q2_check() {
    var result = false;
    var err_msg = ""


    var q2_ids = ["q2_a", "q2_b"];
    var q2_ans = [];
    for (var i = 0; i < q2_ids.length; i++) {
        var elem = document.getElementById(q2_ids[i])
        if (elem.checked) {
            q2_ans.push(elem.value);
        }
    }
    var ans = q2_ans[0]
    if (q2_ans.length > 1) {
        err_msg += "You are messing around arnt you?"
    } else if (q2_ans.length == 0) {
        err_msg += "please select some answer"
    } else if (ans == "HTTP") {
        err_msg += "HTTP is insecure, most of the modern browser won't allow access to HTTP website online"
    } else if (ans == "HTTPs") {
        result = true;
    } else {
        err_msg += "You are messing around arnt you?"
    }
    return {
        "result": result,
        "err_msg": err_msg
    }
}

function q3_check() {
    var result = true;
    var err_msg = "";

    var q_ids = ["q3a", "q3b", "q3c", "q3d"];
    var ans_arr = [];
    for (var i = 0; i < q_ids.length; i++) {
        var elem = document.getElementById(q_ids[i])
        if (elem.type === 'checkbox' && elem.checked) {
            ans_arr.push(elem.value);
        }
    }

    for (var i = 0; i < ans_arr.length; i++) {
        if (ans_arr[i] != "SSL" && ans_arr[i] != "TLS") {
            result = false;
            if (ans_arr[i] == "HTTP") {
                err_msg += "HTTP is a comunication method"
            } else if (ans_arr[i] == "HTTPs") {
                err_msg += "HTTPs is a comunication method"
            } else {
                err_msg += "You are messing around arnt you?"
            }
        }
    }
    return {
        "result": result,
        "err_msg": err_msg
    }
}

function q4_check() {
    var ans = document.getElementById("q4").value;
    var result = false;
    var err_msg = "";
    if (ans == "Chrome") {
        result = true;
    } else {
        err_msg += "Chrome is the browser that shows a greenpaddock and is mentioned in the Topic page"
    }

    return {
        "result": result,
        "err_msg": err_msg
    }
}


function q5_check() {

    var ans = document.getElementById("q5").value;
    console.log("ans", ans)
    var result = false;
    var err_msg = "";
    if (ans == 1996) {
        result = true
    } else(
        err_msg += "it became obsolete on the year of 1996"
    )

    return {
        "result": result,
        "err_msg": err_msg
    }
}


function validate() {
    var result = false;
    var score = 0; // one of the quiz is to describe
    // qusetion 2
    var check_ans = [
        { "result": false, "err_msg": "Go check by yourself" },
        q2_check(),
        q3_check(),
        q4_check(),
        q5_check()
    ];

    for (var i = 0; i < check_ans.length; i++) {
        console.log("result", i, check_ans[i]["result"], check_ans[i]["err_msg"])
        if (check_ans[i]["result"]) {
            score += 1
        }
    }

    if (score <= 0) {
        result = false
    } else {
        result = true
    }

    var info = checkInfo()
    console.log("info", info)
    var alert_msg = ""
    if (!info.result) {
        alert(info.err_msg)
        return false
    }
    for (var i = 0; i < check_ans.length; i++) {
        if (check_ans[i].err_msg != "") {
            alert_msg += ("question " + i + ": " + check_ans[i].err_msg + "\n")
        }
    }
    alert(alert_msg)


    console.log("score", info.value)
    var sid = info.value.sid

    if (localStorage.getItem(sid) === null) {
        localStorage.setItem(sid, 1);
    } else {
        localStorage.setItem(sid, parseInt(localStorage.getItem(sid)) + 1);
    }
    localStorage.setItem("score", score)
    localStorage.setItem("quizResult", JSON.stringify(check_ans))
    localStorage.setItem("student_info", JSON.stringify(info.value))
    return result

}





function init() {
    var quiz = document.getElementById("quiz");
    quiz.onsubmit = validate
    localStorage.setItem("score", 0)
        // alert(localStorage.score)
}

window.onload = init;