// Добавить в Избранное
function bookmark2(a) {
title=document.title;
url=document.location;
try {
// Internet Explorer
window.external.AddFavorite(url, title);
}
catch (e) {
try {
// Mozilla
window.sidebar.addPanel(title, url, "");
}
catch (e) {
// Opera
if (typeof(opera)=="object") {
a.rel="sidebar";
a.title=title;
a.url=url;
return true;
}
else {
alert('Ваш браузер не поддерживает автоматическое добавление закладок. Нажмите Ctrl+D чтобы добавить страницу в закладки.');
}
}
}
return false;
}