<template>
  <div>
    <div style="height: 200px;"></div>
    <div class="container mt-5">
      <h4 class="fw-bold text-center">Let me show you</h4>
      <h1 class="fs-1 fw-bold text-center" style="color: #00ABB3;">whyisitreal</h1>
      <div class="d-flex justify-content-center py-4">
        <button @click="goSignup" class="btn btn-primary mb-2" style="color: #00ABB3; border: white; background-color: white; box-shadow: 0 4px 4px -2px black;">join us</button>
      </div>
    </div>
  </div>
</template>

<script>
export default {
  name: 'MainView',
  methods: {
    goSignup() {
      this.$router.push({ name:'signup' })
    }
  }
}
</script>

<style>

</style>