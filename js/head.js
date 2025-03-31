lang = "zxx";

HTML.setAttribute("lang", lang);
CHARSET.setAttribute("charset", "utf-8");
VIEWPORT.setAttribute("name", "viewport");
VIEWPORT.setAttribute("content", "width=device-width, initial-scale=1.0");

RESET.setAttribute("rel", "stylesheet");
RESET.setAttribute("href", "../css/reset.css");
STYLE.setAttribute("rel", "stylesheet");
STYLE.setAttribute("href", "../css/style.css");
FAVICON.setAttribute("rel", "icon");
FAVICON.setAttribute("type", "image/x-icon");
FAVICON.setAttribute("href", "../img/technical/favicon.ico");
TABTITLE.innerHTML = PAGENAME;

HEAD.appendChild(CHARSET);
HEAD.appendChild(VIEWPORT);
HEAD.appendChild(RESET);
HEAD.appendChild(STYLE);
HEAD.appendChild(FAVICON);
HEAD.appendChild(TABTITLE);