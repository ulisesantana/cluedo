<template>
  <section>
    <span :class="{strikethrough:clue.isFree}" @click="toggleIsFree">{{clue.text}}</span>
    <span :class="{active:clue.hasCard, inactive:!clue.hasCard}" @click="toggleHasCard">
      <i class="fas fa-search"></i>
    </span>
  </section>
</template>

<script>
  export default {
    name: 'clue',
    props: ['clue'],
    data() {
      return {};
    },
    methods: {
      toggleIsFree() {
        this.clue.isFree = !this.clue.isFree;
        this.emitUpdate();
      },
      toggleHasCard() {
        this.clue.hasCard = !this.clue.hasCard;
        this.toggleIsFree();
      },
      emitUpdate() {
        this.$emit('update', this.clue);
      },

    },
  };
</script>

<style>
  section {
    display: flex;
    flex-direction: row;
    /*flex-wrap: wrap;*/
  }

  i {
    margin-left: 10px;
  }

  .strikethrough {
    text-decoration: line-through;
    opacity: 0.5;
  }

  .active {
    color: #000000;
  }

  .inactive {
    color: rgba(120, 120, 120, 0.1);
  }

</style>
