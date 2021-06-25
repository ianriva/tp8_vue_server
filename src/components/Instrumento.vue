<template>
  <b-container class="d-flex justify-content-center my-2">
    <b-card no-body class="overflow-hidden sizeImg" style="width: 35rem">
      <b-row no-gutters>
        <b-col md="4" class="d-flex justify-content-center align-items-center">
          <b-link :href="'/detalle/' + instrumentoParam._id"
            ><b-card-img
              :src="instrumentoParam.imagen"
              alt="Image"
              class="rounded-0"
            ></b-card-img
          ></b-link>
        </b-col>
        <b-col md="8">
          <b-card-body>
            <b-card-title>{{ instrumentoParam.instrumento }}</b-card-title>
            <b-card-sub-title class="mb-2 precio">
              {{ instrumentoParam.precio | currency}}
            </b-card-sub-title>
            <b-card-text>
              <span v-if="instrumentoParam.costoEnvio == 'G'" class="gratis">
                <b-card-img
                  src="../assets/camion.png"
                  style="max-width: 35px;"
                ></b-card-img>
                Envío gratis
              </span>
              <span v-else class="costoEnvio"
                >Costo de envío al interior de Argentina: {{
                  instrumentoParam.costoEnvio | currency
                }}</span
              >
            </b-card-text>
            <b-card-text
              >{{ instrumentoParam.cantidadVendida }} Vendidos</b-card-text
            >
          </b-card-body>
        </b-col>
      </b-row>
    </b-card>
  </b-container>
</template>
<script>
export default {
  props: ["instrumentoParam"],
};
</script>
<style scoped>
.gratis {
  color: #00bd4f;
}
.costoEnvio {
  color: #e94d05;
}
.sizeImg {
  max-width: 550px;
  max-height: 550px;
}
.precio{
  font-size: 18px;
  font-family: Arial, Helvetica, sans-serif;
  letter-spacing: normal;
}
</style>