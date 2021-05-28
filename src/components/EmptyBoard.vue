<template>
  <div class="empty-board">
    <div class="empty-board__image">
      <img alt="" src="../assets/cards.png" />
    </div>
    <div class="empty-board__title">Select a board to play!</div>
  </div>
</template>

<script>
  export default {
    
  }
</script>

<style lang="scss" scoped>
@import '../assets/colors.scss';

.empty-board {
  padding: 100px;
  &__title {
    padding-top: 30px;
    font-size: 60px;
    font-family: 'Prompt', sans-serif;
    color: $bright-teal;
  }
  &__image {
    margin: 0 auto;
    max-width: 250px;
    & img {
      width: 100%;
    }
  }
}
</style>