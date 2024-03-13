let cardsList = document.querySelector('.cards-list')

let card = document.createElement('div')
card.classList.add('card')

cardsList.append(card)

let imageWrapper = document.createElement('div')
imageWrapper.classList.add('image-wrapper')

card.append(imageWrapper)

let contentWrapper = document.createElement('div')
contentWrapper.classList.add('content-wrapper')

card.append(contentWrapper)

let productImage = document.createElement('img')
productImage.setAttribute('src', 'image-product-desktop.jpg')
productImage.classList.add('product-image')

imageWrapper.append(productImage)

let productCategory = document.createElement('span')
productCategory.textContent = 'Perfum'
productCategory.classList.add('product-category')

contentWrapper.append(productCategory)

let productTitle = document.createElement('h2')
productTitle.textContent = 'Gabrielle Essence Eau De Parfum'
productTitle.classList.add('product-title')

contentWrapper.append(productTitle)

let productDescription = document.createElement('p')
productDescription.textContent = 'A floral, solar and voluptuous interpretation composed by Olivier Polge, Perfumer-Creator for the House of CHANEL.'
productDescription.classList.add('product-description')

contentWrapper.append(productDescription)

let productPriceWripper = document.createElement('div')
productPriceWripper.classList.add('product-price-wrapper')

contentWrapper.append(productPriceWripper)

let productPrice = document.createElement('span')
productPrice.textContent = '$149.99'
productPrice.classList.add('product-price')

productPriceWripper.append(productPrice)

let productPriceOld = document.createElement('span')
productPriceOld.textContent = '$169.99'
productPriceOld.classList.add('product-price-old')

productPriceWripper.append(productPriceOld)

let addToCartButton = document.createElement('button')

addToCartButton.classList.add('add-to-cart-button')
addToCartButton.textContent = 'Add to Cart'
contentWrapper.append(addToCartButton)

let iconCart = document.createElement('img')
iconCart.setAttribute('src', 'cart.svg')
iconCart.classList.add('icon-cart')

addToCartButton.prepend(iconCart)



{/* 

<div class="card">
  <div class="image-wrapper">
    <img class="product-image" src="images/image-product-desktop.jpg" alt="">
  </div>

  <div class="content-wrapper">
    <span class="product-category">Perfume</span>
    
    <h2 class="product-title">Gabrielle Essence Eau De Parfum</h2>

    <p class="product-description">A floral, solar and voluptuous interpretation composed by Olivier Polge, Perfumer-Creator for the House of CHANEL.</p>

    <div class="product-price-wrapper">
      <span class="product-price">$149.99</span>
      <span class="product-price-old">$169.99</span>
    </div>

    <button class="add-to-cart-button">
      <img src="icon-cart.svg" alt="">
      Add to Cart
    </button>
  </div>
</div> 

*/}