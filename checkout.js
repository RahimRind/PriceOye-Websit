function goToHome() {
    window.location = "priceOye.html";
    localStorage.setItem('items' , JSON.stringify(getData));
}




// let checkedPoducts = document.querySelector("#checkedPoducts");

// // Retrieve items from local storage
// let phones = localStorage.getItem('items');

// // Check if there are items in local storage
// let strObj = phones ? JSON.parse(phones) : [];

// console.log(strObj);

// // Function to render the products based on the current state in local storage
// function renderProducts() {
//   checkedPoducts.innerHTML = ""; // Clear the existing content

//   for (let i = 0; i < strObj.length; i++) {
//     const product = strObj[i];

//     let quantity1 = product.quantity;
//     checkedPoducts.innerHTML += `
//       <div class="checkoutedCart">

//         <img class="renderedImage" src="${product.image}" alt="${product.title}" style="max-width: 100px; max-height: 100px;">
//         <p class="text">
//           Model: ${product.title},<br>
//           Quantity: ${product.quantity},<br>
//           Price: $${product.price.toFixed(2)}
//           <button onclick="incrementQuantity(${i})">+</button>
//           <button onclick="decrementQuantity(${i})">-</button>
//           <button onclick="deleteCart(${i})">Delete</button>
//         </p>
//       </div>
//     `;
//   }
// }

// // Function to increment the quantity and update the price
// function incrementQuantity(i) {
//   strObj[i].quantity++;
//   strObj[i].price = strObj[i].price + strObj[i].price; // Double the price

//   // Update the local storage with the modified array
//   localStorage.setItem('items', JSON.stringify(strObj));

//   // Update the displayed products by re-rendering the list
//   renderProducts();
// }

// // Function to decrement the quantity and update the price
// function decrementQuantity(i) {
//   if (strObj[i].quantity > 1) {
//     strObj[i].quantity--;
//     strObj[i].price = strObj[i].price - strObj[i].price; // Halve the price

//     // Update the local storage with the modified array
//     localStorage.setItem('items', JSON.stringify(strObj));

//     // Update the displayed products by re-rendering the list
//     renderProducts();
//   }
// }

// // Function to delete a product
// function deleteCart(i) {
//   // Remove the product from the array
//   strObj.splice(i, 1);

//   // Update the local storage with the modified array
//   localStorage.setItem('items', JSON.stringify(strObj));

//   // Update the displayed products by re-rendering the list
//   renderProducts();
// }

// // Initial rendering when the page loads
// renderProducts();







let getData = JSON.parse(localStorage.getItem('items'));
console.log(getData);


let div = document.querySelector('.render-phones');
const totalAmounts = document.querySelector('.total-amount');


function render() {
    let totalAmount = 0;
    totalAmounts.innerHTML =''
   
    if (getData.length > 0) {
        div.innerHTML = "";
    
        for (var i = 0; i < getData.length; i++) {
            totalAmount += getData[i].price * getData[i].quantity ;
    
            div.innerHTML +=
                `<div class="product-container">
        <div class="product-card">
            <div class="product-img w-100 d-flex">
                <img src="${getData[i].image}"/>
            </div>
            <div class="details">
                <h4> ${getData[i].title}</h4>
                <div class="price-rating">
                <span>Prive: $${getData[i].price}</span>
                </div>
                
                <p><span class="font-bold text-lg">Quantity:</span> ${getData[i].quantity}</p>
                <p><span class="font-bold text-lg">Total Price:</span>$ ${getData[i].price * getData[i].quantity}</p>
                <button class="cartbtn" onclick="increase(${i})">+</button>
                <span>$ ${getData[i].quantity}</span>
                <button class="cartbtn" onclick="decrease(${i})">-</button> <br/>
                

                <div class="buttons">
                <button class="cartbtn" onclick="deleteCart(${i})">Delete Cart</button>

                </div>
            </div>
        </div>
    </div>`;
    totalAmounts.innerHTML = `Total Amount ${totalAmount}`
        }
    } else {
        div.innerHTML = `<h1><strong>Empty Carts</strong></h1>`
    }
}
render();



function increase (index){
    div.innerHTML = ''
    
    getData[index].quantity += 1
    render()
}
function decrease (index){
    div.innerHTML = ''
    
    getData[index].quantity -= 1
    render()
    if(getData[index].quantity === 0){
        div.innerHTML = ''
        getData.splice(index , 1)
        render()
    }
}


function deleteCart(i) {

    div.innerHTML = '';
    getData.splice(i, 1);
    render();
    localStorage.setItem('items', JSON.stringify(getData));

    const swalWithBootstrapButtons = Swal.mixin({
        customClass: {
            confirmButton: "btn btn-success",
            cancelButton: "btn btn-danger"
        },
        buttonsStyling: false
    });
    swalWithBootstrapButtons.fire({
        title: "Are you sure?",
        text: "You want to delete Your Cart?",
        icon: "warning",
        
        confirmButtonText: "Yes, delete it!",
        
    }).then((result) => {
        if (result.isConfirmed) {
            swalWithBootstrapButtons.fire({
                title: "Deleted!",
                text: "Item Successfully Deleted from Your Cart",
                icon: "success"
            });
        } else if (
            result.dismiss === Swal.DismissReason.cancel
            
        ) {
            swalWithBootstrapButtons.fire({
                
            });
        }
    });


}






//relaod page problem
window.onbeforeunload  = function() {
    localStorage.setItem('items' , JSON.stringify(getData));
};



