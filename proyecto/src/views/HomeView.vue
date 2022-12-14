<script setup>
import { RouterLink, RouterView } from 'vue-router'
import { ref, reactive, onMounted } from 'vue'


</script>


<template>
  <main>
    <div class="d-flex flex-wrap justify-content-center align-item-center mt-5">

      <div class="wrap">
        <img src="../img/welcome.png" style="height: 180px;" alt="">
        <div class="text-black d-flex">
          <a class="link" href="">
            <h1>W</h1>
          </a>
          <a class="link" href="">
            <h1>E</h1>
          </a>
          <a class="link" href="">
            <h1>L</h1>
          </a>
          <a class="link" href="">
            <h1>C</h1>
          </a>
          <a class="link" href="">
            <h1>O</h1>
          </a>
          <a class="link" href="">
            <h1>M</h1>
          </a>
          <a class="link" href="">
            <h1>E</h1>
          </a>

        </div>


      </div>
    </div>
    <div>

      <div class="p-2 d-flex flex-wrap justify-content-center align-item-center " id="menu1">

        <div class="text-black text-center d-flex flex-column justify-content-center align-item-center p-4 gap-1">
          <button type="button" class="btn btn-outline-dark text-black" style="background-color: #ffffff;"> <a
              class="link" href="#donation">
              <h1>Donation <i class="bi bi-plus-circle-fill"></i></h1>
            </a></button>
          <button type="button" class="btn btn-outline-dark text-black" style="background-color: #ffffff;"> <a
              class="link" href="#aboutUs">
              <h1>About us? <i class="bi bi-plus-circle-fill"></i></h1>
            </a></button>
          <button type="button" class="btn btn-outline-dark text-black" style="background-color: #ffffff;"> <a
              class="link" href="#aboutCommunity">
              <h1>About the community <i class="bi bi-plus-circle-fill"></i></h1>
            </a></button>
          <button type="button" class="btn btn-outline-dark text-black" style="background-color: #ffffff;"><a
              class="link" href="#aboutProgram">
              <h1>About the program <i class="bi bi-plus-circle-fill"></i></h1>
            </a></button>
          <button type="button" class="btn btn-outline-dark text-black" style="background-color: #ffffff;"><a
              class="link" href="#programStages">
              <h1>Program stages <i class="bi bi-plus-circle-fill"></i></h1>
            </a></button>
          <button type="button" class="btn btn-outline-dark text-black" style="background-color: #ffffff;"><a
              class="link" href="#news">
              <h1>News <i class="bi bi-plus-circle-fill"></i></h1>
            </a></button>
        </div>
      </div>

      <div class="p-2 d-flex flex-column justify-content-center align-item-center " id="donation">
        <h3>DO YOU WANT TO DONATE?</h3>
        <img src="../img/8b44415e24734ea741aebd495818b2f1-pride-personajes-vinylcolor-4.png" style="height: 170px;"
          alt="">
        <RouterLink to="/donation"><button type="button" class="btn btn-outline-dark text-black"
            style="background-color: #ffffff;"> <a class="link" href="#welcome">

              <h1>Donation </h1>
            </a></button></RouterLink>

      </div>

      <div class="p-2 d-flex flex-column justify-content-center align-item-center " id="aboutUs">
        <h3>ABOUT US</h3>
        <img src="../img/logo.png" style="height: 200px;" alt="">
        <p>
          We are an organization willing to generate changes in the lives of the Transgender, transsexual and
          transvestite community.
        </p>
      </div>
      <div class="p-2 d-flex flex-wrap justify-content-center align-item-center  " id="aboutCommunity">
        <h3>TERMS AND DEFINITIONS</h3>

        <ul>
          <li> <strong>Sex: </strong>Biological concept that differentiates people between men and women, and that is granted at birth based on the person's genitalia.</li>
          <li> <strong>Intersex: </strong>A person born with the sexual attributes of a man and a woman. The gender identity of these people can be male, female, both or neither. The letter i' of the LGTBI collective represents these people. </li>

          <li> <strong>Gender: </strong>Gender is the social construction of sex, that is, the form (and the stereotypes) in which society defines men and women, regardless of their genitalia.</li>
          <li> <strong>Cis: </strong>Person (male or female) who does identify with the sex assigned at birth. is it contrary to trans. </li>
          <li> <strong>Transgender: </strong>A person who does not identify with the gender assigned at birth, but who does not
            you have to want to change it physically and socially. </li>
          <li> <strong>Transsexual: </strong>Person (male or female) who does not identify with the sex assigned at birth, and you want to change it physically and socially. This concept groups, for example, people who aspire to surgical sex reassignment. </li>
          <li> <strong>Transvestite: </strong>A person who dresses as a different gender with which they identify, but who It has nothing to do with your identity. We must differentiate this concept with the 'drag queen', who are artists who act dressed in women's attire and exhibit exaggeratedly feminine mannerisms.</li>
          <li> <strong>non-binary people: </strong>People who do not identify as male or feminine. They can be considered a third gender or neither. They can also be called 'queer', whose identity transcends the binary system of man-woman. </li>
          <li> <strong>Sexual orientation: </strong>Physical, emotional and sexual attraction towards another person based on
            of their sex. Among them, heterosexuality (with the opposite sex), homosexuality (with the same sex) and bisexuality (with both sexes). This concept is independent of sex and gender. In Regarding homosexuality, the most common terms with gays for men and lesbians for women women. </li>
          <li> <strong>Gender expression: </strong>It is the manifestation of the gender of a person, and that includes the way of speaking or dressing. </li>
        </ul>

      </div>

      <div class="p-2 d-flex flex-column justify-content-center align-item-center " id="aboutProgram">
        <h3>ABOUT THE PROGRAM</h3>
        <img src="../img/manos.png" style="height: 150px;" alt="">
        <p>Our measure of action is to accompany transvestites, transsexuals and transgender people in digital literacy
          for a subsequent socio-labour insertion in the IT area and to support companies that wish to provide formal
          employment and/or implement an inclusive work space.
        </p>
      </div>

      <div class="p-2 d-flex flex-column justify-content-center align-item-center " id="programStages">
        <h3>PROGRAM STATES</h3>
        <div class="d-flex flex-wrap justify-content-center align-item-center">
          <div>
            <h5>Stages for people</h5>
            <ul>
              <li> <strong>Inscription </strong></li>
              <li> <strong>Diagnostic test </strong></li>

              <li> <strong>Digital literacy </strong> </li>
              <li> <strong>Practices </strong></li>
              <li> <strong>labor insertion </strong></li>
              <li> <strong>tracing </strong></li>
              <li> <strong>Closing </strong></li>

            </ul>
          </div>
          <div>
            <ul>
              <h5>Stages for companies</h5>
              <li> <strong>Inscription </strong></li>
              <li> <strong>compliance agreement </strong></li>

              <li> <strong>Days of sensitivity </strong> </li>
              <li> <strong>Insertion of personnel </strong></li>
              <li> <strong>labor insertion </strong></li>
              <li> <strong>tracing </strong></li>
              <li> <strong>Hiring </strong></li>
              <li> <strong>Closing </strong></li>

            </ul>
          </div>
        </div>
        <img src="../img/imagen3.jpg" style="height: 50%; width: 50%; border-radius: 10%;" alt="">
      </div>

      <div class=" d-flex flex-column justify-content-center align-item-center p-2" id="news">
        <h1>NEWS</h1>
        <div class="d-flex flex-wrap justify-content-center align-item-center gap-1">
          <div class="card" style="width: 18rem;">
            <img
              src="https://static.eldiario.es/clip/69d05a31-fb11-4617-a63a-3fe8f065d5b2_16-9-discover-aspect-ratio_default_0.jpg"
              class="card-img-top" alt="...">
            <div class="card-body ">
              <h5 class="card-title">Día Internacional de la Memoria Trans: ¿por qué es conmemorado cada 20 de
                noviembre?</h5>
              <!-- <button type="button" class="btn btn-outline-dark text-black" style="background-color: #ffffff;"> <a
    class="link" href="#welcome">
    <h1>More info </h1>
  </a></button> -->
            </div>
          </div>

          <div class="card" style="width: 18rem;">
            <img src="https://www.noticiasdel6.com/wp-content/uploads/2022/11/8m.jpg" class="card-img-top" alt="...">

            <div class="card-body">
              <h5 class="card-title">Ya se encuentra abierta la convocatoria 2023 para el Premio 8M. Tiene como
                objetivo exhibir y premiar obras realizadas por artistas mujeres, lesbianas, travestis, trans y no
                binarias.</h5>
              <!-- <button type="button" class="btn btn-outline-dark text-black" style="background-color: #ffffff;"> <a
    class="link" href="#welcome">
    <h1>More info </h1>
  </a></button> -->
            </div>
          </div>

          <div class="card" style="width: 18rem;">
            <img src="https://fotos.perfil.com/2022/10/29/trim/950/534/20221029naomicabralcedocg-1444548.jpg?webp"
              class="card-img-top" alt="...">
            <div class="card-body">
              <h5 class="card-title">Confirman que la trans argentina fue asesinada y detienen al último cliente</h5>

              <!-- <button type="button" class="btn btn-outline-dark text-black" style="background-color: #ffffff;"> <a
    class="link" href="#welcome">
    <h1>More info </h1>
  </a></button> -->
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
  flex-direction: column;
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

#aboutUs {

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

#donation {

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

#aboutCommunity {

  min-height: 100vh;
  display: flex;
  align-items: center;
  justify-content: center;
  background: linear-gradient(0.25turn, #a9def9, #f694c1, #ffffff, #f694c1, #a9def9);
  /* background: linear-gradient(to bottom, rgba(255, 255, 255, 0.5), rgba(255, 255, 255, 0.5)), url(../img/imagen2.jpg); */
  background-size: cover;
  background-position: center;

}

#aboutProgram {

  min-height: 100vh;
  display: flex;
  align-items: center;
  justify-content: center;
  background: linear-gradient(0.25turn, #a9def9, #f694c1, #ffffff, #f694c1, #a9def9);
  /* background: linear-gradient(to bottom, rgba(255, 255, 255, 0.5), rgba(255, 255, 255, 0.5)), url(../img/imagen2.jpg); */
  background-size: cover;
  background-position: center;

}


#programStages {

  min-height: 100vh;
  display: flex;
  align-items: center;
  justify-content: center;
  background: linear-gradient(0.25turn, #a9def9, #f694c1, #ffffff, #f694c1, #a9def9);
  /* background: linear-gradient(to bottom, rgba(255, 255, 255, 0.5), rgba(255, 255, 255, 0.5)), url(../img/imagen2.jpg); */
  background-size: cover;
  background-position: center;

}


#menu1 {

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
