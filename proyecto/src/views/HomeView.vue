<script setup>
import { RouterLink, RouterView } from 'vue-router'
import { ref, reactive, onMounted } from 'vue'


</script>


<template>
  <main>
    <div class="d-flex flex-wrap justify-content-center align-item-center ">
      
      
      <div class="wrap">
        <div class="text-black text-center d-flex flex-column justify-content-center align-item-center p-5 gap-1">

          <button type="button" class="btn btn-outline-dark text-black" style="background-color: #ffffff;"> <a
              class="link" href="#welcome">
              <h1>WELCOME <i class="bi bi-plus-circle-fill"></i></h1>
            </a></button>
          <button type="button" class="btn btn-outline-dark text-black" style="background-color: #ffffff;"><a
              class="link" href="#terms">
              <h1>TERMS AND DEFINITIONS <i class="bi bi-plus-circle-fill"></i></h1>
            </a></button>
          <button type="button" class="btn btn-outline-dark text-black" style="background-color: #ffffff;"><a
              class="link" href="#news">
              <h1>NEWS <i class="bi bi-plus-circle-fill"></i></h1>
            </a></button>
          <button type="button" class="btn btn-outline-dark text-black" style="background-color: #ffffff;"><a
              class="link" href="#comments">
              <h1>COMMENTS <i class="bi bi-plus-circle-fill"></i></h1>
            </a></button>
        </div>
      </div>
    </div>
    <div>




      <div class="p-2 d-flex flex-wrap justify-content-center align-item-center " id="welcome">
        <h3>DO YOU WANT TO DONATE??</h3>
        <RouterLink to="/donation"><button type="button" class="btn btn-outline-dark text-black"
            style="background-color: #ffffff;"> <a class="" href="">
              DONATION
            </a></button></RouterLink>

      </div>


      <div class="p-2 d-flex flex-wrap justify-content-center align-item-center " id="welcome">
        <h3>WELCOME</h3>
        <p>Somos una organizacion que reconoce que la exclusion y discriminacion desde la niñez afecta directamente la
          capacidad 
          de gozar los derechos humanos, lo que conlleva en dificultad y/o incapacidad para concluir estudios.
          Entendemos que resulta necesario impulsar la reduccion de desigualdad hasta su eliminacion. Nuestra medida de
          accion es acompañar en alfabetizacion digital para una posterior insercion sociolaboral en el area IT de
          personas travestis, transexuales y transgeneros y para el acompañamiento a empresas que deseen brindas un
          empleo formal y/o implementar un espacio de trabajo inclusivo.</p>
      </div>
      <div class="p-2 d-flex flex-wrap justify-content-center align-item-center  " id="terms">
        <h3>TERMS AND DEFINITIONS</h3>

        <ul>
          <li> <strong>Sexo: </strong>Concepto biológico que diferencia a las personas entre hombres y mujeres, y que
            viene
            otorgado al nace en función de la genitalidad de la persona.</li>
          <li> <strong>Intersexual: </strong>Persona que nace con los atributos sexuales de hombre y de mujer. La
            identidad de género de estas personas pueden ser de hombre, de mujer, de ambos o de ninguno. La letra 'I'
            del colectivo LGTBI representa a estas personas. </li>

          <li> <strong>Género: </strong>El género es la construcción social del sexo, es decir, la forma (y los
            estereotipos)
            en la que la sociedad define a los hombres y a las mujeres, independientemente de sus genitales. </li>
          <li> <strong>Cis: </strong>Persona (hombre o mujer) que sí se identifica con el sexo asignado al nacer. Es lo
            contrario a trans. </li>
          <li> <strong>Transgénero: </strong>Persona que no se identifica con el género asignado al nacer, pero que no
            tiene por qué querer cambiarlo física y socialmente. </li>
          <li> <strong>Transexual: </strong>Persona (hombre o mujer) que no se identifica con el sexo asignado al nacer,
            y desea cambiarlo física y socialmente. En este concepto se agrupan, por ejemplo, las personas que aspiran a
            la reasignación quirúrgica del sexo. </li>
          <li> <strong>Travesti: </strong>Persona que se viste del género diferente con el que se identifica, pero que
            no tiene relación con su identidad. Hay que diferenciar este concepto con las 'drag queen', que son artistas
            que actúan vestidas con atuendos propios de mujer y exhiben maneras exageradamente femeninas. </li>
          <li> <strong>Personas no binarias: </strong>Personas que no se identifican con el género masculino ni
            femenino. Pueden considerarse un tercer género o ninguno de ellos. También se pueden llamar 'queer', cuya
            identidad trasciende al sistema binario de hombre-mujer. </li>
          <li> <strong>Orientación sexual: </strong>Atracción física, emocional y sexual hacia otra persona en función
            de su sexo. Entre ella se distingue la heterosexualidad (con el sexo contrario), homosexualidad (con el
            mismo sexo) y bisexualidad (con ambos sexos). Este concepto es independiente del sexo y del género. En
            cuanto a la homosexualidad, los términos más habituales con gays para los hombres y lesbianas para las
            mujeres. </li>
          <li> <strong>Expresión de género: </strong>Es la manifestación del género de una persona, y que incluye la
            forma de hablar o de vestir. </li>
        </ul>

      </div>

      <div class=" d-flex flex-column justify-content-center align-item-center  " id="news">
        <h1>NEWS</h1>
        <div class="d-flex flex-wrap justify-content-center align-item-center gap-1">
          <div class="card" style="width: 18rem;">
            <img
              src="https://static.eldiario.es/clip/69d05a31-fb11-4617-a63a-3fe8f065d5b2_16-9-discover-aspect-ratio_default_0.jpg"
              class="card-img-top" alt="...">
            <div class="card-body ">
              <h5 class="card-title">Día Internacional de la Memoria Trans: ¿por qué es conmemorado cada 20 de
                noviembre?</h5>
              <button type="button" class="btn d-flex justify-content-end"
                style="background-color: #f694c1;"><strong>More info
                </strong> </button>
            </div>
          </div>

          <div class="card" style="width: 18rem;">
            <img src="https://www.noticiasdel6.com/wp-content/uploads/2022/11/8m.jpg" class="card-img-top" alt="...">

            <div class="card-body">
              <h5 class="card-title">Ya se encuentra abierta la convocatoria 2023 para el Premio 8M. Tiene como
                objetivo exhibir y premiar obras realizadas por artistas mujeres, lesbianas, travestis, trans y no
                binarias.</h5>
              <button type="button" class="btn d-flex justify-content-end"
                style="background-color: #f694c1;"><strong>More info
                </strong> </button>
            </div>
          </div>

          <div class="card" style="width: 18rem;">
            <img src="https://fotos.perfil.com/2022/10/29/trim/950/534/20221029naomicabralcedocg-1444548.jpg?webp"
              class="card-img-top" alt="...">
            <div class="card-body">
              <h5 class="card-title">Confirman que la trans argentina fue asesinada y detienen al último cliente</h5>

              <button type="button" class="btn d-flex justify-content-end"
                style="background-color: #f694c1;"><strong>More info
                </strong> </button>
            </div>
          </div>

        </div>
      </div>





      <!-- OPINIONES -->
      <!-- <div class="container">
        <img src="bandmember.jpg" alt="Avatar" style="width:90px">
        <p><span>Chris Fox.</span> CEO at Mighty Schools.</p>
        <p>John Doe saved us from a web disaster.</p>
      </div>

      <div class="container">
        <img src="avatar_g2.jpg" alt="Avatar" style="width:90px">
        <p><span>Rebecca Flex.</span> CEO at Company.</p>
        <p>No one is better than John Doe.</p>
      </div> -->





    </div>




  </main>
</template>
<style scoped>
.wrap {
  width: 100vw;
  height: 100vh;
  display: flex;
  align-items: center;
  justify-content: center;

  background: linear-gradient(to bottom, rgba(255, 255, 255, 0.5), rgba(255, 255, 255, 0.5)), url(../img/imagen1.jpg);
  background-size: cover;
  background-position: center;

}

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

#welcome {

  min-height: 100vh;
  display: flex;
  align-items: center;
  justify-content: center;
  background: linear-gradient(0.25turn, #a9def9, #f694c1, #ffffff, #f694c1, #a9def9);
  /* background: linear-gradient(to bottom, rgba(255, 255, 255, 0.5), rgba(255, 255, 255, 0.5)), url(../img/imagen2.jpg); */
  background-size: cover;
  background-position: center;

}

#terms {

  min-height: 100vh;
  display: flex;
  align-items: center;
  justify-content: center;
  background: linear-gradient(0.25turn, #a9def9, #f694c1, #ffffff, #f694c1, #a9def9);
  /* background: linear-gradient(to bottom, rgba(255, 255, 255, 0.5), rgba(255, 255, 255, 0.5)), url(../img/imagen2.jpg); */
  background-size: cover;
  background-position: center;

}

#news {

  min-height: 100vh;
  display: flex;
  align-items: center;
  justify-content: center;
  background: linear-gradient(0.25turn, #a9def9, #f694c1, #ffffff, #f694c1, #a9def9);
  /* background: linear-gradient(to bottom, rgba(255, 255, 255, 0.5), rgba(255, 255, 255, 0.5)), url(../img/imagen2.jpg); */
  background-size: cover;
  background-position: center;

}
</style>
