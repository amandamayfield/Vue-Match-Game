<template>
   <div class="header">
      <div class="header-top">
        <div class="header-title">
          <h1>Matching Game</h1>
        </div>
        <div class="header-content">
          <div class="header-content__tries">
            <h2>Tries: {{tries}}</h2>
          </div>
          <div class="header-content__status">
            <h2>{{status}}</h2>
          </div>
          <div class="header-content__reset">
            <button @click="resetGameBoard('small')" class="reset-btn">
              New Game
            </button>
          </div>
        </div>
      </div>
      <div class="header-bottom">
        <button @click="resetGameBoard('small')" class="size-btn">
          Small Board
        </button>
        <button @click="resetGameBoard('medium')" class="size-btn">
          Medium Board
        </button>
        <button @click="resetGameBoard('large')" class="size-btn">
          Large Board
        </button>
      </div>
    </div>
</template>

<script>
import { mapState } from 'vuex';

export default {
  computed: {
    ...mapState([
      'tries',
      'status',
    ])
  },
  methods: {
    resetGameBoard(size) {
      this.$store.dispatch('resetGameBoard', size);
    }
  }
};
</script>

<style scoped lang="scss">
@import '../assets/colors.scss';

.header {
  background-color: $oatmeal;
  margin: 0;
  &-top {
    display: flex;
    padding: 20px;
  }
  &-bottom {
    display: flex;
    padding: 10px;
    background-color: $tomato;
    justify-content: space-evenly;
  }
  &-content,
  &-title {
    flex: 0 1 50%;
    align-self: center;
  }
  &-title h1 {
    font-size: 60px;
    font-family: 'Prompt', sans-serif;
    color: $dark-teal;
  }
  &-content {
    padding: 0 50px;
    display: flex;
    align-items: center;
    &__reset,
    &__tries {
      flex: 1 0;
    }
    &__tries h2 {
      font-size: 30px;
      font-family: 'Prompt', sans-serif;
      color: $tomato;
    }
    &__status {
      flex: 1;
      & h2 {
        font-size: 30px;
        font-family: 'Prompt', sans-serif;
        color: $bright-teal;
      }
    }
  }
}

.reset-btn {
  padding: 10px 20px;
  font-family: 'Prompt', sans-serif;
  background-color: $red;
  color: $white;
  margin: 8px;
  font-size: 18px;
  border-radius: 10px;
  &:hover {
    background-color: $tomato;
    font-weight: bold;
  }
}

.size-btn {
  padding: 5px 15px;
  font-family: 'Prompt', sans-serif;
  background-color: $dark-teal;
  color: $white;
  margin: 8px;
  font-size: 16px;
  border-radius: 10px;
  border: 1px solid $white;
  &:hover {
    background-color: $bright-teal;
    font-weight: bold;
  }
}
</style>