<template>
  <div class="modal">
    <div class="modal__overlay" @click="$emit('close')"></div>
    <div class="modal__body">
      <div class="modal__content">
        <div class="modal__close">
          <button @click="$emit('close')">+</button>
        </div>
        <slot name="content"> </slot>
      </div>
    </div>
  </div>
</template>

<script>
export default {
  name: "ModalContainer",

  data() {
    return {};
  },

  methods: {},
};
</script>

<style scoped>
.modal {
  position: fixed;
  left: 0;
  top: 0;
  width: 100%;
  height: 100%;
}

.modal__overlay {
  position: absolute;
  left: 0;
  top: 0;
  width: 100%;
  height: 100%;
  background-color: rgba(0, 0, 0, 0.46);
}

.modal__body {
  margin: 0 auto;
  overflow-y: auto;
  margin-top: 5%;
}

.modal__content {
  position: relative;
  margin: 0 auto;
  width: 470px;
}

.modal__close {
  position: absolute;
  right: 40px;
  top: 10px;
  z-index: 1;
}

.modal__close button {
  background: transparent;
  border: 0;
  outline: 0;
  font-size: 26px;
  font-weight: bold;
  transform: rotate(45deg);
  position: relative;
  cursor: pointer;
}

.modal__close button:before {
  content: "";
  position: absolute;
  width: 40px;
  height: 40px;
  left: 50%;
  top: 50%;
  transform: translate(-50%, -50%);
  opacity: 0.5;
}
</style>