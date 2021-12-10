<template>
  <label class="site-input">
    <span class="site-input__label" v-if="label">{{ label }}</span>
    <input
      :type="type"
      v-bind:value="value"
      v-on:input="$emit('input', $event.target.value)"
    />
  </label>
</template>

<script>
export default {
  name: "Input",

  props: {
    label: String,
    value: String,
    type: {
      type: String,
      default: "text",
    },
  },

  data() {
    return {};
  },
};
</script>

<style scoped>
.site-input {
  display: flex;
  flex-direction: column;
}

.site-input__label {
  margin-bottom: 5px;
  font-size: 14px;
}

.site-input input {
  font-size: 16px;
  font-weight: medium;
  padding: 10px 15px;
  background: white;
  border-radius: 4px;
  transition: 0.15s;
  border: 1px solid transparent;
}

.error input{
  border-color: red;
}
</style>