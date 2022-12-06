<script setup>
import { ref, reactive, onMounted } from 'vue'
// const comments = ref('')
// comments.value = 'hola'
const comentarios = ref([
  // {id: crypto.randomUUID(), coment: 'comentario 1', completada: false },
  // {id: crypto.randomUUID(), coment: 'comentario 2', completada: true },
  // {id: crypto.randomUUID(), coment: 'comentario 3', completada: false },
  // {id: crypto.randomUUID(), coment: 'comentario 4', completada: true },
  // {id: crypto.randomUUID(), coment: 'comentario 5', completada: false },
  // {id: crypto.randomUUID(), coment: 'comentario 6', completada: false },
  // {id: crypto.randomUUID(), coment: 'comentario 7', completada: true },
  // {id: crypto.randomUUID(), coment: 'comentario 8', completada: false },
  // {id: crypto.randomUUID(), coment: 'comentario 9', completada: false },
  // {id: crypto.randomUUID(), coment: 'comentario 10', completada: false },
])
console.log(comentarios)

const texto = ref('')
const agregarComentario = () => {
  const comentario = {
    id: crypto.randomUUID(),
    coment: texto.value,
    completada: false
  }
  comentarios.value.unshift(comentario)
  texto.value = ''
}

const eliminarComentario = (id) => {

  comentarios.value = comentarios.value.filter(comentario => comentario.id !== id)

}
</script>
<template>
  <div class="p-2 d-flex flex-column justify-content-center  " id="comments">
    <!-- <p>{{texto}}</p> -->
    <h1>COMMENTS</h1>

    <!-- POR PUBLICAR -->
    <div class=" d-flex flex-column justify-content-center align-item-center  " >

      <div class="d-flex align-items-center p-2 border border-white rounded" style="background-color: #a9def9;">
        <div class="flex-shrink-0">
          <img class="rounded-circle"
            src="https://pbs.twimg.com/profile_images/1594738420697399304/oDxLfiFr_400x400.png" alt="..."
            style="height: 2rem; ">
        </div>
        <div class="flex-grow-1 ms-1">
          <form @submit.prevent="agregarComentario" class="d-flex input-group" role="search">
            <input v-model="texto" class="form-control me-1" type="text" placeholder="add a comment"
              aria-label="Search">
            <button :disabled="!texto" class="btn " type="submit" style="background-color: #f694c1;">
              <strong> Post
              </strong></button>
          </form>
        </div>
      </div>

      <!-- DESPLEGABLE -->
      <div class="d-flex flex-wrap justify-content-center align-item-center p-1 gap-1"  id="dropdown">
        <div class="dropdown-center">
          <button class="btn btn-secondary dropdown-toggle" type="button" data-bs-toggle="dropdown"
            aria-expanded="false">
            Sort by
          </button>
          <ul class="dropdown-menu">
            <li><a class="dropdown-item" href="#">My favourites</a></li>
            <li><a class="dropdown-item" href="#">My posts</a></li>
            <li><a class="dropdown-item" href="#">Action three</a></li>
          </ul>
        </div>
      </div>

      <!-- PUBLICADO -->

      <div v-for="comentario in comentarios" class="d-flex flex-wrap justify-content-center align-items-center p-2 border border-white rounded " style="background-color: #a9def9;">


       
        <div class="d-flex flex-wrap justify-content-center align-items-center ">
          <img class="rounded-circle" src="https://pbs.twimg.com/profile_images/1594738420697399304/oDxLfiFr_400x400.png"
          alt="..." style="height: 2rem;">

          <div class="d-flex flex-column ">
            
            <p>{{ comentario.coment }}</p>
            <div class="d-flex flex-wrap justify-content-between align-item-center gap-1">
              <i class="bi bi-suit-heart"></i>
              <i class="bi bi-envelope"></i>
              <i class="bi bi-emoji-smile"></i>
              <i class="bi bi-emoji-sunglasses"></i>
              <i class="bi bi-emoji-frown"></i>
              <i class="bi bi-hand-thumbs-up"></i>
            </div>
          </div>
          <button class="btn btn-dark" type="submit" @click="eliminarComentario(comentario.id)"> <strong>
              &cross;
            </strong></button>
        </div>

      </div>
    </div>
  </div>

</template>
<style scoped>
#comments {

  min-height: 100vh;
  display: flex;
  align-items: center;
  background: linear-gradient(0.25turn, #a9def9, #f694c1, #ffffff, #f694c1, #a9def9);
  /* background: linear-gradient(to bottom, rgba(255, 255, 255, 0.5), rgba(255, 255, 255, 0.5)), url(../img/imagen2.jpg); */
  background-size: cover;
  background-position: center;

}

#dropdown {
  min-height: auto;
}
</style>