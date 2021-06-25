<template>
  <div style="margin-top:80px">
    <b-container fluid class="mt-4">
      <b-row>
        <b-col>
          <b-img
            :src="instrumentoEncontrado.imagen"
            class="d-block mx-auto sizeImg"
          ></b-img>
          <p class="title">Descripción:</p>
          <p class="descripcion">{{ instrumentoEncontrado.descripcion }}</p>
        </b-col>
        <b-col lg="0">
          <div class="verticalLine d-none d-lg-block"></div>
        </b-col>
        <b-col lg="4">
          <b-row>
            <b-col>
              <span>{{ instrumentoEncontrado.cantidadVendida }} vendidos</span>
            </b-col>
          </b-row>
          <b-row>
            <b-col>
              <p class="instrumento">{{ instrumentoEncontrado.instrumento }}</p>
            </b-col>
          </b-row>
          <b-row>
            <b-col>
              <p>{{ instrumentoEncontrado.precio | currency }}</p>
            </b-col>
          </b-row>
          <b-row>
            <b-col>
              <p class="title">Marca: {{ instrumentoEncontrado.marca }}</p>
              <p class="title">Modelo: {{ instrumentoEncontrado.modelo }}</p>
            </b-col>
          </b-row>
          <b-row class="mt-4">
            <b-col>
              <span
                v-if="instrumentoEncontrado.costoEnvio == 'G'"
                class="gratis"
              >
                <b-card-img
                  src="../assets/camion.png"
                  style="max-width: 35px;"
                ></b-card-img>
                Envío gratis
              </span>
              <span v-else class="costoEnvio"
                >Costo de envío al interior de Argentina:
                {{ instrumentoEncontrado.costoEnvio | currency }}</span
              >
            </b-col>
          </b-row>
          <b-row class="mt-3 pt-3">
            <b-col>
              <b-button size="sm" variant="outline-info" class="mb-3"
                >Agregar al carrito</b-button
              ><br />
              <b-button
                size="sm"
                variant="primary"
                href="/productos"
                class="ml-1 mb-3"
                >Volver</b-button
              >
              <!-- MODAL FORM EDITAR-->
              <b-button
                v-b-modal.modal-edit
                size="sm"
                variant="secondary"
                class="ml-1 mb-3"
                >Editar</b-button
              >

              <b-button
                size="sm"
                variant="danger"
                class="ml-1 mb-3"
                @click="showAlert"
                >Eliminar</b-button
              >
              <editar />
            </b-col>
          </b-row>
        </b-col>
        <b-col lg="1">
          <div class="verticalLine d-none d-lg-block"></div>
        </b-col>
      </b-row>
    </b-container>
  </div>
</template>

<script>
import axios from "axios";
import Editar from "../components/Editar";
export default {
  name: "DetalleInstrumento",
  components: {
    Editar,
  },
  mounted() {
    this.getInstrumentoPorId(this.$route.params.id);
  },
  data() {
    return {
      instrumentoEncontrado: [],
      imagen: "",
    };
  },
  methods: {
    getInstrumentoPorId(id) {
      axios.get("http://localhost:4000/api/instrumentos/" + id).then((res) => {
        console.log(res.data.articulo)
        this.imagen = res.data.imagen;
        this.instrumentoEncontrado = res.data.articulo;
      });
    },
    showAlert() {
      this.$swal
        .fire({
          title: "Eliminar",
          text: "¿Estás seguro que deseas eliminar este instrumento?",
          icon: "warning",
          showCancelButton: true,
          confirmButtonColor: "#3085d6",
          cancelButtonColor: "#d33",
          confirmButtonText: "Sí, eliminalo",
          reverseButtons: true,
        })
        .then((result) => {
          if (result.isConfirmed) {
            const parametroId = this.$route.params.id;
            axios
              .delete("http://localhost:4000/api/instrumentos/" + parametroId)
              .then((res) => {
                console.log(res);
              });
            this.$swal
              .fire({
                text: "El instrumento se ha eliminado con éxito",
                icon: "success",
              })
              .then(() => {
                this.$router.push("/productos");
              });
          }
        });
    },
  },
};
</script>
<style scoped>
.title {
  font-size: 16px;
  font-weight: bold;
}
.descripcion {
  font-size: 13px;
}
.instrumento {
  font-size: 24px;
  font-weight: bold;
}
.verticalLine {
  border-left: 1px solid rgba(134, 126, 126, 0.26);
  height: 100%;
}
.gratis {
  color: #00bd4f;
}
.costoEnvio {
  color: #e94d05;
}
.sizeImg {
  min-width: 300px;
  max-width: 300px;
}
</style>
