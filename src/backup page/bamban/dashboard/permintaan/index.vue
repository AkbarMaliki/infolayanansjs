<template>
  <div>
    <div class="bg-white rounded-lg mb-4 p-4" style="font-family:times new roman;">
      <span style="font-size:20px;text-transform:none;color:black;">
        <router-link to="/dashboard">Data Desa</router-link>&nbsp;>
        <router-link to="/dashboard/laporan/permintaan">Permintaan</router-link>
      </span>
      <br />
      <br />
      <div class="input-group mb-2">
        <div class="input-group-prepend">
          <div class="input-group-text">@</div>
        </div>
        <input
          type="text"
          class="form-control py-0"
          id="search"
          v-model="search"
          placeholder="Search ..."
          @change="cari()"
        />
      </div>
      <hr class="style13" />
      <!-- FORM PENDUDUK -->
      <div class="table-responsive-sm">
        <table class="table table-hover table-bordered">
          <!--Table head-->
          <thead class="mdb-color">
            <tr>
              <th style="font-size:12px;" class="uppercase">NIK</th>
              <th style="font-size:12px;" class="uppercase">Permintaan</th>
              <th style="font-size:12px;" class="uppercase">Keperluan</th>
              <th style="font-size:12px;" class="uppercase">Tanggal Input</th>
              <th style="font-size:12px;" class="uppercase">Status</th>
              <th style="font-size:12px;" class="uppercase">Detail</th>
            </tr>
          </thead>
          <!--Table head-->
          <!--Table body-->
          <tbody>
            <tr
              v-for="(item, index) in messages.slice().reverse()"
              v-show="item.status!=0"
              :key="index+'12345'"
            >
              <th scope="row" style="font-size:13px;">{{item.nik}}</th>
              <td style="font-size:13px;">{{item.tugas}}</td>
              <td style="font-size:13px;">{{item.keperluan}}</td>
              <td style="font-size:13px;">{{format(item.createdAt)}}</td>
              <td style="font-size:13px;">
                <button type="button" v-if="item.status==1" class="btn btn-sm btn-info">Pending</button>
                <button
                  type="button"
                  v-else-if="item.status==2"
                  class="btn btn-sm btn-primary"
                >Diproses</button>
                <button
                  type="button"
                  v-else-if="item.status==3"
                  class="btn btn-sm btn-danger"
                >Ditolak</button>
                <button
                  type="button"
                  v-else-if="item.status==4"
                  class="btn btn-sm btn-success"
                >Selesai</button>
              </td>
              <td style="font-size:13px;">
                <button
                  type="button"
                  @click="modal=true;dipilih(item)"
                  class="btn btn-sm btn-primary"
                >Detail</button>
              </td>
            </tr>
          </tbody>
          <!--Table body-->
        </table>
        <!--Table-->
      </div>
      <transition-group
        enter-active-class="animated fadeIn"
        leave-active-class="animated fadeOut"
        mode="out-in"
      >
        <template v-if="modal">
          <div
            key="modal12"
            class="modalbackground"
            @click="modal=false"
            style="width:100%;z-index:10;position:fixed;background:rgba(22, 21, 21, 0.801);height:900px;top:0;left:0;"
          ></div>
          <div
            key="modal21"
            class="modalny rounded-lg shadow-lg font-times"
            style="z-index:100;overflow-y:scroll;position:fixed;top:10%;;width:60%;left:20%;height:500px;padding:30px 20px 20px 40px;background:white;box-shadow:2px 5px 8px 2px black;"
          >
            Status : {{pilih.status == 0? "Not Found" : pilih.status == 1 ? "Pending" : pilih.status == 2 ? "Diproses" : pilih.status == 3 ? "Ada kesalahan" : "Selesai"}}
            <template
              v-if="pilih.status==1"
            >
              <div class="float-right font-bold font-times">
                Aksi :
                <button
                  type="button"
                  @click="proses(pilih.id)"
                  class="btn btn-sm btn-primary"
                >
                  <span class="typcn typcn-tick"></span> Proses
                </button>
                <button
                  v-if="!formOn"
                  type="button"
                  @click="warnings(pilih.id)"
                  class="ml-2 btn btn-sm btn-danger"
                >
                  <span class="typcn typcn-warning"></span> Ditolak
                </button>
                <button v-else type="button" @click="formOn=false" class="ml-2 btn btn-sm btn-info">
                  <span class="typcn typcn-document"></span> Info
                </button>
                <!-- <button type="button" @click="hapus(pilih.id)" class="ml-2 btn btn-sm btn-danger">
                  <span class="typcn typcn-thumbs-up"></span>
                  Delete
                </button>-->
              </div>
            </template>
            <template v-else-if="pilih.status==2">
              <div class="float-right font-bold font-times">
                Aksi :
                <button
                  v-if="!formOn"
                  type="button"
                  @click="warnings(pilih.id)"
                  class="ml-2 btn btn-sm btn-danger"
                >
                  <span class="typcn typcn-warning"></span> Ditolak
                </button>
                <button v-else type="button" @click="formOn=false" class="ml-2 btn btn-sm btn-info">
                  <span class="typcn typcn-document"></span> Info
                </button>
                <button type="button" @click="selesai(pilih.id)" class="ml-2 btn btn-sm btn-info">
                  <span class="typcn typcn-thumbs-up"></span>
                  Selesai
                </button>
                <!-- <button type="button" @click="hapus(pilih.id)" class="ml-2 btn btn-sm btn-danger">
                  <span class="typcn typcn-thumbs-up"></span>
                  Delete
                </button>-->
              </div>
            </template>
            <template v-else-if="pilih.status==3">
              <div class="float-right font-bold font-times">
                Aksi :
                <button
                  type="button"
                  @click="proses(pilih.id)"
                  class="ml-2 btn btn-sm btn-info"
                >
                  <span class="typcn typcn-thumbs-up"></span>
                  Proses
                </button>
                <!-- <button type="button" @click="hapus(pilih.id)" class="ml-2 btn btn-sm btn-danger">
                  <span class="typcn typcn-thumbs-up"></span>
                  Delete
                </button>-->
              </div>
            </template>
            <template v-else-if="pilih.status==4">
              <div class="float-right font-bold font-times">
                Aksi :
                <button
                  v-if="!formOn"
                  type="button"
                  @click="warnings(pilih.id)"
                  class="ml-2 btn btn-sm btn-danger"
                >
                  <span class="typcn typcn-warning"></span> Ditolak
                </button>
                <!-- <button type="button" @click="hapus(pilih.id)" class="ml-2 btn btn-sm btn-danger">
                  <span class="typcn typcn-thumbs-up"></span>
                  Delete
                </button>-->
              </div>
            </template>
            <p class="font-times font-bold" style="font-size:21px;">{{pilih.tugas}}</p>
            <hr class="style13" />
            <template v-if="formOn==false">
              <div class="p-2">
                <p class="font-bold p-2 uppercase">Info peminta surat :</p>
                <tr class="tabletd" v-if="pilih.nik">
                  <td>NIK</td>
                  <td>&nbsp;:&nbsp;</td>
                  <td>{{pilih.nik}}</td>
                </tr>
                <tr class="tabletd" v-if="pilih.name">
                  <td>Nama</td>
                  <td>&nbsp;:&nbsp;</td>
                  <td>{{pilih.name}}</td>
                </tr>
                <tr>
                  <td colspan="3" class="font-bold p-2 uppercase" style>
                    <hr class="style1" />Info data Permintaan :
                  </td>
                </tr>
                <tr class="tabletd" v-if="pilih.nik2">
                  <td>NIK</td>
                  <td>&nbsp;:&nbsp;</td>
                  <td>{{pilih.nik2}}</td>
                </tr>
                <tr class="tabletd" v-if="pilih.name2">
                  <td>Nama</td>
                  <td>&nbsp;:&nbsp;</td>
                  <td>{{pilih.name2}}</td>
                </tr>
                <tr class="tabletd" v-if="pilih.jk">
                  <td>Jenis Kelamin</td>
                  <td>&nbsp;:&nbsp;</td>
                  <td>{{pilih.jk}}</td>
                </tr>
                <tr class="tabletd" v-if="pilih.TTL">
                  <td>Tempat Tanggal Lahir</td>
                  <td>&nbsp;:&nbsp;</td>
                  <td>{{pilih.TTL}}</td>
                </tr>
                <tr class="tabletd" v-if="pilih.alamat">
                  <td>Alamat</td>
                  <td>&nbsp;:&nbsp;</td>
                  <td>{{pilih.alamat}}</td>
                </tr>
                <tr class="tabletd" v-if="pilih.pekerjaan">
                  <td>Pekerjaan</td>
                  <td>&nbsp;:&nbsp;</td>
                  <td>{{pilih.pekerjaan}}</td>
                </tr>
                <tr class="tabletd" v-if="pilih.keperluan">
                  <td>Keperluan</td>
                  <td>&nbsp;:&nbsp;</td>
                  <td>{{pilih.keperluan}}</td>
                </tr>
                <!-- IF -->
                <hr class="style13" />
                <tr class="tabletd" v-if="pilih.jalan">
                  <td colspan="3" class="font-bold" style>Tujuan Pindah</td>
                </tr>
                <tr class="tabletd" v-if="pilih.jalan">
                  <td>Jalan/alamat</td>
                  <td>&nbsp;:&nbsp;</td>
                  <td>{{pilih.jalan}}</td>
                </tr>
                <tr class="tabletd" v-if="pilih.desa">
                  <td>Desa/Kelurahan/Kecamatan</td>
                  <td>&nbsp;:&nbsp;</td>
                  <td>{{pilih.desa}}</td>
                </tr>
                <tr class="tabletd" v-if="pilih.kab">
                  <td>Kabupaten, Provinsi</td>
                  <td>&nbsp;:&nbsp;</td>
                  <td>{{pilih.kab}}</td>
                </tr>
                <tr class="tabletd" v-if="pilih.jam">
                  <td colspan="3" class="font-bold" style>Info yang meninggal</td>
                </tr>
                <tr class="tabletd" v-if="pilih.jam">
                  <td>Jam, hari dan tanggal meninggal</td>
                  <td>&nbsp;:&nbsp;</td>
                  <td>{{pilih.jam}}</td>
                </tr>
                <tr class="tabletd" v-if="pilih.sebab">
                  <td>sebab dan tempat meninggal</td>
                  <td>&nbsp;:&nbsp;</td>
                  <td>{{pilih.sebab}}</td>
                </tr>
                <tr class="tabletd" v-if="pilih.jam2">
                  <td>jam, hari dan tempat dikebumikan/dimakamkan</td>
                  <td>&nbsp;:&nbsp;</td>
                  <td>{{pilih.jam2}}</td>
                </tr>
                <tr class="tabletd" v-if="pilih.sebab2">
                  <td>tempat dimakamkan</td>
                  <td>&nbsp;:&nbsp;</td>
                  <td>{{pilih.sebab2}}</td>
                </tr>
                <tr class="tabletd" v-if="pilih.domisili">
                  <td>Domisili Sekarang</td>
                  <td>&nbsp;:&nbsp;</td>
                  <td>{{pilih.domisili}}</td>
                </tr>
                <tr class="tabletd" v-if="pilih.kawin">
                  <td>Status</td>
                  <td>&nbsp;:&nbsp;</td>
                  <td>{{pilih.kawin}}</td>
                </tr>
                <tr class="tabletd" v-if="pilih.ibu">
                  <td>Nama Ibu</td>
                  <td>&nbsp;:&nbsp;</td>
                  <td>{{pilih.ibu}}</td>
                </tr>
                <tr class="tabletd" v-if="pilih.ayah">
                  <td>Nama Ayah</td>
                  <td>&nbsp;:&nbsp;</td>
                  <td>{{pilih.ayah}}</td>
                </tr>
                <tr class="tabletd" v-if="pilih.niklahir">
                  <td>NIK yang lahir</td>
                  <td>&nbsp;:&nbsp;</td>
                  <td>{{pilih.niklahir}}</td>
                </tr>
                <tr class="tabletd" v-if="pilih.namalahir">
                  <td>Nama yang lahir</td>
                  <td>&nbsp;:&nbsp;</td>
                  <td>{{pilih.namalahir}}</td>
                </tr>
                <tr class="tabletd" v-if="pilih.nikmati">
                  <td>NIK yang mati</td>
                  <td>&nbsp;:&nbsp;</td>
                  <td>{{pilih.nikmati}}</td>
                </tr>
                <tr class="tabletd" v-if="pilih.nikpindah">
                  <td>NIK penduduk yang pindah</td>
                  <td>&nbsp;:&nbsp;</td>
                  <td>{{pilih.nikpindah}}</td>
                </tr>
                <br />
                <tr class="tabletd" v-if="pilih.nik3">
                  <td colspan="3" class="font-bold" style>Data yang ikut pindah :</td>
                </tr>
                <table
                  class="table-sm table-bordered table-hover table-print border-black"
                  v-if="pilih.nik3"
                >
                  <tr>
                    <th class="font-bold">Nik</th>
                    <th class="font-bold">Nama</th>
                  </tr>
                  <tr v-for="(item, index) in pilih.nik3" :key="index+'nik3'">
                    <td v-if="pilih.nik3[index]">{{pilih.nik3[index]}}</td>
                    <td v-if="pilih.nama3[index]">{{pilih.nama3[index]}}</td>
                  </tr>
                </table>
                <hr class="style13" />
                <p style="font-size:24px;" class="font-times">{{vdata.warning}}</p>
              </div>
            </template>
            <template v-else>
              <div>
                <h3 class="text-center font-times font-bold">Ditolak</h3>
                <hr class="style3" />
                <div class="sm-form">
                  <textarea
                    type="text"
                    id="warning"
                    name="warning"
                    rows="2"
                    placeholder="warning..."
                    class="form-control md-textarea"
                    v-model="vdata.warning"
                  ></textarea>
                </div>
                <hr />
                <button
                  type="button"
                  @click="warnings(pilih.id)"
                  class="btn btn-sm btn-outline-warning"
                >Kirim Peringatan Kesalahan</button>
                <span class="typcn typcn-warning"></span>
                <hr class="style13" />
              </div>
            </template>
          </div>
        </template>
      </transition-group>
      <hr class="style13" />
    </div>
  </div>
</template>
<script>
var id = require("date-fns/locale/id");
import axios from "axios";
import socket from "@/plugins/socket.io.js";
export default {
  data() {
    return {
      messages: [],
      message: "",
      imgs: [],
      img: "",
      search: "",
      modal: false,
      pilih: {},
      formOn: false,
      err: false,
      vdata: {},
      temp: []
    };
  },
  beforeMount() {
    socket.on("new-message", message => {
      this.messages.push(message);
      this.temp.push(message);
      this.$forceUpdate();
      window.location.reload();
      // #CORDOVA
      if (typeof cordova == "object") {
        document.addEventListener("deviceready", function() {
          cordova.plugins.notification.local.schedule({
            title: "pesan baru",
            text: "ada pesan baru ...",
            foreground: true,
            badge: 1,
            sound: "file://resources/audio/beep.mp3",
            led: { color: "#FF00FF", on: 500, off: 500 },
            vibrate: [100, 50, 200]
          });
          navigator.notification.beep(1);
        });
      }
    });
    socket.on("edit-message", data => {
      this.messages[data.index] = data.data;
      this.temp[data.index] = data.data;
    });
  },
  mounted() {
    let that = this;
    socket.emit("last-messages", function(messages) {
      that.messages = messages;
      that.temp = messages;
    });
    // this.scrollToBottom()
  },
  methods: {
    cari() {
      let data = this.temp;
      let keys = Object.keys(this.messages[0]);
      data = data.filter((v, i, a) => {
        let hasil = false;
        keys.filter(key => {
          if (typeof v[key] == "string") {
            if (v[key].toLowerCase().indexOf(this.search.toLowerCase()) != -1) {
              hasil = true;
            }
          } else {
            if (v[key] != null) {
              if (v[key].toString().indexOf(this.search) != -1) {
                hasil = true;
              }
            } else {
            }
          }
        });
        if (hasil) return v;
      });
      this.messages = data;
    },
    dipilih(item) {
      this.pilih = item;
      this.vdata.warning = item.warning;
    },
    proses(id) {
      let no = this.temp.findIndex(pil => {
        if (pil.id == id) {
          return this;
        }
      });
      this.temp[no].status = 2;
      let data = {
        id: id,
        data: this.temp[no]
      };
      socket.emit("finish-message", data);
    },
    kesalahan(id) {
      console.log(id);
    },
    selesai(id) {
      let no = this.temp.findIndex(pil => {
        if (pil.id == id) {
          return this;
        }
      });
      let warn = prompt(
        "Isi pesan ke peminta",
        "Surat anda sudah bisa diambil dikantor desa bamban!"
      );
      this.temp[no].warning = warn;
      this.temp[no].status = 4;
      let data = {
        id: id,
        data: this.temp[no]
      };
      socket.emit("finish-message", data);
    },
    hapus(id) {
      let no = this.temp.findIndex(pil => {
        if (pil.id == id) {
          return this;
        }
      });
      // let warn = prompt(
      //   'Isi pesan ke peminta',
      //   'Surat anda sudah bisa diambil dikantor desa bamban!'
      // )
      // this.messages[no].warning = warn
      if (confirm("Yakin dihapus ??")) {
        this.temp[no].status = 0;
        let data = {
          id: id,
          data: this.temp[no]
        };
        socket.emit("finish-message", data);
      } else {
      }
    },
    warnings(id) {
      let no = this.temp.findIndex(pil => {
        if (pil.id == id) {
          return this;
        }
      });
      this.temp[no].status = 3;
      this.temp[no].warning = this.vdata.warning;
      let data = {
        id: id,
        data: this.temp[no]
      };
      socket.emit("finish-message", data);
    },
    distanceToNow(timena) {
      return this.$datefns.distanceInWordsToNow(new Date(timena), {
        locale: id,
        includeSeconds: true
      });
      //=> "3 days ago"
    },
    format(date) {
      return this.$datefns.format(date, "DD MMMM YYYY", {
        locale: id
      });
    },
    sendMessage() {
      if (!this.message.trim()) return;
      if (this.imgs.length > 0) {
        this.message = this.message + this.img;
      }
      let message = {
        name: this.$store.state.user ? this.$store.state.user.name : "unknown",
        room: this.$route.query.room,
        text: this.message.trim(),
        picture: this.$store.state.user
          ? this.$store.state.user.picture
          : "./nofound.png",
        createdAt: new Date().toJSON(),
        createdBy: this.$store.state.user._id
      };
      this.messages.push(message);
      this.temp.push(message);
      this.message = "";
      socket.emit("send-message", message);
    }
  },
  layout: "desa"
};
</script>
<style scoped>
.tabletd > td {
  font-size: 19px;
}
</style>
