<script setup>


</script>

<template>
 
  <main class="d-flex flex-column mt-5 p-2" id="contact">
    <h3 class=" mt-1 text-center">Contact Us</h3>
    <div class="d-flex text-start justify-content-around h-100  border border-white rounded" style="min-height: 60vh; background-color: #a9def9;">
      <form class="d-flex ">
        <div class=" d-flex flex-column align-items-start">
          <h6>Ask us your question:</h6>
          <div class="form-group input ">
            <input id="" type="text" class="form-control  " placeholder="Name and Surname" required>
            <label></label>
          </div>
          <div class="form-group input ">
            <input type="number" class="form-control " placeholder="DNI" required>
            <label></label>
          </div>
          
          <div class="form-group ">
            <select class="form-control  " required>
              <option selected disabled value="" style="color: 000;">Gender:</option>
              <option>Feminine</option>
              <option>Male</option>
              <option>Non binary</option>
              <option>Other</option>
            </select>
          </div>
          
          <div class="form-group input ">
            <input type="number" class="form-control  mt-4" placeholder="Telephone" required>
            <label></label>
          </div>
          <div class="form-group input ">
            <input type="email" class="form-control  " placeholder="Mail" required>
            <label></label>
          </div>

          <div class="form-group input ">
            <input type="text" class="form-control  " placeholder="Comments" style="height: 3rem;" required>
            <label></label>
          </div>
          <div class="mt-3  d-flex">
            <button type="submit" class="btn btn-dark">Send</button>
          </div>

        </div>

      </form>
    

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
</style>
