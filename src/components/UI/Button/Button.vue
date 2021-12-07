<template>
  <button class="site-btn" :type="type" :disabled="disabled">
    {{ value }}
  </button>
</template>

<script>
export default {
  name: "Button",

  props: {
    value: String,
    disabled: {
      type: Boolean,
      default: false,
    },
    type: {
      type: String,
      default: "button",
    },
  },

  data() {
    return {};
  },
};
</script>

<style scoped>
.site-btn {
  background: cadetblue;
  color: white;
  font-size: 18px;
  font-weight: bold;
  outline: transparent;
  border: none;
  padding: 10px 15px;
  cursor: pointer;
  border-radius: 4px;
  transition: 0.15s;
}

.site-btn:hover {
  background: #457173;
}

.site-btn:focus {
  box-shadow: 3px 4px 2px 1px rgba(0, 0, 255, 0.2);
}
.site-btn:active {
  box-shadow: 3px 4px 2px 1px rgba(0, 0, 255, 0.2);
  background: #457173;
}
</style>