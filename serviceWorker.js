const staticPopularTajine = "Tajine-site-v1"
const assets = [
  "/",
  "/index.html",
  "/css/style.css",
  "/js/app.js",
  "images/Tawajin/Kharouf_khoukh_louz.jpg",
  "images/Tawajin/Kharouf_bar9ou9_bayd.jpg",
  "images/Tawajin/Zitoun_khadraouat.jpg",
  "images/Tawajin/Louz.jpg",
  "images/Tawajin/Khizou.jpg",
  "images/Tawajin/Kharouf_mangue.jpg",
  "images/Tawajin/Djaj.jpg",
  "images/Tawajin/Slaoui.jpg",
  "images/Tawajin/Lham_frit.jpg",
  "images/Tawajin/Djaj_zitoun.jpg",
  "images/Tawajin/Sardin_ZitounHmer.jpg",
  "images/Tawajin/Djaj_Jalbana_Btata.jpg",
  "images/Tawajin/Samak.jpg",
  "images/Tawajin/Lahm_Basbas_Jalbana.jpg",
  "images/Tawajin/Lahm_Chaflour_Jazar.jpg",
  "images/Tawajin/Samak_touna.jpg",
  "images/Tawajin/Jalbana_loubiya_9o9.jpg",
  "images/Tawajin/Lahm_bar9ou9_zbib_louz.jpg",
  "images/Tawajin/Kouirat_sardin.jpg",
  "images/Tawajin/Lahm_kharchouf.jpg",
  "images/Tawajin/9atbanLahm_zitoun.jpg",
  "images/Tawajin/Khli3.jpg",
  "images/Tawajin/FawakihJafa_tamr.jpg",
  "images/Tawajin/Marouziya.jpg",
]

self.addEventListener("install", installEvent => {
  installEvent.waitUntil(
    caches.open(staticDevCoffee).then(cache => {
      cache.addAll(assets)
    })
  )
})

self.addEventListener("fetch", fetchEvent => {
    fetchEvent.respondWith(
      caches.match(fetchEvent.request).then(res => {
        return res || fetch(fetchEvent.request)
      })
    )
  })