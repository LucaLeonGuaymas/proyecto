<script setup>


</script>

<template>

  <main class="d-flex flex-column p-2 mt-1" id="contact">
    <h3 class="mt-5  w-100 text-center">Work with us</h3>
    <div class="d-flex w-100 text-start justify-content-around h-100 " style="min-height: 60vh">
      <form class="d-flex border border-white p-2 rounded" style=" background-color: #a9def9;">
        <div class="d-flex flex-column align-items-start">
          <h6>Pre-registration form:</h6>
          <div class="form-check">
            <input class="form-check-input" type="radio" name="flexRadioDefault" id="flexRadioDefault1">
            <label class="form-check-label" for="flexRadioDefault1">
              I am a person
            </label>
          </div>
          <div class="form-check">
            <input class="form-check-input" type="radio" name="flexRadioDefault" id="flexRadioDefault2" checked>
            <label class="form-check-label" for="flexRadioDefault2">
              I am company
            </label>
          </div>
          <div class="form-group input w-100">
            <input id="" type="text" class="form-control w-100 mt-1" placeholder="Name and Surname" required>
            <label></label>
          </div>
          <div class="form-group w-100">
            <select class="form-control w-100 " required>
              <option selected disabled value="" style="color: 000;">Gender:</option>
              <option>Feminine</option>
              <option>Male</option>
              <option>Non binary</option>
              <option>Other</option>
            </select>
          </div>
          <div class="form-group input w-100">
            <input type="number" class="form-control w-100 mt-4" placeholder="DNI" required>
            <label></label>
          </div>
          <div class="form-group input w-100">
            <input type="text" class="form-control w-100 " placeholder="Country" required>
            <label></label>
          </div>
          <div class="form-group input w-100">
            <input type="text" class="form-control w-100" placeholder="Province" required>
            <label></label>
          </div>
          <div class="form-group input w-100">
            <input type="text" class="form-control w-100 " placeholder="City" required>
            <label></label>
          </div>
          <div class="form-group input w-100">
            <input type="number" class="form-control w-100 " placeholder="Phone" required>
            <label></label>
          </div>

          <div class="form-group w-100">
            <select class="form-control w-100  " required>
              <option selected disabled value="" style="color: 000;">Primary:</option>
              <option>Complete</option>
              <option>Incomplete</option>
              <option>In progress</option>
              <option>Abandoned</option>
            </select>
          </div>
          <div class="form-group w-100">
            <select class="form-control w-100 mt-4" required>
              <option selected disabled value="" style="color: 000;">Secondary:</option>
              <option>Complete</option>
              <option>Incomplete</option>
              <option>In progress</option>
              <option>Abandoned</option>
            </select>
          </div>
          <div class="form-group w-100">
            <select class="form-control w-100 mt-4" required>
              <option selected disabled value="" style="color: 000;">University:</option>
              <option>Complete</option>
              <option>Incomplete</option>
              <option>In progress</option>
              <option>Abandoned</option>
            </select>
          </div>
          <div class="form-group input w-100">
            <input type="text" class="form-control w-100 mt-4" placeholder="Courses" style="height: 3rem;" required>
            <label></label>
          </div>
          <div class="form-check form-switch">
            <input class="form-check-input" type="checkbox" role="switch" id="flexSwitchCheckChecked" checked>
            <label class="form-check-label" for="flexSwitchCheckChecked">Take a course in TransITar</label>
          </div>

          <div class="form-group input w-100">
            <input type="text" class="form-control w-100 mt-4" placeholder="Comments" style="height: 3rem;" required>
            <label></label>
          </div>
          <div class="mt-3 w-100 d-flex">
            <button type="submit" class="btn btn-dark">
              Send</button>
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
