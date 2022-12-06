<script setup>
import { RouterLink, RouterView } from 'vue-router'



</script>

<template>
  <main>

    <div class="fixed-top p-1" style="background-color: #a9def9;">
      <div class="d-flex justify-content-around align-item-center ">
        <button type="button" class="btn " style="background-color: #f694c1;">       <RouterLink to="/login"><i class="bi bi-person"></i></RouterLink></button>
        <div class="p-1">
        <img src="./img/logo.png" alt="LOGO" style="height: 30px;" >
      </div>

        <div class="text-black d-flex">
          <a class="link" href="">
            <h1>T</h1>
          </a>
          <a class="link" href="">
            <h1>r</h1>
          </a>
          <a class="link" href="">
            <h1>a</h1>
          </a>
          <a class="link" href="">
            <h1>n</h1>
          </a>
          <a class="link" href="">
            <h1>s</h1>
          </a>
          <a class="link" href="">
            <h1>I</h1>
          </a>
          <a class="link" href="">
            <h1>T</h1>
          </a>
          <a class="link" href="">
            <h1>a</h1>
          </a>
          <a class="link" href="">
            <h1>r</h1>
          </a>
        </div>



        <!-- <button type="button" class="btn " style="background-color: #f694c1;"><i class="bi bi-suit-heart"></i></button> -->
       




        <button type="button" class="btn " style="background-color: #f694c1;" data-bs-toggle="offcanvas" data-bs-target="#offcanvasWithBothOptions"
          aria-controls="offcanvasWithBothOptions"><i class="bi bi-list"></i></button>

        <div class="offcanvas offcanvas-start " data-bs-scroll="true" tabindex="-1" id="offcanvasWithBothOptions"
          aria-labelledby="offcanvasWithBothOptionsLabel" style="width: 37vh; background-color: #a9def9;">
          <div class="offcanvas-header " style="width: 35vh;">
            <h5 class="offcanvas-title" id="offcanvasWithBothOptionsLabel">MENU</h5>
            <button type="button" class="btn-close" data-bs-dismiss="offcanvas" aria-label="Close"></button>
          </div>
          <div class="offcanvas-body">
            <nav class="p-3 d-flex flex-column justify-content-center align-item-center gap-4" >

              <RouterLink to="/">Home</RouterLink>
              <RouterLink to="/about">About</RouterLink>
              <RouterLink to="/upcoming">Upcoming Events</RouterLink>
              <RouterLink to="/work">Work with us</RouterLink>
              <RouterLink to="/contact">Contact</RouterLink>
              <RouterLink to="/rules">Rules y polices</RouterLink>

            </nav>
          </div>
        </div>
      </div>
    </div>



   
<!-- 
    BACK TU TOP
    <div class="btn-group-vertical position-fixed" role="group" aria-label="Vertical button group" id="iconos1">
      <a href="#top"> <button type="button" class="btn btn-white"><i class="bi bi-arrow-up"></i></button></a>

    </div> -->

    <!-- NAV ABAJO -->
    <div class="fixed-bottom  " style="background-color: #a9def9;" id="navabajo">
      <div class="d-flex justify-content-around p-1">
        <button type="button" class="btn " style="background-color: #f694c1;"><RouterLink to="/comments"><i class="bi bi-envelope">  </i></RouterLink> </button>
        <button type="button" class="btn " style="background-color: #f694c1;"> <RouterLink to="/"><i class="bi bi-house-door"></i></RouterLink></button>
        <button type="button" class="btn " style="background-color: #f694c1;"> <a href="#top"><i class="bi bi-arrow-up"></i></a></button>

      </div>
    </div>



  </main>



  <RouterView />
  <footer>
    <div class="bg-white  d-flex justify-content-center align-item-center p-1">
     <!-- BOTONES -->
     <div class="mb-5 d-flex flex-wrap justify-content-center align-item-center ">
        <p> <strong> You find us in:</strong></p>
        <p> Calle Pueyrredon 2200</p>
        <p> San Miguel de Tucumán</p>
        <p>Tucumán</p>
        <p> <strong> Telephone: </strong> </p>
        <p> 3816681174</p>
      

      </div>

      <div class="vl"></div>

     <div class="mb-5 d-flex flex-wrap justify-content-center align-item-center">
      <button type="button" class="btn btn-white"><i class="bi bi-geo-alt-fill"></i></button>
      <button type="button" class="btn btn-white"><i class="bi bi-linkedin"></i></button>
      <button type="button" class="btn btn-white "><i class="bi bi-telegram"></i></button>
      <button type="button" class="btn btn-white"><i class="bi bi-telephone-plus-fill"></i></button>
      <button type="button" class="btn btn-white"><i class="bi bi-tiktok"></i></button>
      <button type="button" class="btn btn-white"><i class="bi bi-whatsapp"></i></button>
      <button type="button" class="btn btn-white"><i class="bi bi-youtube"></i></button>
    </div>
  </div>
  </footer>

</template>

<style scoped>
.link {
  text-decoration: none;
  color: #f694c1;
  -webkit-text-stroke: 2px rgb(0, 0, 0);
  -webkit-transition: 1s ease;
}

.link:hover {
  text-decoration: none;
  color: #a9def9;
  -webkit-transform: scale(1.2);

}



#menu {
  background: linear-gradient(to bottom, rgba(255, 255, 255, 0.5), rgba(255, 255, 255, 0.5)), url(../img/imagen2.jpg);
  background-size: cover;
  background-position: center;
  border-radius: 2rem;

}

#iconos1 {
  position: sticky;
  top: 350px;

}

.vl {
  border-left: 2px solid rgb(158, 158, 158);
  height: 500px;
}

</style>
