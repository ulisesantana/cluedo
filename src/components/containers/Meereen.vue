<template>
  <clues-list :clues="data" @update="saveClues"></clues-list>
</template>

<script>
  import Clues from '../Clues';
  import data from '../data/meereen.json';

  export default {
    name: 'Meereen',
    components: {
      'clues-list': Clues,
    },
    data() {
      return {
        data,
      };
    },
    methods: {
      saveClues(clue) {
        console.log(clue);
      },
    },
  };
</script>

<!-- Add "scoped" attribute to limit CSS to this component only -->
<style scoped>

</style>
