<template>
<div>
<slot></slot>
</div>
</template>

<script>
export default {
    name: 'DialogueBox'
}
</script>

<style scoped>


div {
    position: relative;
    top: 34px;
    height: 250px;
    width: 1532px;
    background-color: aliceblue;
    border: 2px solid aliceblue;
    z-index: 1; /* Set the z-index to 1 or any other value based on your requirements */
  }
</style>
