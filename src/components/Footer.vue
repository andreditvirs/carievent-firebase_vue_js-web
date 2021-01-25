<template>
<div>
    <footer>
    <div class="cointainer p-5">
        <div class="row w-100">
        <div class="col-md-4 p-4">
            <div class="row pb-4">
            <div class="col-sm-8">
                <img src="assets/image/carievent.png" alt="" class="img-fluid">
            </div>
            </div>
            <p><a href="">Masuk</a></p>
            <p><a href="">Daftar</a></p>
        </div>
        <div class="col-md-4 p-4">
            <h4 class="pb-2"><b>Temukan</b></h4>
            <p><a href="">Topik</a></p>
            <p><a href="">Kota</a></p>
            <p><a href="">Bantuan</a></p>
        </div>
        <div class="col-md-4 p-4">
            <div class="row pb-4 px-auto">
            <div class="col-sm-4 px-0">
                <img src="assets/image/getinplaystore.png" alt="" width="140px" class="img-fluid">
            </div>
            <div class="col-sm-1"></div>
            <div class="col-sm-6 px-0">
                <img src="assets/image/getinappstore.png" alt="" width="140px" class="img-fluid">
            </div>
            </div>
            <div class="row">
            <h4 class="pb-2 w-100"><b>Ikuti Kami</b></h4>
            <div class="row w-100 px-4">
                <img src="assets/image/fb.png" alt="" width="15%" class="img-fluid">
                <img src="assets/image/ig.png" alt="" width="15%" class="img-fluid mx-2">
                <img src="assets/image/tw.png" alt="" width="15%" class="img-fluid mx-2">
                <img src="assets/image/yb.png" alt="" width="15%" class="img-fluid mx-2">
            </div>
            </div>
        </div>
        </div>
    </div>
    </footer>
    <section>
    <div class="row w-100 small-footer">
        <div class="col-md-6 text-center">
        <a href=""><b>@2020</b> carievent.id</a>
        </div>
        <div class="col-md-6 text-center">
        <div class="row">
            <div class="col-md-3">
            <a href="">Aturan Pelayanan</a>
            </div>
            <div class="col-md-3">
            <a href="">Kebijakan Privasi</a>
            </div>
            <div class="col-md-3">
            <a href="">Kebijakan Cookie</a>
            </div>
        </div>
        </div>
    </div>
    </section>
    <div class="modal fade text-center" id="masuk" tabindex="-1" role="dialog" aria-labelledby="exampleModalCenterTitle"
    aria-hidden="true">
    <div class="modal-dialog modal-dialog-centered" role="document">
      <div class="modal-content">
        <div class="modal-header mt-2" style="border: none;">
          <h3 class="modal-title col text-center ml-5 p-0" id="exampleModalLongTitle"
            style="font-weight: 500; color: #0d1b2a;">Masuk</h3>
          <button type="button" class="close col-sm-2 p-0" data-dismiss="modal" aria-label="Close">
            <div class="mx-auto" style="padding-top: 35%;">
              <i class="fas fa-times fa-1x" style="color:  #778da9;"></i>
            </div>
          </button>
        </div>
        <div class="modal-body">
          <form class="mx-5">
            <div class="form-row">
              <input type="email" class="form-control" placeholder="Alamat Email">
            </div>
            <div class="form-row mt-2">
              <input type="password" class="form-control" placeholder="Kata Sandi">
            </div>
            <button type="submit" class="btn bg-4 w-100 text-white text-medium mt-4">MASUK</button>
          </form>
        </div>
        <div class="row px-4 ml-3">
            <div class="col-5">
              <hr style="border-width: 1px;">
            </div>
            <span>Atau</span>
            <div class="col-5">
              <hr style="border-width: 1px;">
            </div>
          </div>
          <div class="modal-footer px-5 mb-4" style="border: none;">
            <button type="button" class="btn fb-color w-100 text-white text-medium">
              <img src="assets/logo/facebook.png" style="width: 6%">
              Masuk dengan Facebook
            </button>
            <button type="button" class="btn btn-outline-dark w-100 text-medium">
              <img src="assets/logo/google.png" style="width: 4%" class="mx-2">
              Masuk dengan Google
            </button>
          </div>
      </div>
    </div>
    </div>

    <div class="modal fade text-center" id="daftar" tabindex="-1" role="dialog" aria-labelledby="exampleModalCenterTitle"
      aria-hidden="true">
      <div class="modal-dialog modal-dialog-centered" role="document">
        <div class="modal-content">
          <div class="modal-header mt-2" style="border: none;">
            <h3 class="modal-title col text-center ml-5 p-0" id="exampleModalLongTitle"
              style="font-weight: 500; color: #0d1b2a;">Daftar</h3>
            <button type="button" class="close col-sm-2 p-0" data-dismiss="modal" aria-label="Close">
              <div class="mx-auto" style="padding-top: 35%;">
                <i class="fas fa-times fa-1x" style="color:  #778da9;"></i>
              </div>
            </button>
          </div>
          <div class="modal-body">
            <form class="mx-5">
              <div class="form-row">
                <input type="text" class="form-control" placeholder="Nama Anda">
              </div>
              <div class="form-row mt-2">
                <input type="email" class="form-control" placeholder="Alamat Email">
              </div>
              <div class="form-row mt-2">
                <input type="password" class="form-control" placeholder="Kata Sandi">
              </div>
              <div class="form-row mt-2">
                <i class="fas fa-map-marker-alt mr-1"></i>Surabaya, Jatim
                <a href=#>&nbsp;(Ubah)</a>
              </div>
              <div class="form-row text-left mt-2">
                <div class="form-check">
                  <input class="form-check-input" type="checkbox" id="agreementCheck">
                  <label class="form-check-label pb-2" for="agreementCheck" style="font-size: 14px;">Saya setuju dengan syarat dan ketentuan yang berlaku</label>
                </div>
              </div>
              <button type="button" class="btn bg-4 w-100 text-white text-medium">DAFTAR</button>
            </form>
          </div>
            <div class="row px-4 ml-3">
              <div class="col-5">
                <hr style="border-width: 1px;">
              </div>
              <span>Atau</span>
              <div class="col-5">
                <hr style="border-width: 1px;">
              </div>
            </div>
            <div class="modal-footer px-5 mb-4" style="border: none;">
              <button type="button" class="btn fb-color w-100 text-white text-medium">
                <img src="assets/logo/facebook.png" style="width: 6%">
                Daftar dengan Facebook
              </button>
              <button type="button" class="btn btn-outline-dark w-100 text-medium">
                <img src="assets/logo/google.png" style="width: 4%" class="mx-2">
                Daftar dengan Google
              </button>
            </div>
          </div>
        </div>
    </div>
</div>
</template>

<script>
export default {
  name: 'Footer',
  props: {
    // msg: String
  }
}
</script>

<!-- Add "scoped" attribute to limit CSS to this component only -->
<style scoped>
</style>
