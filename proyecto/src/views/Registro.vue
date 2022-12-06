<script setup>
</script>
<template>
    <main  class=" mt-5  p-2 d-flex flex-column justify-content-center align-item-center  mt-5 p-2" id="registro" >
   
        <form class="border border-white rounded" style=" background-color: #a9def9;">
            <div class="d-flex flex-column justify-content-center align-item-center p-1">
                <h1>Register</h1>

                <label for="email"><b>Email</b></label>
                <input type="text" placeholder="Enter Email" name="email" id="email" required>

                <label for="psw"><b>Password</b></label>
                <input type="password" placeholder="Enter Password" name="psw" id="psw" required>

                <label for="psw-repeat"><b>Repeat Password</b></label>
                <input type="password" placeholder="Repeat Password" name="psw-repeat" id="psw-repeat" required>

                <p>By creating an account you agree to our <a href="#">Terms & Privacy</a>.</p>
                <button class="btn "><input type="submit" value="Register"></button>
           
                <p>Already have an account? <a href="#">Sign in</a></p>
          </div>
        </form>
  
</main>
</template>
<style scoped>
#registro {
    background: linear-gradient(0.25turn, #a9def9, #f694c1, #ffffff, #f694c1, #a9def9);

}
</style>