document.write(' \
<nav class="navbar">\
    <ul>\
        <li>\
            <a href="./index.html" id="nav-home" >Home</a>\
        </li>\
        <li>\
            <a href="./topic.html" id="nav-topic" >Topic</a>\
        </li>\
        <li>\
            <a href="./quiz.html" id="nav-quiz" >Quiz</a>\
        </li>\
        <li>\
            <a href="./enhancement.html" id="nav-enhancement" >Enhancement</a>\
        </li>\
        <li>\
            <a href="./enhancement2.html" id="nav-enhancement2" >Enhancement 2</a>\
        </li>\
    </ul>\
</nav>\
')

var active_id = ""
switch (document.getElementById("page_title").innerHTML) {
    case "home":
        active_id = "nav-home"
        break;
    case "topic":
        active_id = "nav-topic"
        break;
    case "quiz":
        active_id = "nav-quiz"
        break;
    case "enhancement":
        active_id = "nav-enhancement"
        break;
    case "enhancement2":
        active_id = "nav-enhancement2"
        break;
}

var active_nav = document.getElementById(active_id)
active_nav.classList.add("nav-active")