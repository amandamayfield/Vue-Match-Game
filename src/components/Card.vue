<template>
  <div @click="flipCard(id)" class="flip-container">
    <div class="card" :class="{'flipped': isFlipped}">
      <div class="front" :class="cardColor" ></div>
      <div class="back"></div>
    </div>
  </div>
</template>

<script>
  export default {
    props: ['isFlipped', 'cardColor', 'id'],
    methods: {
      flipCard(cardId) {
        this.$store.dispatch('flipCardHandler', cardId)
      }
    }
  }
</script>

<style lang="scss" scoped>
@import '../assets/colors.scss';

.flip-container {
  width: 100%;
  height: 100px;
  perspective: 800px;
}

.card {
  width: 100%;
  height: 100%;
  position: relative;
  cursor: pointer;
  transition: transform 1s;
  transform-style: preserve-3d;
}

.card.flipped {
  transform: rotateY(180deg);
  cursor: none;
}

.front,
.back {
  position: absolute;
  height: 100%;
  width: 100%;
  backface-visibility: hidden;
}

.front {
  height: 100px;
  border-radius: 10px;
  box-shadow: 0 1rem 2rem rgba(0, 0, 0, .25);
  transform: rotateY(180deg);
}

.back {
  background-image: linear-gradient(to right bottom, $card-gradient-bright, $card-gradient-dark);
  height: 100px;
  border-radius: 10px;
  box-shadow: 0 1rem 2rem rgba(0, 0, 0, .25);
}

.red {
  background-color: $red;
}

.blue {
  background-color: $blue;
}

.yellow {
  background-color: $yellow;
}

.green {
  background-color: $green;
}

.purple {
  background-color: $purple;
}

.orange {
  background-color: $orange;
}

.pink {
  background-color: $pink;
}

.teal {
  background-color: $teal;
}

.light-blue {
  background-color: $light-blue;
}

.violet {
  background-color: $violet;
}
</style>
