<template>
  <Banner />
  <EventTerpopuler />
  <EventTerdekat />
  <Kategori />
</template>

<script>

import Banner from './Banner'
import Kategori from './Kategori'
import EventTerpopuler from './EventTerpopuler'
import EventTerdekat from './EventTerdekat'

export default {
  name: 'Beranda',
  components: {
    Banner,
    EventTerpopuler,
    EventTerdekat,
    Kategori,
  }
}
</script>

<!-- Add "scoped" attribute to limit CSS to this component only -->
<style scoped>
</style>
