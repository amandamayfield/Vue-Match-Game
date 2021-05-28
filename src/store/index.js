import Vue from 'vue'
import Vuex from 'vuex'

Vue.use(Vuex)

export default new Vuex.Store({
  strict: true,
  state: {
    fullCards : [
      {color: 'blue', key: 1, isFlipped: false},
      {color: 'blue', key: 2, isFlipped: false},
      {color: 'green', key: 3, isFlipped: false},
      {color: 'green', key: 4, isFlipped: false},
      {color: 'orange', key: 5, isFlipped: false},
      {color: 'orange', key: 6, isFlipped: false},
      {color: 'purple', key: 7, isFlipped: false},
      {color: 'purple', key: 8, isFlipped: false},
      {color: 'red', key: 9, isFlipped: false},
      {color: 'red', key: 10, isFlipped: false},
      {color: 'yellow', key: 11, isFlipped: false},
      {color: 'yellow', key: 12, isFlipped: false},
      {color: 'pink', key: 13, isFlipped: false},
      {color: 'pink', key: 14, isFlipped: false},
      {color: 'teal', key: 15, isFlipped: false},
      {color: 'teal', key: 16, isFlipped: false},
      {color: 'light-blue', key: 17, isFlipped: false},
      {color: 'light-blue', key: 18, isFlipped: false},
      {color: 'violet', key: 19, isFlipped: false},
      {color: 'violet', key: 20, isFlipped: false},
    ],
    cards: [],
    flippedCards: [],
    matchedCards: [],
    status: 'Start!', 
    tries: 0, 
    size: null,
    won: 'not-won'
  },
  mutations: {
    resetGameBoard(state, {size, newCards}) {
      state.cards = newCards;
      state.tries = 0;
      state.status = 'Start';
      state.size = size;
      state.won = 'not-won';
    },
    flipCardHandler(state, {newCards, cardIndex, cardId}) {
      newCards[cardIndex].isFlipped = !newCards[cardIndex].isFlipped;

      state.cards = newCards;

      if (state.flippedCards.length < 2) {
        state.flippedCards.push(cardId)
      }
    },
    matchCardHandler(state) {
      let cardOneIndex = state.cards.findIndex(c => {
        return c.key === state.flippedCards[0];
      });

      let cardTwoIndex = state.cards.findIndex(c => {
        return c.key === state.flippedCards[1];
      });

      let newCards = [...state.cards];

      if (state.cards[cardOneIndex].color !== state.cards[cardTwoIndex].color) {
        newCards[cardOneIndex].isFlipped = false;
        newCards[cardTwoIndex].isFlipped = false;

        let newTries = state.tries + 1;

        state.cards = newCards;
        state.status = 'No match!';
        state.tries = newTries;
      } else {
        state.status = 'Match!';
        
        const result = newCards.filter(card => {
          return card.isFlipped === false;
        });

        if (result.length === 0) {
          // try to figure out better timing
          state.status = 'WINNER';
          state.won = 'won';
        }
      }

      state.flippedCards = [];
    },
  },
  actions: {
    resetGameBoard({commit, state}, size) {
      let newCards = state.fullCards.map(card => {
        return {...card}
      });
      
      if (size === 'small') {
        newCards = newCards.slice(0, 12);
      } else if (size === 'medium') {
        newCards = newCards.slice(0, 16);
      } 

      // Fisher-Yates Algorithm
      for (let i = newCards.length - 1; i > 0; i--) {
        const j = Math.floor(Math.random() * i);
        const temp = newCards[i];
        newCards[i] = newCards[j];
        newCards[j] = temp;
      }

      commit('resetGameBoard', {size, newCards});
    },
    flipCardHandler({commit, state, dispatch}, cardId) {
      if (state.flippedCards.length === 2) {
        return;
      }

      let newCards = [...state.cards];
  
      const cardIndex = state.cards.findIndex(c => {
        return c.key === cardId;
      });

      commit('flipCardHandler', {newCards, cardIndex, cardId});

      if (state.flippedCards.length === 2) {
        // needed for a player to view the match temporarily
        setTimeout(() => {
          commit('matchCardHandler');
        }, 1500);
      }
    },

  },
  modules: {
  }
})
