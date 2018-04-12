<template>
  <clues-list :clues="data"></clues-list>
</template>

<script>
  import Clues from '../Clues';
  import data from '../data/laFortalezaRoja.json';

  export default {
    name: 'LaFortalezaRoja',
    components: {
      'clues-list': Clues,
    },
    data() {
      return {
        data,
      };
    },
  };
</script>

<!-- Add "scoped" attribute to limit CSS to this component only -->
<style scoped>

</style>
