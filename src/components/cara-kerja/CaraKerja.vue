<template>
  <Banner />
  <Keunggulan />
  <Form />
</template>

<script>

import Banner from './Banner'
import Keunggulan from './Keunggulan'
import Form from './Form'

export default {
  name: 'CaraKerja',
  components: {
    Banner,
    Keunggulan,
    Form,
  }
}
</script>

<!-- Add "scoped" attribute to limit CSS to this component only -->
<style scoped>
</style>
