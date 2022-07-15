function title(x) {
    var short = [
        ['wiki','矿石镇的攻略百科'],
        ['mineraltown','矿石镇的伙伴们'],
        ['trio','三个村庄的珍贵朋友'],
        ['twotowns','双子村'],
        ['saikai','重聚矿石镇'],
        ['olive','橄榄镇与希望的大地']
    ];
    for ( i in short ) {
        if (x == short[i][0]) {
            document.getElementById("title").innerHTML = short[i][1];
        }
    }
}

function openList(id) {
    var a = document.getElementById(id+'_arrow');
    var x = document.getElementById(id+'_option');
    var y = document.getElementById(id);
    var z = x.getElementsByClassName("option").length
    if ( x.style.height != 3 * z + 'em') {
        x.style.height = 3 * z + 'em';
        a.src="/svg/arrow-down-s-fill.svg";
    } else {
        x.style.height = '0';
        a.src="/svg/arrow-right-s-fill.svg";
    }
}

function openNav() {
    document.getElementById("sidenav").style.left = "0";
    document.getElementById("glass").style.display = "block";
}

function closeNav(y) {
    document.getElementById("sidenav").style.left = "-100%";
    document.getElementById("glass").style.display = "none";
    title(y);
}

(function() {EventUtil.listenTouchDirection(document, false, false, openNav, false, closeNav);}());
