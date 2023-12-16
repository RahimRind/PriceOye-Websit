let checkout = document.querySelector('#checkout');
let div = document.querySelector('.render-phones');
let data;

axios.get("https://fakestoreapi.com/products")
  .then((res) => {
    data = res.data;
    for (let i = 0; i < res.data.length; i++) {
      div.innerHTML +=
        `<div class="product-container">
            <div class="product-card" >
                <div class="product-img w-100px d-flex">
                    <img src="${res.data[i].image}"/>
                </div>
                <div class="details">
                    <h4> ${res.data[i].title}</h4>
                    <div class="price-rating">
                        <span>Price: $${res.data[i].price}</span>
                    </div>
                    <div class="buttons">
                    <button class="cartbtn" onclick="addToCart(${i})">Add To Cart</button>
                    </div>
                </div>
            </div>
        </div>`;
    }
  })
  .catch((err) => {
    console.log(err);
  });
  

  let Data = JSON.parse(localStorage.getItem('items'));

  let arr;
  if(Array.isArray(data)){
    arr = [...data]
  
  }else{
    arr = []
  }
  
  
    
  function addToCart(i){
    arr.push(data[i]);
    arr[i].quantity = 1
// console.log(arr);

Swal.fire({
  position: 'top-end',
  icon: 'success',
  title: 'Item added to cart successfully',
  showConfirmButton: false,
  timer: 1500
})
}

checkout.addEventListener('click', () => {
    localStorage.setItem('items', JSON.stringify(arr));
    window.location = "checkout.html"
})





// function logProductInfo(index) {
//     console.log(phones[index]);
    
// }




// const div4 = document.querySelector('.render-phones1');

// Render product cards
// for (let i = 0; i < phones.length; i++) {
//     div4.innerHTML += `
//     <div class="product-card" onclick="logProductInfo(${i})">
//         <div class="product-img">
//             <img src="https://images.priceoye.pk/apple-iphone-15-pro-max-pakistan-priceoye-l58e8-270x270.webp" alt="" />
//         </div>
//         <div class="details">
//             <h4>${phones[i].name} ${phones[i].model}</h4>
//             <div class="price-rating">
//                 <span>$${phones[i].price.toFixed(2)}</span>
//                 <!-- Add your rating logic here -->
//             </div>
//             <div class="buttons">
//                 <button class="cartbtn">Add To Cart</button>
//                 <button class="buybtn">Buy Now</button>
//             </div>
//         </div>
//     </div>
//     `;
// }

// function logProductInfo(index) {
//     console.log(phones[index]);
    
// }
 





// const div3 = document.querySelector('.render-phones3');

// for (let i = 0; i < phones.length; i++) {
//     div3.innerHTML += `
//     <div class="product-card" onclick="logProductInfo(${i})">
//         <div class="product-img">
//             <img src="https://images.priceoye.pk/a6s-wireless-bluetooth-earbuds-pakistan-priceoye-xl3av-270x270.webp" alt="" />
//         </div>
//         <div class="details">
//             <h4>${phones[i].name} ${phones[i].model}</h4>
//             <div class="price-rating">
//                 <span>$${phones[i].price.toFixed(2)}</span>
//                 <!-- Add your rating logic here -->
//             </div>
//             <div class="buttons">
//                 <button class="cartbtn">Add To Cart</button>
//                 <button class="buybtn">Buy Now</button>
//             </div>
//         </div>
//     </div>
//     `;
// }

// function logProductInfo(index) {
//     console.log(phones[index]);
    
// }

