<template>
  <div class="home">
    <Header/>
    <EmptyBoard v-if="cards.length === 0"/>
    <Board v-else/>
  </div>
</template>

<script>
import Header from '@/components/Header'
import EmptyBoard from '@/components/EmptyBoard.vue';
import Board from '@/components/Board.vue';

import { mapState } from 'vuex';

export default {
  name: 'Home',
  computed: {
    ...mapState([
      'cards',
    ])
  },
  components: {
    Header,
    EmptyBoard,
    Board
  },
  methods: {
  }
}
</script>

<style lang="scss">
* {
  box-sizing: border-box;
}

h1,
h2,
h3,
h4,
h5,
h6 {
  margin: 0;
}

.home {
  text-align: center;
}
</style>
