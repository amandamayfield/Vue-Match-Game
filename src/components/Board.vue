<template>
  <div class="board-container">
    <div :class="won">
      <div class="board" :class="size">
        <div v-for="card in cards" :key="card.key" class="card-container">
          <Card :isFlipped="card.isFlipped" :cardColor="card.color" :id="card.key" />
        </div>
      </div>
    </div>
    <div v-if="status === 'WINNER'" class="win-box">
      <div class="win-box__container">
        <div class="win-box__border">
          <h3>You won the game!</h3>
        </div>
      </div>
    </div>
  </div>
</template>

<script>
import Card from '@/components/Card.vue';

import { mapState } from 'vuex';

export default {
  computed: {
    ...mapState([
      'won',
      'size',
      'cards',
      'status',
    ])
  },
  components: {
    Card
  },
};
</script>

<style lang="scss" scoped>
@import '../assets/colors.scss';

.card-container {
  padding: 20px;
}

.board {
  padding: 25px 50px;
}

.small,
.medium,
.large {
  display: grid;
}

.small {
  grid-template-columns: 33% 33% 33%;
}

.medium {
  grid-template-columns: 25% 25% 25% 25%;
}

.large {
  grid-template-columns: 20% 20% 20% 20% 20%;
}

.not-won {
  background: $white;
  height: 100%;
  width: 100%;
  opacity: 1;
  left: 0;
  position: absolute;
  padding: 0;
  transition: opacity .5s;
}

.won {
  opacity: .2;
  transition: opacity .5s;
}

.win-box {
  position: absolute;
  box-shadow: 0px 0px 45px -15px rgba(0, 0, 0, 0.75);
  right: 30%;
  top: 300px;
  background-color: $dark-teal;
  border-radius: 15px;
  color: $white;
  font-size: 48px;
  &__border {
    padding: 12px;
    & h3 {
      padding: 50px;
      border: 3px solid $tomato;
      border-radius: 15px;
    }
  }
}
</style>