<template>
<section id="main">
    <div class="row w-100">
      <div class="col-md-8">
        <DeskripsiEvent />
      </div>
      <div class="col-md-4">
        <SidebarDetailEvent />
        <SidebarKomentar />
      </div>
    </div>
  </section>
</template>

<script>

import SidebarDetailEvent from './SidebarDetailEvent'
import SidebarKomentar from './SidebarKomentar'
import DeskripsiEvent from './DeskripsiEvent'

export default {
  name: 'Main',
  components: {
    SidebarDetailEvent,
    SidebarKomentar,
    DeskripsiEvent,
  }
}
</script>

<!-- Add "scoped" attribute to limit CSS to this component only -->
<style scoped>
</style>
