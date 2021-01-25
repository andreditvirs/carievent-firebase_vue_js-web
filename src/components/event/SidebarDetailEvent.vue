<template>
  <section id="sidebar-detail-event" class="cointainer my-5">
    <div class="card mx-2">
      <div class="card-body px-4 my-4">
        <h3 class="mb-4">Detail Event</h3>
        <div class="my-2">
          <div class="row">
            <div class="col col-sm-3 mx-1">
              <div class="d-flex">
                <i class="fas fa-calendar" style="color: #0d1b2a; font-size: 20px;"></i>
                <p class="ml-2" style="font-size: 18px;font-weight: 500;">Tanggal</p>
              </div>
            </div>
            <div class="col">
              <p class="ml-2" style="font-size: 18px;">Rabu, 27 Oktober 2021</p>
            </div>
          </div>
          <div class="row">
            <div class="col col-sm-3 mx-1">
              <div class="d-flex">
                <i class="fa fa-clock" style="color: #0d1b2a; font-size: 20px;"></i>
                <p class="ml-2" style="font-size: 18px;font-weight: 500;">Waktu</p>
              </div>
            </div>
            <div class="col">
              <p class="ml-2" style="font-size: 18px;">19.30 - 21.30 WIB</p>
            </div>
          </div>
          <div class="row">
            <div class="col col-sm-3 mx-1">
              <div class="d-flex">
                <i class="fa fa-map-marker" style="color: #0d1b2a; font-size: 20px;"></i>
                <p class="ml-2" style="font-size: 18px;font-weight: 500;">Lokasi</p>
              </div>
            </div>
            <div class="col">
              <p class="ml-2" style="font-size: 18px;">Surabaya</p>
            </div>
          </div>
        </div>
        <p class="mb-2" style="font-size: 18px;">Peserta Event</p>
        <div class="d-flex w-100 h-100">
          <div class="col p-0 mx-1">
            <img src="assets/image/title-event/gambar.jpg" width="50" class="img-fluid border rounded-circle ">
          </div>
          <div class="col p-0 mx-1">
            <img src="assets/image/title-event/gambar.jpg" width="50" class="img-fluid border rounded-circle ">
          </div>
          <div class="col p-0 mx-1">
            <img src="assets/image/title-event/gambar.jpg" width="50" class="img-fluid border rounded-circle ">
          </div>
          <div class="col p-0 mx-1">
            <img src="assets/image/title-event/gambar.jpg" width="50" class="img-fluid border rounded-circle ">
          </div>
          <div class="col p-0 mx-1">
            <img src="assets/image/title-event/gambar.jpg" width="50" class="img-fluid border rounded-circle ">
          </div>
          <div class="col p-0 mx-1">
            <img src="assets/image/title-event/gambar.jpg" width="50" class="img-fluid border rounded-circle ">
          </div>
        </div>
      </div>
    </div>
  </section>
</template>

<script>
export default {
  name: 'SidebarDetailEvent',
  props: {
    //
  }
}
</script>

<!-- Add "scoped" attribute to limit CSS to this component only -->
<style scoped>
</style>
