<template>
  <div>
    <br />
    <hr class="style13" />
    <h2 class="text-center uppercase" style="font-size:21px;font-weight:bold;">Tambah Soal</h2>

    <b-field class="file">
      <b-upload v-model="file">
        <a class="button is-primary">
          <b-icon icon="upload"></b-icon>
          <span>Click to upload</span>
        </a>
      </b-upload>
      <span class="file-name" v-if="file">{{ file.name }}</span>
    </b-field>

    <hr class="style13" />
    <legend>INPUT</legend>
    <form action @submit.prevent="tests">
      <div class="sm-form">
        <label for="pertanyaan">Your pertanyaan</label>
        <input
          type="text"
          id="pertanyaan"
          name="pertanyaan"
          class="form-control form-control-sm"
          placeholder="pertanyaan"
          v-model="vdata.pertanyaan"
        />
      </div>
      <div class="text-center">
        <button type="submit" class="btn btn-sm btn-primary btn-block">Simpan</button>
      </div>
    </form>
  </div>
</template>
<script>
export default {
  layout: "app",
  data() {
    return {
      vdata: {},
      test: "taufik"
    };
  },
  methods: {
    tests() {
      alert("y");
    },
    tes() {
      alert("y");
    }
  }
};
</script>
