<template>
<section class="cointainer carakerja">
      <div class="row">
        <div class="col-lg-6 my-4">
          <div class="card p-5">
            <img class="image-hero px-5" src="assets/image/peserta.png" alt="ilustrasi peserta">
            <h4 class="mx-auto my-4">Peserta</h4>
            <div class="row peserta">
              <div class="col-12 my-1">
                <i class="fa fa-search text-28 color-3 my-auto mx-auto"></i>
                <span>Temukan</span>
              </div>
              <div class="col-12 d-flex my-1">
                <span class="my-auto ml-auto">Tandai</span>
                <i class="fa fa-bookmark text-28 color-3 my-auto mx-2"></i>
              </div>
              <div class="col-12 my-1">
                <i class="fa fa-user-check text-28 color-3 my-auto mx-auto"></i>
                <span>Hadiri</span>
              </div>
              <div class="col-12 my-1 d-flex">
                <span class="my-auto ml-auto">Bagikan</span>
                <i class="fa fa-share-alt text-28 color-3 my-auto mx-2"></i>
              </div>
            </div>
          </div>
        </div>

        <div class="col-lg-6 my-4">
          <div class="card p-5">
            <img class="image-hero px-5" src="assets/image/penyelenggara.png" alt="ilustrasi penyelenggara">
            <h4 class="mx-auto my-4">Penyelenggara</h4>
            <div class="row mb-3">
              <div class="col-12 my-2">
                <div class="row">
                  <div class="col-1 mr-1">
                    <i class="fa fa-calendar-day text-24 color-3 my-auto mx-auto"></i>
                  </div>
                  <div class="col-10">
                    <span>Selenggarakan event</span>
                  </div>
                </div>
              </div>
              <div class="col-12 my-2">
                <div class="row">
                  <div class="col-1 mr-1">
                    <i class="fa fa-ticket-alt text-24 color-3 my-auto mx-auto"></i>
                  </div>
                  <div class="col-10">
                    <span>Manajemen tiket dan kelola penjualan</span>
                  </div>
                </div>
              </div>
              <div class="col-12 my-2">
                <div class="row">
                  <div class="col-1 mr-1">
                    <i class="fa fa-file-alt text-28 color-3 my-auto mx-auto"></i>
                  </div>
                  <div class="col-10">
                    <span>Dapatkan laporan akhir dari event Anda</span>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
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
