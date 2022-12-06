<script setup>
import { RouterLink, RouterView } from 'vue-router'

</script>

<template>
 
  <main class="d-flex flex-column justify-content-center align-item-center mt-5 p-2" id="contact">
  
  <form class="border border-white rounded mt-4" style=" background-color: #a9def9;">
    <div class="d-flex flex-column justify-content-center align-item-center p-1">
      <h2 style="text-align:center">Login with Social Media or Manually</h2>
    

      <div class="d-flex flex-wrap justify-content-center align-item-center p-1 gap-1">
        <a href="#" class="fb btn">
          <i class="fa fa-facebook fa-fw"></i> Login with Facebook
        </a>
        <a href="#" class="twitter btn">
          <i class="fa fa-twitter fa-fw"></i> Login with Twitter
        </a>
        <a href="#" class="google btn">
          <i class="fa fa-google fa-fw"></i> Login with Google+
        </a>
      </div>

      <div  class="d-flex flex-column justify-content-center align-item-center p-1 " >
        <div class="hide-md-lg d-flex flex-wrap justify-content-center align-item-center ">
          <h2 style="text-align:center">Or sign in manually</h2>
        </div  >
        <div  class="d-flex flex-column justify-content-center align-item-center gap-2 " >

        <input type="text" name="username" placeholder="Username" required>
        <input type="password" name="password" placeholder="Password" required>
    </div>
        <button class="btn "><input type="submit" value="Login"></button>
  
    </div>
    </div>
  </form>



  <div  class="d-flex flex-wrap justify-content-center align-item-center p-1">
    <div >
      <a href="#" style="color:white" class="btn"> <RouterLink to="/registro">Sign up</RouterLink></a>
    </div>
    <div >
      <a href="#" style="color:white" class="btn"><RouterLink to="/registro">Forgot password?</RouterLink></a>
    </div>
  </div>

  </main>
</template>
<style scoped>
#contact {

  background: linear-gradient(0.25turn, #a9def9, #f694c1, #ffffff, #f694c1, #a9def9);

  /* background: linear-gradient(to bottom, rgba(255, 255, 255, 0.5), rgba(255, 255, 255, 0.5)), url(../img/imagen2.jpg); */
  background-size: cover;
  background-position: center;
 

}




.fb {
  background-color: #3B5998;
  color: white;
}

.twitter {
  background-color: #55ACEE;
  color: white;
}

.google {
  background-color: #dd4b39;
  color: white;
}






</style>
