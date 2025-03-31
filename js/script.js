const BODY = document.querySelector("body");

const VARS = document.createElement("script");
const SETHEAD = document.createElement("script");
const HDR = document.createElement("script");
const FTR = document.createElement("script");
const TEST = document.createElement("script");

VARS.setAttribute("src", "../js/variables.js");
SETHEAD.setAttribute("src", "../js/head.js");
HDR.setAttribute("src", "../js/header.js");
FTR.setAttribute("src", "../js/footer.js");
TEST.setAttribute("src", "../js/test.js");

BODY.appendChild(VARS);
BODY.appendChild(SETHEAD);
BODY.appendChild(HDR);
BODY.appendChild(FTR);
BODY.appendChild(TEST);
