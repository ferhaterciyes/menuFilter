import menu from "./db.js";

//html elemanlarını alma
const menuContainer = document.querySelector("#menu-container");
//sayfa yüklendiği anda elemanları gösteren fonsiyonu çalıştır
document.addEventListener("DOMContentLoaded", () => {
  displayMenuItems(menu);
});

function displayMenuItems(menuItems) {
  console.log(menuItems);
  let displayMenu = menuItems.map(
    (item) => `
  <div id='card' class="d-flex gap-3 flex-column flex-md-row align-items-center">
    <img src="${item.img}" alt="" class="img-fluid shadow rounded"/>
    <div>
      <div class="d-flex justify-content-between my-2">
        <h5>${item.title}</h5>
        <p>$ ${item.price}</p>
      </div>
      <p class="lead">
       ${item.desc}
      </p>
    </div>
  </div>

  `,
  );

  // aralardaki virgülü silme
  displayMenu = displayMenu.join("");
  // oluşturdumuz divleri html e gönderdik
  menuContainer.innerHTML = displayMenu;
}

//filtreleme kısmı
const filterBtns = document.querySelectorAll(".filter-btn");
//dizideki her bir elemanın tıklanma olayını izleme
filterBtns.forEach((btn) => {
  // butonların tıkanma olayını izleme
  btn.addEventListener("click", searchCategory);
});
function searchCategory(e) {
  //tıklanılan butona kategory değerini alma
  const category = e.target.dataset.id;
  //elemanları kategori değerine göre filtreleme
 const filtredItem = menu.filter((menuItem) => {
    if (menuItem.category === category) return menuItem;
  });
  //hepsi seçildiyse tamannı göster değilse filtrelenmiş diziyi
  if(category==='all'){
    displayMenuItems(menu);
  }else{
    displayMenuItems(filtredItem);
  }
}
