function Hello(name) {
    return "Hello " + name + "!";
}

function Send(phone, text) {
  let win = window.open("https://wa.me/"+ phone +"?text=" + encodeURIComponent(text), '_blank');
  win.focus();
}