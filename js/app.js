 const container = document.querySelector(".container")
 const coffees = [
    { name: "أتاي بالنعناع", image:"images/AtayNa3na3.jpg" },
    { name: "أتاي بالزعتر", image:"images/AtayZa3tar.jpg" },
    { name: "أتاي بفليو", image:"images/AtayFliyou.jpg" },
    { name: "أتاي بالشيبة", image:"images/AtayShiba.jpg" },
];

const showCoffees = () => {
    let output = "";
    coffees.forEach(
        ({ name, image }) =>
            (output += ` 
                <div class="card">
                    <img class="card--avatar" src=${image} />
                    <h1 class="card--title">${name}</h1>
                    <a class="card--link" href="#">كيفية التحضير</a>
                </div> 
            `)
    );
    container.innerHTML = output;
};

document.addEventListener("DOMContentLoaded", showCoffees)

if ("serviceWorker" in navigator) {
    window.addEventListener("load", function() {
      navigator.serviceWorker
        .register("/serviceWorker.js")
        .then(res => console.log("service worker registered"))
        .catch(err => console.log("service worker not registered", err))
    })
  }