function animation() {
    var $ = {
        radius  :     250,
        speed   :     20
    }
    var elem = document.querySelector('.css');
    var f = 0;
    var s = 2 * Math.PI / 180;
    setInterval(function() {
        f += s;
        elem.style.left =  235 + $.radius * Math.sin(f)  + 'px';
        elem.style.top =   235 + $.radius * Math.cos(f) + 'px';
    }, $.speed)
    setTimeout(function (){
        clearInterval(interval);
    },5000)
}
