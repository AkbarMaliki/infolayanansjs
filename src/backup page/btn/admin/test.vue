<template>
  <div>
    <JsonToExcel :data="listData" class="btns btns-sm" />
  </div>
</template>
<script>
import axios from "axios";
import JsonToExcel from "@/components/backup/convert/JsonToExcel.vue";
import ExcelToJson from "@/components/backup/convert/ExcelToJson.vue";
export default {
  data() {
    return {
      listData: []
    };
  },
  methods: {
    refresh() {
      let fd2 = new FormData();
      fd2.append(
        "data",
        "Select tb1.nip,tb1.name,tb1.posisi,tb2.penilaian,tb2.created_at FROM tkaryawan tb1 LEFT JOIN tpenilaian tb2 ON tb1.nip= tb2.nip ORDER BY tb1.nip ASC"
      ); // if empty = *
      fd2.append("database", " infolay3_test");
      fd2.append("aksi", "select");
      axios
        .post("https://infolayanans.space" + "/api/mysql/auto.php", fd2, {
          headers: {
            Authorization: localStorage.getItem("auth._token.local")
          }
        })
        .then(res => {
          console.log(res.data.data);
          this.listData = res.data.data;
        });
    }
  },
  mounted() {
    let fd2 = new FormData();
    fd2.append(
      "data",
      "Select tb1.nip,tb1.name,tb1.posisi,tb2.penilaian,tb2.created_at FROM tkaryawan tb1 LEFT JOIN tpenilaian tb2 ON tb1.nip= tb2.nip ORDER BY tb1.nip ASC"
    ); // if empty = *
    fd2.append("database", " infolay3_test");
    fd2.append("aksi", "select");
    axios
      .post("https://infolayanans.space" + "/api/mysql/auto.php", fd2, {
        headers: {
          Authorization: localStorage.getItem("auth._token.local")
        }
      })
      .then(res => {
        console.log(res.data);
        this.listData = res.data;
      });
  },
  components: {
    JsonToExcel,
    ExcelToJson
  }
};
</script>
