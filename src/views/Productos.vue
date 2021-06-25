<template>
  <div style="margin-top:80px">
    <div
      v-for="instrumento in instrumentos"
      :key="instrumento._id"
      style="margin-top:15px"
      class="d-flex justify-content-center"
    >
      <instrumento-item :instrumentoParam="instrumento"></instrumento-item>
    </div>
  </div>
</template>

<script>
import Instrumento from "@/components/Instrumento.vue";
import axios from "axios";
export default {
  name: "Productos",
  components: {
    "instrumento-item": Instrumento,
  },
  mounted() {
    this.getInstrumentos();
  },
  data() {
    return {
      instrumentos: [],
    };
  },
  methods: {
    getInstrumentos() {
      axios.get("http://localhost:4000/api/instrumentos").then((res) => {
        console.log(res.data);
        this.instrumentos = res.data.instrumentos;
      }).catch((err) => {
          console.log(err)
      });
    },
  },
};
</script>
