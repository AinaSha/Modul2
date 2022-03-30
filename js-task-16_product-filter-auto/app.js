const products = [
   {
     "id": 1,
     "title": "Ноутбук Sony Vaio VPC-YB2L1R AMD Fusion E-350",
     "category": "ноутбуки",
     "price": 19950,
     "img": "https://www.kivano.kg/images/product/68352/full/1622355077_67139000.png",
     "desc": "Процессор: E-350 Частота процессора: 1600 МГц Объем жесткого диска: 320 ГБ Диагональ экрана: 11.6, Видеокарта: ATI Radeon HD 6310M Вес: 1.46 кг Оптический привод: DVD нет Bluetooth: есть Wi-Fi: есть"
   },
   {
     "id": 2,
     "title": "Телевизор LG 43UP78006",
     "category": "телевизоры",
     "price": 69000,
     "img": "https://www.kivano.kg/images/product/98857/full/1633341734_37962600.jpg",
     "desc": "Телевизор 4K Ultra HD; диагональ экрана 43; разрешение 3840 х 2160; Smart TV; поддержка Wi-Fi есть; частота развертки 60 Гц; поддержка DVB-T2 есть"
   },
   {
     "id": 3,
     "title": "Xiaomi Mi 11 Lite",
     "category": "смартфоны",
     "price": 28700,
     "img": "https://www.kivano.kg/images/product/92416/full/1635945551_75038600.jpg",
     "desc": "экран: 6.55 (2400x1080) 90 Гц, оперативная память: 8 ГБ, память: 128 ГБ, слот для карты памяти, 3 камеры: 64 МП, 8 МП, 5 МП, аккумулятор: 4250 мА·ч, процессор: Qualcomm Snapdragon 780G, SIM-карты: 2 (nano SIM), операционная система: Android 11, беспроводные интерфейсы: NFC, Wi-Fi, Bluetooth 5.1, интернет: 5G, 4G LTE, вес: 159 г"
   },
   {
     "id": 4,
     "title": "Vivo V23 8/128GB",
     "category": "смартфоны",
     "price": 38700,
     "img": "https://www.kivano.kg/images/product/104546/full/1647838286_37356600.jpg",
     "desc": "экран: 6.55 (2400x1080) 90 Гц, оперативная память: 8 ГБ, память: 128 ГБ, слот для карты памяти, 3 камеры: 64 МП, 8 МП, 5 МП, аккумулятор: 4250 мА·ч, процессор: Qualcomm Snapdragon 780G, SIM-карты: 2 (nano SIM), операционная система: Android 11, беспроводные интерфейсы: NFC, Wi-Fi, Bluetooth 5.1, интернет: 5G, 4G LTE, вес: 159 г"
   },
   {
     "id": 5,
     "title": "Ноутбук Sony Vaio VPC-YB2L1R AMD Fusion E-350",
     "category": "ноутбуки",
     "price": 28700,
     "img": "https://www.kivano.kg/images/product/104704/full/1648051010_75742300.jpg",
     "desc": "Процессор: E-350 Частота процессора: 1600 МГц Объем жесткого диска: 320 ГБ Диагональ экрана: 11.6, Видеокарта: ATI Radeon HD 6310M Вес: 1.46 кг Оптический привод: DVD нет Bluetooth: есть Wi-Fi: есть"
   },
   {
     "id": 6,
     "title": "Телевизор Sony KD-55X81JR",
     "category": "телевизоры",
     "price": 65000,
     "img": "https://www.kivano.kg/images/product/104675/full/1648006859_54187200.png",
     "desc": "Тип телевизор; Диагональ 50; Разрешение HD 4K UHD; Разрешение 3840x2160; Форматы HDR HDR10, Dolby Vision; Тип ЖК; Формат телевизора 16:9; Тип подсветки Direct LED; Тип матрицы экрана VA"
   },
   {
     "id": 7,
     "title": "Samsung Galaxy A52 (2021) 8/128GB (SM-A525F/DS)",
     "category": "смартфоны",
     "price": 38700,
     "img": "https://www.kivano.kg/images/product/91866/full/1620066939_92095500.jpg",
     "desc": "экран: 6.55 (2400x1080) 90 Гц, оперативная память: 8 ГБ, память: 128 ГБ, слот для карты памяти, 3 камеры: 64 МП, 8 МП, 5 МП, аккумулятор: 4250 мА·ч, процессор: Qualcomm Snapdragon 780G, SIM-карты: 2 (nano SIM), операционная система: Android 11, беспроводные интерфейсы: NFC, Wi-Fi, Bluetooth 5.1, интернет: 5G, 4G LTE, вес: 159 г"
   },
   {
     "id": 8,
     "title": "Ноутбук Sony Vaio VPC-YB2L1R AMD Fusion E-350",
     "category": "ноутбуки",
     "price": 28700,
     "img": "https://www.kivano.kg/images/product/104704/full/1648051010_75742300.jpg",
     "desc": "Процессор: E-350 Частота процессора: 1600 МГц Объем жесткого диска: 320 ГБ Диагональ экрана: 11.6, Видеокарта: ATI Radeon HD 6310M Вес: 1.46 кг Оптический привод: DVD нет Bluetooth: есть Wi-Fi: есть"
   },
   {
     "id": 9,
     "title": "Телевизор Samsung QE43Q60AAUXCE",
     "category": "телевизоры",
     "price": 65000,
     "img": "https://www.kivano.kg/images/product/103723/full/1645780340_27021700.png",
     "desc": "Тип телевизор; Диагональ экрана 43″ - 109,2 см; Разрешение 3840x2160 (4K UHD); Технология QLED; Smart TV Да; Операционная система Tizen; Поддержка HDR Да; Соотношение сторон 16:9; Тип экрана Прямой; Тип подсветки QLED"
   }
   
 ]


 window.addEventListener("load", function() {
   const productsInner = document.querySelector(".products-inner");
   const filtersContainer = document.querySelector(".products-filters");
 

   displayProductsItems(products);  //напишем функцию которая будет вызываться для показа продукт элементов
   displayFiltersBtn();


   function displayProductsItems(products) {
     let displayProducts = products.map(function(item) {
       return `
       <article class="products__item">
           <img src="${item.img}">
          <div class="products__item-info">
            <h3>${item.title}</h3>
            <span>${item.price}</span>
            <p><h3>${item.desc}</h3></p>
          </div>
       </article>
       `;
     });

     displayProducts = displayProducts.join("");
     productsInner.innerHTML = displayProducts;
   }


   function displayFiltersBtn() {
     const categories = products.reduce(function(values, item){
       if(!values.includes(item.category)){
         values.push(item.category)
       }
       return values;
     },
     ["all"])
  

   const categoryBtns = categories.map((cat) => {
     return `
       <button class="products__filters-btn" data-cat="${cat}">${cat}</button>
     `
   }).join("");

   filtersContainer.innerHTML =categoryBtns;
   const filterBtns = document.querySelectorAll(".products__filters-btn");

   filterBtns.forEach((btn) => {
     btn.addEventListener("click", (e)=> {
       const category =e.currentTarget.dataset.cat;
       const productCategory = products.filter((item)=> {
         if(item.category === category) {
           return item;
         }
       });

       if(category === "all"){
         displayProductsItems(products);
       }else {
         displayProductsItems(productCategory);
       }
     });
   });
  }
 });