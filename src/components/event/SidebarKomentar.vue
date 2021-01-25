<template>
  <section id="sidebar-komentar" class="cointainer my-5">
    <div class="card mx-2">
      <div class="card-body px-4">
        <h3 class="mb-4">Komentar</h3>
          <div class="komentar my-2">
            <div class="row">
              <div class="col-3 d-flex">
                <img src="assets/image/septi.jpg" class="user-image border rounded-circle my-auto">
              </div>
              <div class="col-6 px-2">
                <h6>Septian</h6>
                <p class="text-12 mb-0">Install tools apa aja ini ? buat persiapan</p>
              </div>
              <div class="col-3 d-flex">
                <i class="fa fa-reply text-28 color-3 my-auto mx-auto"></i>
              </div>
            </div>
          </div>

        <div class="d-flex">
          <div class="reply-komentar my-2 ml-auto">
            <div class="row">
              <div class="col-4 d-flex">
                <img src="assets/image/nab.jpg" class="user-image border rounded-circle my-auto">
              </div>
              <div class="col-7 px-2">
                <h6>Nabs</h6>
                <p class="text-12 mb-0">Pakai vscode aja sep</p>
              </div>
            </div>
          </div>
        </div>

        <hr>

        <form class="form-inline mx-auto w-100">
          <input class="form-control w-100 border-rounded" type="text" placeholder="Tuliskan Komentar Anda"
            aria-label="Search">
        </form>

        <div class="d-flex">
          <a href="#" class="btn bg-3 button-kirim my-2 ml-auto px-4">Kirim</a>
        </div>
      </div>
    </div>
  </section>
</template>

<script>
export default {
  name: 'SidebarKomentar',
  props: {
    // msg: String
  }
}
</script>

<!-- Add "scoped" attribute to limit CSS to this component only -->
<style scoped>
</style>
