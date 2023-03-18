import React from 'react'

const Header = () => {
  return (
    <header>
    <div class="container">
      <a id="logotype" href="index.html">Fixxo.</a>
      <div id="menu" class="hide">
        <nav id="menu-links" class="links">
          <a class="link" href="index.html">Home</a>
          <a class="link" href="products.html">Products</a>
          <a class="link" href="contacts.html">Contacts</a>
        </nav>
        <nav id="menu-icons" class="icons">
          <a class="link" href="#"><i class="fa-regular fa-search"></i></a>
          <a class="link" href="#"><i class="fa-regular fa-code-compare"></i></a>
          <a class="link" href="#"><i class="fa-regular fa-heart"></i></a>
          <a class="link" href="#"><i class="fa-regular fa-bag-shopping"></i></a>
          <a class="link ms-5" href="#"><i class="fa-regular fa-user"></i></a>
        </nav>
      </div>
      <div id="toggle-icon" class="icons">
        <button class="link" data-option="toggle" data-target="#menu" ><i class="fa-regular fa-bars"></i></button>
      </div>

    </div>
  </header>
  )
}

export default Header