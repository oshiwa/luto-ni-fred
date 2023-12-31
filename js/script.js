
    
// simple dom
    let showAccount = document.querySelector('.showAccount');
    let userProfile = document.querySelector('#userProfile');
    let logoutBtn = document.querySelector('#logoutBtn');
    let deleteAccountBtn = document.querySelector('#deleteAccountBtn');
    let accountForm = document.querySelector('#accountForm');
    let showMPF = document.querySelector('.showMPF');
    let moreProductsForm = document.querySelector('.moreProductsForm');
    showMPF.addEventListener('click', () => {
        if(moreProductsForm.style.display == 'grid' && showMPF.textContent == '×'){
            moreProductsForm.style.display = 'none';
            showMPF.textContent = '+';
        }else{
            moreProductsForm.style.display = 'grid';
            showMPF.innerHTML = '×';
        }
    });
    let closeForm = document.getElementById('closeForm');
    closeForm.addEventListener('click', () => {
        document.getElementById('accountForm').style.display = 'none';
    });
    let closeAccount = document.getElementById('closeAccount');
    closeAccount.addEventListener('click', () => {
        document.getElementById('userProfile').style.display = 'none';
    });
    let myCart = document.getElementById('myCart');
    myCart.addEventListener('click', () => {
        document.querySelector('.cart-container').style.display = 'block';
    });
    let closeCart = document.getElementById('closeCart');
    closeCart.addEventListener('click', () => {
        document.querySelector('.cart-container').style.display = 'none';
    });
    let myOrderHistory = document.getElementById('myOrderHistory');
    myOrderHistory.addEventListener('click', () => {
        document.querySelector('.order-history-container').style.display = 'block';
    });
    let closeOrderHistory = document.getElementById('closeOrderHistory');
    closeOrderHistory.addEventListener('click', () => {
        document.querySelector('.order-history-container').style.display = 'none';
    });
    let showGuide = document.getElementById('showGuide');
    showGuide.addEventListener('click', () => {
        document.querySelector('.iframe-container').style.display = 'block';
    });
    let closeGuide = document.getElementById('closeGuide');
    closeGuide.addEventListener('click', () => {
        document.querySelector('.iframe-container').style.display = 'none';
    });
// simple dom end


        // Initialize Firebase
        const firebaseConfig = {
            // Your Firebase configuration
          apiKey: "AIzaSyCgQfK-pd9mmSIga3VTLTTtTOe0qFQQJJI",
    authDomain: "web-store-39522.firebaseapp.com",
    projectId: "web-store-39522",
    storageBucket: "web-store-39522.appspot.com",
    messagingSenderId: "399674132987",
    appId: "1:399674132987:web:7e589e8e56330272d6e35e",
    measurementId: "G-6BGYJHMLGF"

        };
        firebase.initializeApp(firebaseConfig);
        let cart = [];
        let auth;
        document.addEventListener('DOMContentLoaded', () => {
            /*
            const auth = firebase.auth();
            const firestore = firebase.firestore();
            */
            auth = firebase.auth();
            const firestore = firebase.firestore();
            // Check if a user is logged in
            auth.onAuthStateChanged(user => {
                if (user) {
                    const userEmail = user.email;
                    showAccount.addEventListener('click', () => {
        if (userProfile.style.display == 'grid'){
            userProfile.style.display = 'none';
        }else{
            userProfile.style.display = 'grid';
        }
    
    if (userEmail === 'adminfred@gmail.com') {
        
        document.getElementById('change').textContent = 'Customer Orders';
        document.getElementById('changeTitle').textContent = 'Customer Orders'
        document.querySelector('.change').textContent = 'Close Customer Orders'
        document.querySelector('.admin').textContent = 'Admin'
        
        let hideThis = document.querySelectorAll('.hideThis');
        
        for (let i = 0; i < hideThis.length; i++){
            hideThis[i].style.display = 'none';
        }
        
      const orderHistoryContainer = document.getElementById('orderHistoryContainer');
      orderHistoryContainer.style.display = 'grid';
      
      function renderOrderHistory(emailAddress) {
  orderItems.innerHTML = '';

  firestore
    .collection('orderHistory')
    .orderBy('timestamp', 'desc')
    .get()
    .then(querySnapshot => {
      querySnapshot.forEach(doc => {
        const orderData = doc.data(); // Retrieve the order data
        const order = orderData.order; // Get the 'order' property from the data
        const userEmail = orderData.userEmail; // Get the 'userEmail' property from the data

        // Filter out your own orders
        if (userEmail !== emailAddress) {
          console.log('Order:', order); // Log the order data to check if it's defined correctly
          console.log('User Email:', userEmail);
          console.log('Order ID:', doc.id);
          console.log('Timestamp:', new Date(orderData.timestamp).toLocaleString());

          const orderItem = document.createElement('li');
          orderItem.innerHTML = `
            <span><strong>User ID:</strong> ${userEmail} </span>
            <span><strong>Address:</strong> ${orderData.address} </span>
            <span><strong>Number:</strong> ${orderData.number}</span>
            <span><strong>Order ID:</strong> ${doc.id}</span>
            <span><strong>Date:</strong> ${new Date(orderData.timestamp).toLocaleString()}</span>
            ${order
              .map(item => `
                <div class="order-details">
                  <span><strong>Item: </strong>${item.name}</span>
                  <span><strong>Quantity: </strong> ${item.quantity} </span>
                </div>
              `)
              .join('')}
          `;

          orderItems.appendChild(orderItem);
        }
      });
    })
    .catch(error => {
      console.log(error.message);
    });
}
    } 
    else {
      //orderHistoryContainer.style.display = 'none';
      showMPF.style.display = 'none';
    }
    if (userEmail === 'adminfred@gmail.com') {
      renderOrderHistory();
    }
/*
    else {
    // User is not logged in, hide the order history container
    const orderHistoryContainer = document.getElementById('orderHistoryContainer');
    orderHistoryContainer.style.display = 'none';
  }
*/
    });
    // remove let of error
                   document.getElementById('username').textContent = user.email;
                    document.getElementById('userProfile').style.display = 'none';
                    document.getElementById('myCart').style.display = 'grid';
                    document.getElementById('myOrderHistory').style.display = 'grid';
                    document.getElementById('logoutBtn').style.display = 'grid';
                    document.getElementById('deleteAccountBtn').style.display = 'grid';
                    document.getElementById('cart').style.display = 'grid';
                    document.getElementById('orderHistoryContainer').style.display = 'grid';
                    document.getElementById('registration').style.display = 'none';
                    document.getElementById('login').style.display = 'none';
                    document.querySelector('.moreProductsForm').style.display = 'none';
                    document.querySelector('#accountForm').style.display = 'none';
                    document.querySelector('#closeForm').style.display = 'none';
                    // Load cart data from Firestore
                    loadCartData(user.uid);
                    renderMoreProducts();
                } else {
                    document.getElementById('userProfile').style.display = 'none';
                    document.querySelector('.accountSettings').style.display = 'none';
                    document.getElementById('myCart').style.display = 'none';
                    document.getElementById('myOrderHistory').style.display = 'none';
                    document.getElementById('logoutBtn').style.display = 'none';
                    document.getElementById('deleteAccountBtn').style.display = 'none';
                    document.getElementById('cart').style.display = 'none';
                    document.getElementById('orderHistoryContainer').style.display = 'none';
                    document.getElementById('registration').style.display = 'grid';
                    document.getElementById('login').style.display = 'grid';
                    showMPF.style.display = 'none';
                    renderMoreProducts();
                    
    let accountBtn = document.querySelector('.showAccount');
    let accountForm = document.querySelector('#accountForm');
    accountBtn.addEventListener('click', () => {
        if(accountForm.style.display == 'grid'){
            accountForm.style.display = 'none';
        }else{
            accountForm.style.display = 'grid';
        }
    });
    
                }
            });

            // Handle user registration
            const registrationForm = document.getElementById('registration');
            registrationForm.addEventListener('submit',
                e => {
                    e.preventDefault();
                    const email = registrationForm.email.value;
                    const password = registrationForm.password.value;

                    auth.createUserWithEmailAndPassword(email, password)
                    .then(userCredential => {
                        registrationForm.reset();
                                            document.getElementById('message').style.display = 'grid';
                        document.getElementById('message').textContent = 'Registered successfully!';
                    window.location.reload();
                    setTimeout(() => {
                        document.getElementById('message').style.display = 'none';
                            }, 2500);
                        // Create cart data document in Firestore for the newly registered user
                        createCartData(userCredential.user.uid);
                    })
                    .catch(error => {
                                            document.getElementById('message').style.display = 'grid';
                        document.getElementById('message').textContent = (error.message);
                            
                    setTimeout(() => {
                        document.getElementById('message').style.display = 'none';
                            }, 2500);
                    });
                });

            // Handle user login
            const loginForm = document.getElementById('login');
            loginForm.addEventListener('submit',
                e => {
                    e.preventDefault();
                    const email = loginForm.email.value;
                    const password = loginForm.password.value;

                    auth.signInWithEmailAndPassword(email, password)
                    .then(() => {
                        loginForm.reset();
                                            document.getElementById('message').style.display = 'grid';
                        document.getElementById('message').textContent = 'Logging in. Please wait.';
                            
                    setTimeout(() => {
                        document.getElementById('message').style.display = 'none';
                        window.location.reload()
                            }, 2500);
                    })
                    .catch(error => {
                        document.getElementById('message').style.display = 'grid';
                        document.getElementById('message').textContent = (error.message);
                            
                    setTimeout(() => {
                        document.getElementById('message').style.display = 'none';
                        window.location.reload()
                            }, 2500);
                    });
                });

            // Handle user logout
            const logoutBtn = document.getElementById('logoutBtn');
            logoutBtn.addEventListener('click',
                () => {
                                        document.getElementById('message').style.display = 'grid';
                        document.getElementById('message').textContent = 'Logging out. Please wait.';
                            
                    setTimeout(() => {
                        document.getElementById('message').style.display = 'none';
                        window.location.reload();
                            }, 2500);
                    auth.signOut()
                    .catch(error => {
                                            document.getElementById('message').style.display = 'grid';
                        document.getElementById('message').textContent = (error.message);
                            
                    setTimeout(() => {
                        document.getElementById('message').style.display = 'none';
                            }, 2500);
                    });
                });
            // Delete account button event listener
            document.getElementById('deleteAccountBtn').addEventListener('click',
                () => {
                    const user = auth.currentUser;
                    if (user) {
                        // remove == 'true'
                        const confirmation = confirm('Are you sure you want to delete your account? This action cannot be undone.') == 'true';
                        if (confirmation) {
                            user.delete()
                            .then(() => {
                                firestore.collection('users').doc(user.uid).delete().catch(error => {
                    document.getElementById('message').style.display = 'grid';
                        document.getElementById('message').textContent = (error.message);
                            
                    setTimeout(() => {
                        document.getElementById('message').style.display = 'none';
                            }, 2500);
                                });
                                firestore.collection('carts').doc(user.uid).delete();
                                firestore.collection('orderHistory').doc(user.uid).delete();
                                cart = []; // Delete user data document
                                // window.location.reload();
                        document.getElementById('message').style.display = 'grid';
                        document.getElementById('message').textContent = 'Account has been deleted';
                            
                    setTimeout(() => {
                        document.getElementById('message').style.display = 'none';
                        window.location.reload();
                            }, 2500);
                            })
                            .catch(error => {
                    document.getElementById('message').style.display = 'grid';
                        document.getElementById('message').textContent = (error.message);
                            
                    setTimeout(() => {
                        document.getElementById('message').style.display = 'none';
                            }, 2500);
                            });
                        }
                    }
                });

            // Firestore collection and document references
            let cartCollectionRef;
            let cartDocRef;

            // Create cart data in Firestore for a new user
            function createCartData(userId) {
                cartCollectionRef = firestore.collection('carts');
                cartDocRef = cartCollectionRef.doc(userId);

                cartDocRef.set({
                    items: []
                })
                .then(() => {
                    // After creating the cart data, call the renderCart() function to display the empty cart
                    renderCart();
                })
                .catch(error => {
                    console.log(error.message);
                });
            }

            // Load cart data from Firestore for the logged-in user
            function loadCartData(userId) {
                cartCollectionRef = firestore.collection('carts');
                cartDocRef = cartCollectionRef.doc(userId);

                cartDocRef.get()
                .then(doc => {
                    if (doc.exists) {
                        cart = doc.data().items || [];
                        renderCart();
                        renderOrderHistory();
                    } else {
                        // If cart data doesn't exist, create it for the user
                        createCartData(userId);
                    }
                })
                .catch(error => {
                    console.log(error.message);
                });
            }

            // Update cart data in Firestore
            function updateCartData() {
                console.log("Updating cart data");
                console.log("Cart document reference:",
                    cartDocRef);

                if (!cartDocRef) {
                    console.log("Cart document reference is undefined. Aborting update.");
                    return;
                }

                cartDocRef.update({
                    items: cart
                })
                .then(() => {
                    console.log("Cart data updated successfully.");
                })
                .catch(error => {
                    console.log("Error updating cart data:", error.message);
                });
            }
            // Add to cart
            function addToCart(product, quantity) {
                // Add to cart logic
                const existingItem = cart.find(item => item.product.name === product.name);
                if (existingItem) {
                    existingItem.quantity += quantity;
                } else {
                    cart.push({
                        product, quantity
                    });
                }
                if (!auth.currentUser) {
                    document.getElementById('message').style.display = 'grid';
                        document.getElementById('message').textContent = 'Please register or login to add product(s) to cart!';
                            
                    setTimeout(() => {
                        document.getElementById('message').style.display = 'none';
                            }, 2500);
                    return;
                }
                if (auth.currentUser) {
                        document.getElementById('message').style.display = 'grid';
                        document.getElementById('message').textContent = 'Product has been added to cart.';
                            
                    setTimeout(() => {
                        document.getElementById('message').style.display = 'none';
                            }, 2500);
                }
                updateCartData();
                renderCart();
            }

            // Remove from cart
            function removeFromCart(product) {
                // Remove from cart logic
                cart = cart.filter(item => item.product.name !== product.name);
                updateCartData();
                renderCart();
            }
// Handle placing an order
const placeOrderBtn = document.getElementById('placeOrderBtn');
const orderItems = document.getElementById('orderItems');
const addressInput = document.getElementById('addressInput');
const numberInput = document.getElementById('numberInput');

placeOrderBtn.addEventListener('click', (e) => {
    e.preventDefault();

    // Get the input values
    const address = addressInput.value;
    const number = numberInput.value;

    // Validate the form
    if (address === '' || number === '') {
        document.getElementById('message').style.display = 'grid';
        document.getElementById('message').textContent = 'Please fill in all the fields';

        setTimeout(() => {
            document.getElementById('message').style.display = 'none';
        }, 2500);

        return;
    }

    if (!auth.currentUser) {
        document.getElementById('message').style.display = 'grid';
        document.getElementById('message').textContent = 'Please register or login first!';

        setTimeout(() => {
            document.getElementById('message').style.display = 'none';
        }, 2500);

        return;
    }

    if (cart.length === 0) {
        document.getElementById('message').style.display = 'grid';
        document.getElementById('message').textContent = 'Please add product(s) to the cart first!';

        setTimeout(() => {
            document.getElementById('message').style.display = 'none';
        }, 2500);

        return;
    }

    const userEmail = auth.currentUser.email; // Retrieve the user's email

    const order = cart.map(item => ({
        name: item.product.name,
        address: address,
        number: number,
        userEmail: userEmail, // Store the user's email in the order
        quantity: item.quantity
    }));

    // Add the order to the order history collection in Firestore
    const timestamp = new Date().getTime();
    firestore.collection('orderHistory').add({
        userId: auth.currentUser.uid,
        userEmail: userEmail,
        address: address,
        number: number,
        order: order,
        timestamp: timestamp,
    })
    .then(() => {
        // Clear the cart after placing the order
        cart = [];
        updateCartData();
        renderCart();
        renderOrderHistory(); // Add this line to update the order history
        // Clear the form fields
        addressInput.value = '';
        numberInput.value = '';


        document.getElementById('message').style.display = 'grid';
        document.getElementById('message').textContent = 'Product has been placed!';

        setTimeout(() => {
            document.getElementById('message').style.display = 'none';
        }, 2500);
    })
    .catch(error => {
        document.getElementById('message').style.display = 'grid';
        document.getElementById('message').textContent = error.message;

        setTimeout(() => {
            document.getElementById('message').style.display = 'none';
        }, 2500);
    });
});

            
function renderOrderHistory() {
  orderItems.innerHTML = '';

  firestore
    .collection('orderHistory')
    .where('userId', '==', auth.currentUser.uid)
    .orderBy('timestamp', 'desc')
    .get()
    .then(querySnapshot => {
      querySnapshot.forEach(doc => {
        const orderData = doc.data(); // Retrieve the order data
        const order = orderData.order; // Get the 'order' property from the data

        console.log('Order:', order); // Log the order data to check if it's defined correctly
        console.log('User Email:', orderData.userEmail);
        console.log('Order ID:', doc.id);
        console.log('Timestamp:', new Date(orderData.timestamp).toLocaleString());

        const orderItem = document.createElement('li');
        orderItem.innerHTML = `
          <span><strong>User ID:</strong> ${orderData.userEmail} </span>
          <span><strong>Address:</strong> ${orderData.address} </span>
          <span><strong>Number:</strong> ${orderData.number}</span>
          <span><strong>Order ID:</strong> ${doc.id}</span>
          <span><strong>Date:</strong> ${new Date(orderData.timestamp).toLocaleString()}</span>
          ${order
            .map(item => `
              <div class="order-details">
                <span><strong>Item: </strong>${item.name}</span>
                <span><strong>Quantity: </strong> ${item.quantity} </span>
              </div>
            `)
            .join('')}
        `;

        orderItems.appendChild(orderItem);
      });
    })
    .catch(error => {
      console.log(error.message);
    });
}

            
            
            // Calculate the total price of the order
            function calculateTotalPrice(order) {
                let totalPrice = 0;
                order.forEach(item => {
                    const product = getProductByName(item.name);
                    if (product) {
                        totalPrice += product.price * item.quantity;
                    }
                });
                
               return totalPrice;
            }

            // Get product details by name
            function getProductByName(name) {
                const allProducts = [...almusalProducts, ...lutongUlamProducts, ...panghimagasProducts];
                return allProducts.find(product => product.name === name);
            }
            
            // Render the cart on the page
            function renderCart() {
                const cartItems = document.getElementById('cartItems');
                const cartSubtotal = document.getElementById('cartSubtotal');
                cartItems.innerHTML = '';

                let subtotal = 0;

                cart.forEach(item => {
                    const cartItem = document.createElement('li');
                    cartItem.className = 'product';
                    cartItem.innerHTML = `
                    <div class="product-image">
                    <img src="${item.product.image}" alt="${item.product.name}">
                    </div>
                    <h3 style='padding-bottom:14px;'>${item.product.name}</h3>
                    <p>Price: ₱${item.product.price}</p>
                    <div class="quantity">
                    <button class="decrement-btn">-</button>
                    <span>${item.quantity}</span>
                    <button class="increment-btn">+</button>
                    </div>
                    <button class="remove-btn">Remove</button>
                    `;

                    const incrementBtn = cartItem.querySelector('.increment-btn');
                    const decrementBtn = cartItem.querySelector('.decrement-btn');
                    const removeBtn = cartItem.querySelector('.remove-btn');

                    incrementBtn.addEventListener('click', () => {
                        item.quantity++;
                        renderCart();
                        updateCartData();
                    });

                    decrementBtn.addEventListener('click', () => {
                        if (item.quantity > 1) {
                            item.quantity--;
                            renderCart();
                            updateCartData();
                        }
                    });

                    removeBtn.addEventListener('click',
                        () => {
                            const index = cart.indexOf(item);
                            cart.splice(index, 1);
                            renderCart();
                            updateCartData();
                        });

                    cartItems.appendChild(cartItem);

                    subtotal += item.product.price * item.quantity; // Calculate subtotal
                });

                cartSubtotal.innerHTML = `<span class="subtotal">Total Order Price: ₱${subtotal.toFixed(2)} </span>`; // Update subtotal element
            }


            // Almusal Products
            const almusalProducts = [{

                name: "Topsilog",
                image: "images/almusal/topsilog.jpg",
                price: 75.00
                },
                {
                    name: "Sulidong Almusal",
                    image: "images/almusal/sulidong_almusal.jpg",
                    price: 99.00
                },
                {
                    name: "Bonsilog",
                    image: "images/almusal/bonsilog.jpg",
                    price: 75.00
                },
                {
                    name: "Hotsilog",
                    image: "images/almusal/hotsilog.jpg",
                    price: 65.00
                },
                {
                    name: "Tosilog",
                    image: "images/almusal/tosilog.jpg",
                    price: 65.00
                },
                {
                    name: "Longsilog",
                    image: "images/almusal/longsilog.jpg",
                    price: 65.00
                }];

            // Lutong Ulam Products
            const lutongUlamProducts = [{

                name: "Menudo",
                image: "images/lutong_ulam/menudo.jpg",
                price: 75.00
            },
                {
                    name: "Pakbet",
                    image: "images/lutong_ulam/pakbet.jpg",
                    price: 75.00
                },
                {
                    name: "Giniling",
                    image: "images/lutong_ulam/giniling.jpg",
                    price: 75.00
                },
                {
                    name: "Chicken Curry",
                    image: "images/lutong_ulam/chicken_curry.jpg",
                    price: 75.00
                },
                {
                    name: "Adobo",
                    image: "images/lutong_ulam/adobo.jpg",
                    price: 75.00
                },
                {
                    name: "Dinakdakan",
                    image: "images/lutong_ulam/dinakdakan.jpg",
                    price: 75.00
                }];

            // Panghimagas Products
            const panghimagasProducts = [{

                name: "Palitaw",
                image: "images/panghimagas/palitaw.jpg",
                price: 60.00
            },
                {
                    name: "Jelly Cake",
                    image: "images/panghimagas/jelly_cake.jpg",
                    price: 70.00
                },
                {
                    name: "Kutsinta",
                    image: "images/panghimagas/kutsinta.jpg",
                    price: 60.00
                },
                {
                    name: "Graham",
                    image: "images/panghimagas/graham.jpg",
                    price: 85.00
                },
                {
                    name: "Halo-Halo",
                    image: "images/panghimagas/special_halo_halo.jpg",
                    price: 60.00
                },
                {
                    name: "Leche Flan",
                    image: "images/panghimagas/leche_flan.jpg",
                    price: 75.00
                }];

            // Render almusal products
            const productListAlmusal = document.getElementById('productListAlmusal');
            almusalProducts.forEach(product => {
                const productDivAlmusal = document.createElement('div');
                productDivAlmusal.className = 'product';
                productDivAlmusal.innerHTML = `
                <div class="product-image">
                <img src="${product.image}" alt="${product.name}">
                </div>
                <h3>${product.name}</h3>
                <p>Price: ₱${product.price}</p>
                <div class="quantity">
                <button class="decrement-btn">-</button>
                <span>1</span>
                <button class="increment-btn">+</button>
                </div>
                <button class="addToCartBtn">Add to Cart</button>
                `;
                productListAlmusal.appendChild(productDivAlmusal);

                const quantityInput = productDivAlmusal.querySelector('.quantityInput');
                const addToCartBtn = productDivAlmusal.querySelector('.addToCartBtn');
                const quantitySpan = productDivAlmusal.querySelector('.quantity span');
                const incrementBtn = productDivAlmusal.querySelector('.increment-btn');
                const decrementBtn = productDivAlmusal.querySelector('.decrement-btn');

                incrementBtn.addEventListener('click',
                    () => {
                        let quantity = parseInt(quantitySpan.textContent);
                        quantity++;
                        quantitySpan.textContent = quantity.toString();
                    });

                decrementBtn.addEventListener('click',
                    () => {
                        let quantity = parseInt(quantitySpan.textContent);
                        if (quantity > 1) {
                            quantity--;
                            quantitySpan.textContent = quantity.toString();
                        }
                    });
                addToCartBtn.addEventListener('click',
                    () => {
                        const quantity = parseInt(quantitySpan.textContent);
                        if (quantity > 0) {
                            const productToAdd = {
                                ...product
                            };
                            addToCart(productToAdd, quantity);
                            quantitySpan.textContent = '1';
                        }
                    });

            });

            // Render lutong ulam products
            const productListLutongUlam = document.getElementById('productListLutongUlam');
            lutongUlamProducts.forEach(product => {
                const productDivLutongUlam = document.createElement('div');
                productDivLutongUlam.className = 'product';
                productDivLutongUlam.innerHTML = `
                <div class="product-image">
                <img src="${product.image}" alt="${product.name}">
                </div>
                <h3>${product.name}</h3>
                <p>Price: ₱${product.price}</p>
                <div class="quantity">
                <button class="decrement-btn">-</button>
                <span>1</span>
                <button class="increment-btn">+</button>
                </div>
                <button class="addToCartBtn">Add to Cart</button>
                `;
                productListLutongUlam.appendChild(productDivLutongUlam);

                const quantityInput = productDivLutongUlam.querySelector('.quantityInput');
                const addToCartBtn = productDivLutongUlam.querySelector('.addToCartBtn');
                const quantitySpan = productDivLutongUlam.querySelector('.quantity span');
                const incrementBtn = productDivLutongUlam.querySelector('.increment-btn');
                const decrementBtn = productDivLutongUlam.querySelector('.decrement-btn');

                incrementBtn.addEventListener('click',
                    () => {
                        let quantity = parseInt(quantitySpan.textContent);
                        quantity++;
                        quantitySpan.textContent = quantity.toString();
                    });

                decrementBtn.addEventListener('click',
                    () => {
                        let quantity = parseInt(quantitySpan.textContent);
                        if (quantity > 1) {
                            quantity--;
                            quantitySpan.textContent = quantity.toString();
                        }
                    });
                addToCartBtn.addEventListener('click',
                    () => {
                        const quantity = parseInt(quantitySpan.textContent);
                        if (quantity > 0) {
                            const productToAdd = {
                                ...product
                            };
                            addToCart(productToAdd, quantity);
                            quantitySpan.textContent = '1';
                        }
                    });

            });


            // Render panghimagas products
            const productListPanghimagas = document.getElementById('productListPanghimagas');
            panghimagasProducts.forEach(product => {
                const productDivPanghimagas = document.createElement('div');
                productDivPanghimagas.className = 'product';
                productDivPanghimagas.innerHTML = `
                <div class="product-image">
                <img src="${product.image}" alt="${product.name}">
                </div>
                <h3>${product.name}</h3>
                <p>Price: ₱${product.price}</p>
                <div class="quantity">
                <button class="decrement-btn">-</button>
                <span>1</span>
                <button class="increment-btn">+</button>
                </div>
                <button class="addToCartBtn">Add to Cart</button>
                `;
                productListPanghimagas.appendChild(productDivPanghimagas);

                const quantityInput = productDivPanghimagas.querySelector('.quantityInput');
                const addToCartBtn = productDivPanghimagas.querySelector('.addToCartBtn');
                const quantitySpan = productDivPanghimagas.querySelector('.quantity span');
                const incrementBtn = productDivPanghimagas.querySelector('.increment-btn');
                const decrementBtn = productDivPanghimagas.querySelector('.decrement-btn');

                incrementBtn.addEventListener('click',
                    () => {
                        let quantity = parseInt(quantitySpan.textContent);
                        quantity++;
                        quantitySpan.textContent = quantity.toString();
                    });

                decrementBtn.addEventListener('click',
                    () => {
                        let quantity = parseInt(quantitySpan.textContent);
                        if (quantity > 1) {
                            quantity--;
                            quantitySpan.textContent = quantity.toString();
                        }
                    });
                addToCartBtn.addEventListener('click',
                    () => {
                        const quantity = parseInt(quantitySpan.textContent);
                        if (quantity > 0) {
                            const productToAdd = {
                                ...product
                            };
                            addToCart(productToAdd, quantity);
                            quantitySpan.textContent = '1';
                        }
                    });
            });
// Add more product to Firestore
function addProductToFirestore(product) {
    const timestamp = firebase.firestore.FieldValue.serverTimestamp();
  firestore
    .collection('moreProducts')
    .add({
      name: product.name,
      image: product.image,
      price: product.price,
      timestamp: timestamp,
    })
    .then(docRef => {
      console.log('Product added to Firestore with ID:', docRef.id);
      // Prompt successful addition and reload the page
        document.getElementById('message').style.display = 'grid';
        document.getElementById('message').textContent = 'Product successfully added!';
        setTimeout(() => {
        document.getElementById('message').style.display = 'none';
        window.location.href = '#moreProductsDiv';
        window.location.reload(true);
            }, 2500);
    })
    .catch(error => {
      console.log('Error adding product to Firestore:', error.message);
    });
}

const addProductBtn = document.getElementById('addProductBtn');
addProductBtn.addEventListener('click', (e) => {
  e.preventDefault();
  const productName = document.getElementById('productName').value;
  const productImage = document.getElementById('productImage').value;
  const productPrice = parseFloat(document.getElementById('productPrice').value);

  if (productName && productImage && productPrice) {
    const product = { name: productName, image: productImage, price: productPrice };
    addProductToFirestore(product); // Call the function to save the product to Firestore
    document.getElementById('productName').value = '';
    document.getElementById('productImage').value = '';
    document.getElementById('productPrice').value = '';
  } else {
    document.getElementById('message').style.display = 'grid';
    document.getElementById('message').textContent = 'Please fill all the fields correctly';
    setTimeout(() => {
    document.getElementById('message').style.display = 'none';
    }, 2500);
  }
});
function renderMoreProducts() {
  const moreProductsDiv = document.getElementById('moreProducts');
  // Fetch products from Firestore
  firestore.collection('moreProducts')
  .orderBy('timestamp', 'desc') // Sort by timestamp in descending order
    .get()
    .then(querySnapshot => {
      querySnapshot.forEach(doc => {
        const product = doc.data();
        const productItem = document.createElement('div');
        productItem.className = 'product';
        productItem.innerHTML = `
          <div class="product-image">
                <img src="${product.image}" alt="${product.name}">
          </div>
          <h3>${product.name}</h3>
          <p>₱${product.price.toFixed(2)}</p>
                <div class="quantity">
                <button class="decrement-btn">-</button>
                <span>1</span>
                <button class="increment-btn">+</button>
                </div>
    <button class="addToCartBtn">Add to Cart</button>
  
  `;
  moreProductsDiv.appendChild(productItem);
  
  const addToCartBtns = document.getElementsByClassName('addToCartBtn');
  const quantityInput = productItem.querySelector('.quantityInput');
                const addToCartBtn = productItem.querySelector('.addToCartBtn');
                const quantitySpan = productItem.querySelector('.quantity span');
                const incrementBtn = productItem.querySelector('.increment-btn');
                const decrementBtn = productItem.querySelector('.decrement-btn');

                incrementBtn.addEventListener('click',
                    () => {
                        let quantity = parseInt(quantitySpan.textContent);
                        quantity++;
                        quantitySpan.textContent = quantity.toString();
                    });

                decrementBtn.addEventListener('click',
                    () => {
                        let quantity = parseInt(quantitySpan.textContent);
                        if (quantity > 1) {
                            quantity--;
                            quantitySpan.textContent = quantity.toString();
                        }
                    });
                addToCartBtn.addEventListener('click',
                    () => {
                        const quantity = parseInt(quantitySpan.textContent);
                        if (quantity > 0) {
                            const productToAdd = {
                                ...product
                            };
                            addToCart(productToAdd, quantity);
                            quantitySpan.textContent = '1';
                        }
                    });
      });
    })
    .catch(error => {
       console.log('Error fetching products:', error);
    });
}
        });
    