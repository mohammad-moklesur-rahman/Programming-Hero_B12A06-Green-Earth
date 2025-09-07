// * Finding Elements
const categories = document.getElementById('categories');
const cardContainer = document.getElementById('card-container');
const showCard = document.getElementById('show-card');
const totalArea = document.querySelector('#totalArea');
const totalPrice = document.getElementById('totalPrice');
const modalInfo = document.getElementById('modalInfo');

// * Load Categories Data
const loadCategories = async () => {
  const res = await fetch('https://openapi.programming-hero.com/api/categories');
  const categoriesData = await res.json();
  showCategories(categoriesData.categories);
}

// * Show Categories Data
const showCategories = (categoriesContent) => {
  categories.innerHTML = "";
  categoriesContent.forEach(category => {
    categories.innerHTML += `
      <div>
        <h3 id="${category.id}" class="my-2 text-[16px] text-[#1F2937] hover:bg-gray-300 p-2 rounded-[7px] cursor-pointer">${category.category_name}</h3>
      </div>
    `;
  })
}

// * Load All Plants Data
const loadAllPlants = async () => {
  const res = await fetch('https://openapi.programming-hero.com/api/plants');
  const allPlants = await res.json();
  showAllPlants(allPlants.plants);
}

// * Create Function for Show Data
const showData = (data) => {
  cardContainer.innerHTML = "";
  data.forEach(plant => {
    cardContainer.innerHTML += `
              <div class="card bg-[#FFFFFF] shadow-sm p-4">
                <figure>
                  <img class="rounded-[12px] h-60 w-full"
                    src="${plant.image}"
                    alt="Shoes" />
                </figure>
                <div class="mt-3">
                  <h2 id="${plant.id}" class="card-title showModal">
                    ${plant.name}
                  </h2>
                  <p class="mt-2 text-justify">${plant.description}</p>
                </div>
                <div class="flex justify-between items-center my-3">
                  <button class="py-[6px] px-[14px] hover:bg-gray-700 hover:text-white rounded-full bg-[#DCFCE7] duration-500 text-[#15803D] cursor-pointer">${plant.category}</button>
                  <h2>৳<span>${plant.price}</span></h2>
                </div>
                <div>
                  <button id="addToCartBtn" class="py-2 mt-2 w-full hover:bg-gray-700 hover:text-white rounded-full bg-[#15803D] duration-500 text-[#FFFFFF] cursor-pointer">Add to Cart</button>
                </div>
              </div>
    `;
  })
}

// * Show All Plants 
const showAllPlants = (plants) => {
  showData(plants);
  
}

// * addEventListener for Categories
categories.addEventListener('click', (e) => {
  const categoriesDivCollection = categories.children;
  for (let categoriesDiv of categoriesDivCollection){
    categoriesDiv.children[0].classList.remove('active');
  }
  if(e.target.localName === "h3"){
    plantsByCategories(e.target.id);
    e.target.classList.add('active')
  }
})

// * Load plants by categories
const plantsByCategories = async (id) => {
  const res = await fetch(`https://openapi.programming-hero.com/api/category/${id}`);
  const plantsByCategoriesData = await res.json();
  showPlantsByCategories(plantsByCategoriesData.plants);
}

// * Show Plants by Categories
const showPlantsByCategories = (showCategoriesData) => {
  showData(showCategoriesData);
}

// * addEventListener for Show Card
cardContainer.addEventListener('click', (e) => {
  if(e.target.id === 'addToCartBtn'){
    totalArea.classList.remove('hidden');
    showCartInfo(e);
  }
  // * Show Modal
  if(e.target.classList[1] === 'showModal'){
    document.getElementById('my_modal').showModal()
    loadPlantsDetail(e.target.id);
  }
})

// * Load Plants Detail
const loadPlantsDetail = async (id) => {
  const res = await fetch(`https://openapi.programming-hero.com/api/plant/${id}`);
  const plantsDetailData = await res.json();
  showPlantsDetail(plantsDetailData.plants);
}

// * Show Plants Detail Data
const showPlantsDetail = (plantsDetail) => {
  modalInfo.innerHTML = "";
  modalInfo.innerHTML += `
              <div>
                <h2 class="card-title showModal">
                  ${plantsDetail.name}
                </h2>
                <figure class="my-3">
                  <img class="rounded-[12px] h-60 w-full"
                    src="${plantsDetail.image}"
                    alt="Shoes" />
                </figure>
                <p><span class="text-[18px] font-semibold">Category:</span> ${plantsDetail.category}</p>
                <h2 class="my-[5px]"><span class="text-[18px] font-semibold">Price:</span> ৳${plantsDetail.price}</h2>
                <p class="text-justify"><span class="text-[18px] font-semibold">Description:</span> ${plantsDetail.description}</p>
              </div>
  `;
}

// * Show Card Info
const showCartInfo = (e) => {
  const title = e.target.parentNode.parentNode.children[1].children[0].innerText;
  const price = e.target.parentNode.parentNode.children[2].children[1].children[0].innerText;
  showCard.innerHTML += `
          <div class="bg-[#F0FDF4] rounded-[12px] flex justify-between items-center p-4 my-2">
            <div>
              <h2 class="text-[14px] font-semibold text-[#1F2937]">${title}</h2>
              <p class="text-[16px] text-[#8C8C8C] mt-2">৳<span>${price}</span> x 1</p>
            </div>
            <div id="itemDelete" class="text-red-600 text-[18px] cursor-pointer">
              x
            </div>
          </div>
  `;
  // * Count Price
  totalPrice.innerText = Number(totalPrice.innerText) + Number(price);
}

// * addEventListener for Show Card item delete
showCard.addEventListener('click', (e) => {
  if(e.target.id === 'itemDelete'){
    e.target.parentNode.remove();
    const itemPrice =e.target.parentNode.children[0].children[1].children[0].innerText;
    totalPrice.innerText = Number(totalPrice.innerText) - Number(itemPrice);
  }
})

loadAllPlants();
loadCategories();