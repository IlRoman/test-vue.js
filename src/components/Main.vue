<template>
  <kinesis-container>
    <main class="main">
      <div class="slider">
        <swiper class="slider__swiper swiper" :options="swiperOption" @slideChange="onSwipe">
          <swiper-slide class="slider__slide">
            <p
              @mousemove="showMessage"
              @mouseleave="mouseLeave"
              class="slider__slide_item"
            >InkLingerie</p>
          </swiper-slide>
          <swiper-slide class="slider__slide">
            <p
              @mousemove="showMessage"
              @mouseleave="mouseLeave"
              class="slider__slide_item"
            >InkLingerie</p>
          </swiper-slide>
          <div class="swiper-button-prev" slot="button-prev"></div>
          <div class="swiper-button-next" slot="button-next"></div>
        </swiper>
        <div class="slider__text">Drag Me</div>
      </div>
      <div class="image-container">
        <div class="vector-container">
          <img src="../img/Vector.svg" class="vector-container__image" />
        </div>
        <div class="image-container__central-image_box">
          <kinesis-element :strength="80" class="image-container__img2-elem">
            <img src="../img/Image2.png" class="image-container__img2" />
          </kinesis-element>
        </div>
        <div class="image-container__secondary-images">
          <div class="image-container__secondary-images_box-first">
            <kinesis-element :strength="60" class="image-container__img1-elem">
              <img src="../img/Image1.png" class="image-container__img1" />
            </kinesis-element>
          </div>
          <div class="image-container__secondary-images_box-second">
            <kinesis-element :strength="60" class="image-container__img3-elem">
              <img src="../img/Image3.png" class="image-container__img3" />
            </kinesis-element>
          </div>
        </div>
      </div>
    </main>
  </kinesis-container>
</template>

<script>
import Main from "@/components/Main";
import Vue from "vue";
import VueKinesis from "vue-kinesis";
import VueAwesomeSwiper from "vue-awesome-swiper";

Vue.use(VueKinesis);
Vue.use(VueAwesomeSwiper);

export default {
  name: "App",
  components: {
    Main
  },
  name: "swiper-example-navigation",
  title: "Navigation",

  data() {
    return {
      swiperOption: {
        navigation: {
          nextEl: ".swiper-button-next",
          prevEl: ".swiper-button-prev"
        }
      }
    };
  },

  methods: {
    onSwipe() {
      let element = document.querySelector(".image-container");
      let main = document.querySelector("main");
      element.remove();
      main.append(element);
    },

    showMessage(e) {
      let left = e.clientX + 25;
      let top = e.clientY + 10;
      let element = document.querySelector(".slider__text");
      element.setAttribute(
        "style",
        `left: ${left}px; top: ${top}px; display: block; opacity: 1;`
      );
    },

    mouseLeave() {
      document
        .querySelector(".slider__text")
        .setAttribute("style", "display: none; opacity: 1");
    }
  }
};
</script>

<style lang="scss" scoped>
.cursor {
  position: absolute;
  width: 50px;
  height: 50px;
  z-index: 2;

  &__img {
    width: 100%;
    height: 100%;
  }
}

@keyframes setOpacity {
  0% {
    opacity: 0;
  }
  100% {
    opacity: 1;
  }
}

.slider {
  width: 100%;
  height: 100%;
  position: absolute;
  display: flex;
  justify-content: center;
  align-items: center;
  text-align: center;

  &__text {
    transition: opacity 3s;
    display: none;
    position: absolute;
    z-index: 1;
    padding: 15px;
    background: #000;
    border-radius: 4px;
    color: #fff;
    animation: setOpacity 2s linear;
  }

  &__swiper {
    height: 20%;
    text-transform: uppercase;
    font-family: Schnyder Cond XL Demi;
  }

  &__slide {
    color: #580300;
    display: flex;
    justify-content: center;
    align-items: center;
    &_item {
      font-size: 5em;
      display: block;
    }
  }
}

main {
  height: 100vh;
  width: 100%;
}

.vector-container {
  position: absolute;
  z-index: -1;
  display: flex;
  justify-content: center;
  align-items: center;
  width: 608.38px;
  height: 726.48px;

  &__image {
    width: 100%;
    height: 100%;
  }

  @include for-large-up {
    width: 506px;
    height: 605px;
  }

  @include for-medium-up {
    width: 628px;
    height: 789px;
  }

  @include for-small-up {
    width: 392px;
    height: 493px;
  }

  @include for-e-small-up {
    width: 339px;
    height: 429px;
  }
}

.image-container {
  animation: setOpacity 3s linear;
  display: flex;
  justify-content: center;
  align-items: center;
  width: 100%;
  height: 100%;

  &__central-image_box {
    transform: rotate(1.5deg);
    position: absolute;
    width: 476px;
    height: 702px;

    @include for-large-up {
      width: 359px;
      height: 530px;
    }

    @include for-medium-up {
      width: 359px;
      height: 530px;
    }

    @include for-small-up {
      width: 273px;
      height: 403px;
    }

    @include for-e-small-up {
      width: 249.67px;
      height: 368.56px;
    }
  }

  &__secondary-images {
    position: relative;
    height: 100%;
    width: 100%;
    display: flex;
    justify-content: space-around;
    align-items: center;

    @include for-small-up {
      display: none;
    }

    @include for-e-small-up {
      display: none;
    }

    &_box-first {
      transform: rotate(1.1deg);
      width: 238px;
      height: 331px;

      @include for-large-up {
        width: 163px;
        height: 226px;
      }

      @include for-medium-up {
        width: 163px;
        height: 226px;
      }
    }

    &_box-second {
      transform: rotate(2.03deg);
      width: 345px;
      height: 238px;
      margin-top: 25%;

      @include for-large-up {
        width: 234px;
        height: 162px;
      }

      @include for-medium-up {
        width: 234px;
        height: 162px;
      }
    }
  }

  &__img1-elem {
    position: relative;
    overflow: hidden;
    width: 100%;
    height: 100%;
  }

  &__img2-elem {
    position: relative;
    overflow: hidden;
    width: 100%;
    height: 100%;
    display: flex;
    justify-content: center;
  }

  &__img3-elem {
    position: relative;
    overflow: hidden;
    width: 100%;
    height: 100%;
  }

  &__img1 {
    width: 230%;
    position: absolute;
    object-fit: cover;
    top: 87%;
    left: 50%;
    transform: translate(-50%, -50%);
  }

  &__img2 {
    width: 120%;
    position: absolute;
    object-fit: cover;
  }

  &__img3 {
    width: 100%;
    position: absolute;
    object-fit: cover;
    top: 50%;
    left: 50%;
    transform: translate(-50%, -50%);
  }
}
</style>