function toggleMenu() {
    document.getElementById('navigation').classList.toggle('hide');
}

let memo = date.getDay();

if (memo == 1 || memo == 2) {
    let banner = document.getElementById("pancakemessage");
    banner.style.display = "block";
    banner.innerText = "🤝🏼 Come join us for the chamber meet and greet Wednesday at 7:00 p.m.";
}