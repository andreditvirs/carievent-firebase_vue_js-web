<template>
  <nav class="navbar navbar-expand-md navbar-light sticky-top">
    <a class="navbar-brand" href="#"><img class="nav-logo ml-5 my-3" src="assets/logo/carievent.png"
        alt="logo carievent"></a>
    <button class="navbar-toggler m-3" type="button" data-toggle="collapse" data-target="#navbarsExampleDefault"
      aria-controls="navbarsExampleDefault" aria-expanded="false" aria-label="Toggle navigation">
      <span class="navbar-toggler-icon"></span>
    </button>

    <div class="collapse navbar-collapse" id="navbarsExampleDefault">
      <form class="form-inline w-50 mx-auto">
        <input class="form-control w-100" type="text" placeholder="Cari event disini" aria-label="Search">
      </form>
      <ul class="navbar-nav ml-auto">
        <li class="nav-item active p-3">
          <router-link to='/' class="nav-link text-center" >Beranda <span class="sr-only">(current)</span></router-link>
        </li>
        <li class="nav-item p-3">
          <router-link to='/cara-kerja' class="nav-link text-center">Cara Kerja</router-link>
        </li>
        <li class="nav-item p-3">
          <a class="nav-link text-center" href="#" data-toggle="modal" data-target="#masuk">Masuk</a>
        </li>
        <li class="nav-item daftar">
          <a class="nav-link text-center" href="#" data-toggle="modal" data-target="#daftar">Daftar</a>
        </li>
      </ul>
    </div>
  </nav>
</template>

<script>
export default {
  name: 'Header',
  props: {
    // msg: String
  }
}
</script>

<!-- Add "scoped" attribute to limit CSS to this component only -->
<style scoped>
</style>
