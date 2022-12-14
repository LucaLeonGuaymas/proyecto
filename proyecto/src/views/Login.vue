<script setup>
import { RouterLink, RouterView } from 'vue-router'
import { ref } from 'vue'
// cambios
import store from '../store/store.js'
import { loginWithGoogle, logout } from '../firebase/auth.js'
import user from '../store/profile.js'
const userName = ref('')
const newUserName = ref('')


// hasta aqui


</script>

<template>

  <main class="d-flex flex-column justify-content-center align-item-center mt-5 p-2" id="contact">
    <!-- cambios -->
    <!-- <div>
      <h1> {{ store.userName }} </h1>
      <form>
        <input type="text" v-model="userName">
        <button @click.prevent="store.changeName(userName)">Change</button>
      </form>
    </div> -->
    <!-- hasta aqui -->

    <form class="d-flex justify-content-center border border-white rounded mt-4" style=" background-color: #a9def9;">
      <div class="d-flex flex-column justify-content-center align-item-center p-1">

        <div v-if="user" class="userCard">
          <div class="card mb-3" style="max-width: 540px;">
            <div class="row g-0 d-flex flex-column justify-content-center align-item-center">
              <div class="col-md-4  p-1 d-flex justify-content-center" >
                <img  :src="user.photoURL" class="img-fluid rounded-circle" style="height: 150px; width: 150px;" alt="user photo">
              </div>
              <div class="col-md-8">
                <div class="card-body d-flex flex-column justify-content-center align-item-center">
                  <h1>WELCOME!</h1>
                  <h2 class="card-title">{{ user.displayName }}</h2>
                  <p class="card-text"><small class="text-muted">{{ user.email }}</small></p>
                </div>
              </div>
            </div>
          </div>
        </div>

        

        <div v-if="!user" class="d-flex flex-column justify-content-center align-item-center p-1 ">
          <div class="hide-md-lg d-flex flex-wrap justify-content-center align-item-center ">
            <h2 style="text-align:center">Login with Social Media or Manually</h2>

            <h2 style="text-align:center">Or sign in manually</h2>
          </div>
          <div class="d-flex flex-column justify-content-center align-item-center gap-2 ">

            <input type="text" name="username" placeholder="Username" required>
            <input type="password" name="password" placeholder="Password" required>
          </div>
          <button class="btn "><input type="submit" value="Login"></button>

        </div>


        <div v-if="!user" class="d-flex flex-wrap justify-content-center align-item-center p-1 gap-1">
          <button class="fb btn">
            <i class="fa fa-facebook fa-fw"></i> Login with Facebook
          </button>
          <button class="twitter btn">
            <i class="fa fa-twitter fa-fw"></i> Login with Twitter
          </button>
          <button class="google btn" @click="loginWithGoogle">
            <i class="fa fa-google fa-fw"></i> Login with Google+
          </button>
        </div>
          <div v-if="user" class="d-flex flex-wrap justify-content-center align-item-center p-1 gap-1">
          <button class="google btn" @click="logout">
            <i class="fa fa-google fa-fw"></i> Logout
          </button>
        </div>


      </div>
    </form>



    <div class="d-flex flex-wrap justify-content-center align-item-center p-1">
      <div>
        <a href="#" style="color:white" class="btn">
          <RouterLink to="/registro">Sign up</RouterLink>
        </a>
      </div>
      <div>
        <a href="#" style="color:white" class="btn">
          <RouterLink to="/registro">Forgot password?</RouterLink>
        </a>
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
