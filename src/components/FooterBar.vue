<template>
  <footer>
    <div class="row m-0">
      <div class="col-12 bg-green">
        <div class="col-xl-9 mx-auto my-5 tomorrow-container">
          <div class="left-quote">
            <img src="@/assets/img/left_round_quote.png" class="img-fluid"/>
          </div>
          <div class="right-text">
            <h1>We have a vision for better healthcare tomorrow.</h1>
            <div class="hr-container">
              <hr/>
            </div>
          </div>
          
        </div>
      </div>
    </div>
    <div class="row m-0 bg-dark py-5 px-md-2 px-lg-5">
      <div class="col-lg-5 logo-copyright">
        <img src="@/assets/img/logo_white.png">
        <p class="mt-3">© 2019 iKleeniK Limited, All Rights Reserved</p>
      </div>
      <div class="col-lg-7">
        <div class="row footer-link">
          <div class="col-md-4">
            <h4>Quick Links</h4>
            <div class="hr-container">
              <hr/>
            </div>
            <ul>
              <li>
                <router-link class="nav-link" :to="{name: 'products'}">Products</router-link>
              </li>
              <li>
                <router-link class="nav-link" :to="{name: 'blog'}">Blog</router-link>
              </li>
              <li>
                <router-link class="nav-link" :to="{name: 'career'}">Careers</router-link>
              </li>
              <li>
                <router-link class="nav-link" :to="{name: 'contact'}">Contact Us</router-link>
              </li>
            </ul>
          </div>
          <div class="col-md-8">
            <h4>Newsletter</h4>
            <div class="hr-container">
              <hr/>
            </div>
            <div class="input-group">
              <input type="text" class="form-control" placeholder="Email..." aria-label="Email...">
              <div class="input-group-append">
                <a href="#" class="btn btn-success text-uppercase">Subscribe</a>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  </footer>
</template>
<script>
export default {
  
}
</script>