<template>
  <div class="hello">
    <router-link to="meereen">Meereen</router-link>
    <router-link to="la-fortaleza-roja">La Fortaleza Roja</router-link>
  </div>
</template>

<script>
  export default {
    name: 'Home',
    data() {
      return {
        msg: 'Welcome to Your Vue.js PWA',
      };
    },
  };
</script>

<!-- Add "scoped" attribute to limit CSS to this component only -->
<style>
  @import url('https://fonts.googleapis.com/css?family=Dancing+Script|Great+Vibes');

  .hello {
    display: flex;
    flex-direction: column;
    flex-wrap: wrap;
    justify-content: space-around;
  }

  .hello a{
    margin: 20px auto;
    font-family: 'Dancing Script', cursive;
    font-size: 48px;
    background-color: #35495E;
    color: #ffffff;
    border-radius: 10px;
    padding: 20px;
  }

  h1, h2 {
    font-weight: normal;
  }

  ul {
    list-style-type: none;
    padding: 0;
  }

  li {
    display: inline-block;
    margin: 0 10px;
  }

  a {
    color: #35495E;
  }
</style>
