<template>
  <div>
    <div>
      <!-- Adjusted the order of attributes and removed self-closing tag style -->
      <input v-model="inputValue" type="text" placeholder="Введите SID"> <!-- Note the change here -->
    </div>
    <div>
      <button @click="logInputValue">Проверить голос</button>
    </div>
  </div>
</template>

<script>
export default {
  data() {
    return {
      inputValue: '', // This will hold the current value of the text field
    };
  },
  methods: {
    logInputValue() {
      // This method logs the current value of the text field to the console
      console.log(this.inputValue);
    },
  },
};
</script>

<style>
/* Add any styles for your page here */
input[type="text"] {
  margin-right: 10px;
}

button {
  cursor: pointer;
}
</style>
