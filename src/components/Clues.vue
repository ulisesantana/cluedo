<template>
  <div>
    <h1>{{clues.title}}</h1>
    <h2>Quién</h2>
    <ul>
      <li v-for="clue in clues.who">
        <clue :clue="clue" @update="transmitUpdate"></clue>
      </li>
    </ul>
    <h2>Dónde</h2>
    <ul>
      <li v-for="clue in clues.where">
        <clue :clue="clue" @update="transmitUpdate"></clue>
      </li>
    </ul>
    <h2>Qué</h2>
    <ul>
      <li v-for="clue in clues.what">
        <clue :clue="clue" @update="transmitUpdate"></clue>
      </li>
    </ul>

    <button @click="resetGame">Resetear partida</button>
  </div>
</template>

<script>
  import Clue from './Clue';

  export default {
    name: 'Clues',
    props: ['clues'],
    components: {
      clue: Clue,
    },
    data() {
      return {};
    },
    methods: {
      transmitUpdate(clue) {
        this.$emit('update', clue);
      },
      resetGame() {
        this.clues.who = this.clues.who.map(this.resetClue);
        this.clues.what = this.clues.what.map(this.resetClue);
        this.clues.where = this.clues.where.map(this.resetClue);
      },
      resetClue(clueToReset) {
        return {
          ...clueToReset,
          hasCard: false,
          isFree: false,
        };
      },
    },
  };
</script>

<!-- Add "scoped" attribute to limit CSS to this component only -->
<style scoped>
  @import url('https://fonts.googleapis.com/css?family=Dancing+Script|Great+Vibes');

  h1,h2,h3,h4,h5,h6{
    font-family: 'Dancing Script', cursive;
  }

  h1{
    font-size: 64px;
    text-align: center;
  }

  h2{
    font-size: 48px;
    margin-left: 20px;
  }

  ul{
    padding: 0;
    display: flex;
    flex-direction: column;
  }

  li {
    list-style: none;
    text-align: center;
    font-size: 36px;
    font-family: 'Great Vibes', cursive;
    margin: 10px auto
  }

  button{
    margin: 50px auto;
    display: block;
    background-color: #35495E;
    color: #ffffff;
    border-radius: 10px;
    padding: 20px;
  }
</style>
