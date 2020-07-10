<template>
    <div>
        <button type="button" @click="deletes" class="btn btn-sm btn-primary">delete</button>
        <p v-for="(item, index) in messages" :key="index+'notif'">{{item}}</p>
    </div>
</template>
<script>
import axios from "axios";
import socket from "@/plugins/socket.io.js";
import uniqid from "uniqid";
export default {
  data() {
    return {
      messages: [],
      message: "",
      pilih: {},
    };
  },
  beforeMount() {
    socket.on("new-message", message => {
      this.messages.push(message);
    });
    socket.on("edit-message", data => {
      console.log(data);
      this.messages = data;
      this.$forceUpdate();
      // console.log(this.messages);
    });
    socket.on("refresh-message", data => {
      socket.emit("last-messages", function(messages) {
        that.messages = messages;
        this.$forceUpdate();
      });
    });
  },
  mounted() {
    let that = this;
    socket.emit("last-messages", function(messages) {
      that.messages = messages;
    });
    // this.scrollToBottom();
  },
  methods: {
    dipilih(item) {
      this.pilih = item;
    },
    inserts() {
      let message = {
        id: uniqid(),
        room: "pesan",
        tujuan: "admin",
        table:"tbuser",
        text: this.vdata.text.trim(),
        dibaca: "false",
        status: 1,
        // 0 hapus, 1 pending, 2 diproses, 3 ada kesalahan, 4 selesai
        createdAt: new Date().toJSON(),
        createdBy: "null"
      };
      this.messages.push(message);
      // this.$store.state.notifikasi.push(message)
      this.message = "";
      socket.emit("send-message", message);
    },
    edits(id) {
      this.pilih.status = 4;
      this.pilih.Nama = "selesai";
      this.pilih.text = "selesai";
      socket.emit("edits-message", this.pilih);
    },
    deletes(id) {
      let that = this;
      socket.emit("delete-message", this.pilih);
      socket.emit("last-messages", function(messages) {
        that.messages = messages;
        that.$forceUpdate();
        that.pilih = {};
      });
    },
  }
};
</script>