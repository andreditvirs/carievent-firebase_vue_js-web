<template>
    <section class="container">
    <div class="card my-5 p-2">
      <div class="card-body ml-5">
        <div class="row">
          <div class="col-md-4">
            <div class="middle">
              <img class="image-hero" src="assets/image/carakerja-kontak.png" alt="ilustrasi kontak">
            </div>
          </div>
          <div class="col-md-8 pl-5 mt-4">
            <h3>Masih bingung?</h3>
            <p>Jangan ragu, langsung aja hubungi kami!</p>
            <form>
              <div class="form-row">
                <div class="col">
                  <input type="text" class="form-control" placeholder="Nama">
                </div>
                <div class="col">
                  <input type="text" class="form-control" placeholder="Alamat Email">
                </div>
              </div>
              <div class="form-row mt-2">
                <div class="col">
                  <input type="text" class="form-control" placeholder="Pesan">
                </div>
              </div>
              <button type="submit" class="btn button-hero py-3 px-4 mt-4">Kirim</button>
            </form>
          </div>
        </div>
      </div>
    </div>
  </section>
</template>

<script>
export default {
  name: 'Form',
  props: {
    // msg: String
  }
}
</script>

<!-- Add "scoped" attribute to limit CSS to this component only -->
<style scoped>
</style>
