var last=''
function keep() {
    var currentHref = document.getElementById("iframe").src.split('/')[3];
    if ( currentHref == 'default.html' ) {
        if ( last != '' && last != last ) {
            document.getElementById("iframe").src=last;
        } else {
            var last = currentHref;
        }
    }
}