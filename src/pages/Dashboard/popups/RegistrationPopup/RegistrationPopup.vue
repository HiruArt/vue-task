<template>
  <ModalContainer @close="$emit('close')">
    <template slot="content">
      <Registration/>
    </template>
  </ModalContainer>
</template>

<script>
import ModalContainer from "../../../../components/ModalContainer/ModalContainer.vue"
import Registration from "../../../../components/Registration/Registration.vue"

export default {
  name: "RegistrationPopup",

  components: {
    ModalContainer,
    Registration
  },

  data(){
    return{}
  }

}
</script>

<style scoped>

</style>