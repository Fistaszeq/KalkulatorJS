let rownanie = "";
let wynik = 0;
let output = document.getElementById("output");

function klik(x) {
    if (x == "=") {
        wynik = eval(rownanie);
        output.innerHTML = wynik;
        rownanie = wynik;
        return;
    }
    rownanie += x;
    output.innerHTML = rownanie;
    if (rownanie.includes("2137")) {
       document.body.style.backgroundImage = 'url("https://external-content.duckduckgo.com/iu/?u=https%3A%2F%2Fi.ytimg.com%2Fvi%2FHFr3YwubSJU%2Fhq2.jpg&f=1&nofb=1&ipt=cfb8c223808c10777f2e75cfaae485d466e49a932bbcb766dd1332389de24f31&ipo=images")';
    }
    if (x == "C") {
        rownanie = "";
        output.innerHTML = "";
    }
}