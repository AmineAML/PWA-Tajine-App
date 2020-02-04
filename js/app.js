 const container = document.querySelector(".container")
 const tawajin = [
    { name: "طاجين خروف ، خوخ ، لوز", image:"images/Tawajin/Kharouf_khoukh_louz.jpg" },
    { name: "طاحين خروف مع البرقوق والبيض", image:"images/Tawajin/Kharouf_bar9ou9_bayd.jpg" },
    { name: "طاجين بالزيتون والخضروات", image:"images/Tawajin/Zitoun_khadraouat.jpg" },
    { name: "طاجين باللوز", image:"images/Tawajin/Louz.jpg" },
    { name: "طاجين مع الجزر", image:"images/Tawajin/Khizou.jpg" },
    { name: "طاجين لحم الغنم والمانجو", image:"images/Tawajin/Kharouf_mangue.jpg" },
    { name: "طاجين دجاج", image:"images/Tawajin/Djaj.jpg" },
    { name: "طاجين السلاوى", image:"images/Tawajin/Slaoui.jpg" },
    { name: "طاجين اللحم بالبطاطا المقليه", image:"images/Tawajin/Lham_frit.jpg" },
    { name: "طاجين بالدجاج والزيتون", image:"images/Tawajin/Djaj_zitoun.jpg" },
    { name: "طاجين السردين بالزيتون الاحمر", image:"images/Tawajin/Sardin_ZitounHmer.jpg" },
    { name: "طاجين الدجاج بالجلبانه والبطاطا", image:"images/Tawajin/Djaj_Jalbana_Btata.jpg" },
    { name: "طاجين سمك", image:"images/Tawajin/Samak.jpg" },
    { name: "طاجين اللحم بالبسباس والجلبانه", image:"images/Tawajin/Lahm_Basbas_Jalbana.jpg" },
    { name: "طاجين اللحم بالشفلور والجزر", image:"images/Tawajin/Lahm_Chaflour_Jazar.jpg" },
    { name: "طاجين الطون (سمك التونه)", image:"images/Tawajin/Samak_touna.jpg" },
    { name: "طاجين الجلبانه واللوبيا والقوق", image:"images/Tawajin/Jalbana_loubiya_9o9.jpg" },
    { name: "طاجين اللحم بالبرقوق والزبيب واللوز", image:"images/Tawajin/Lahm_bar9ou9_zbib_louz.jpg" },
    { name: "طاجين كويرات السردين (كفتة السردين)", image:"images/Tawajin/Kouirat_sardin.jpg" },
    { name: "طاجين اللحم بالخرشوف", image:"images/Tawajin/Lahm_kharchouf.jpg" },
    { name: "طاجين قطبان اللحم بالزيتون", image:"images/Tawajin/9atbanLahm_zitoun.jpg" },
    { name: "طاجين الخليع", image:"images/Tawajin/Khli3.jpg" },
    { name: "طاجين الفواكه الجافة والتمر", image:"images/Tawajin/FawakihJafa_tamr.jpg" },
    { name: "طاجين المروزية", image:"images/Tawajin/Marouziya.jpg" },
];

const showTawajin = () => {
    let output = "";
    tawajin.forEach(
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

document.addEventListener("DOMContentLoaded", showTawajin)

if ("serviceWorker" in navigator) {
    window.addEventListener("load", function() {
      navigator.serviceWorker
        .register("/serviceWorker.js")
        .then(res => console.log("service worker registered"))
        .catch(err => console.log("service worker not registered", err))
    })
  }