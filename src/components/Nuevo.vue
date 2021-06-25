<template>
  <div>
    <b-modal id="modal" ref="my-modal" hide-footer title="Nuevo instrumento">
      <b-form @submit="onSubmit">
        <b-form-group
          id="instrumento"
          label="Intrumento:"
          label-for="instrumento"
        >
          <b-form-input
            id="instrumento"
            v-model="form.instrumento"
            type="text"
            placeholder="Ingrese el instrumento"
            required
          >
          </b-form-input>
        </b-form-group>
        <b-form-group id="marca" label="Marca:" label-for="marca">
          <b-form-input
            id="marca"
            v-model="form.marca"
            type="text"
            placeholder="Ingrese la marca"
            required
          >
          </b-form-input>
        </b-form-group>
        <b-form-group id="modelo" label="Modelo:" label-for="modelo">
          <b-form-input
            id="modelo"
            v-model="form.modelo"
            type="text"
            placeholder="Ingrese el modelo"
            required
          >
          </b-form-input>
        </b-form-group>
        <b-form-group
          id="costoEnvio"
          label="Costo de Envío:"
          label-for="costoEnvio"
        >
          <b-form-input
            id="costoEnvio"
            v-model="form.costoEnvio"
            type="text"
            placeholder="Ingrese el costo de envío"
            required
          >
          </b-form-input>
        </b-form-group>
        <b-form-group id="precio" label="Precio:" label-for="precio">
          <b-form-input
            id="precio"
            v-model="form.precio"
            type="number"
            placeholder="Ingrese el precio"
            step="0.01"
            required
          >
          </b-form-input>
        </b-form-group>
        <b-form-group
          id="cantidadVendida"
          label="Cantidad:"
          label-for="cantidadVendida"
        >
          <b-form-input
            id="cantidadVendida"
            v-model="form.cantidadVendida"
            type="number"
            placeholder="Ingrese la cantidad"
            required
          >
          </b-form-input>
        </b-form-group>
        <b-form-group id="file" label="Imagen:" label-for="file">
          <b-form-file
            v-model="file"
            :state="Boolean(file)"
            placeholder="Seleccione la imagen..."
            accept=".jpg, .png, .gif"
            @change="onChange"
            required
          ></b-form-file>
          <div class="mt-3">
            Imagen seleccionada: <img :src="imagen" class="imgPreview">
          </div>
        </b-form-group>
        <b-form-group
          id="descripcion"
          label="Descripción:"
          label-for="descripcion"
        >
          <b-form-textarea
            id="descripcion"
            v-model="form.descripcion"
            placeholder="Ingrese la descripción"
            required
            rows="3"
          >
          </b-form-textarea>
        </b-form-group>
        <b-button @click="hideModal" class="m-2" variant="danger">Cerrar</b-button>
        <b-button type="submit" class="m-2" variant="primary">Guardar</b-button>
      </b-form>
    </b-modal>
  </div>
</template>
<script>
import axios from "axios";
export default {
  data() {
    return {
      file: null,
      imagen: null,
      formData: File,
      form: {
        instrumento: "",
        marca: "",
        modelo: "",
        imagen: "",
        precio: "",
        costoEnvio: "",
        cantidadVendida: "",
        descripcion: "",
      },
    };
  },
  methods: {
    onSubmit(event) {
      event.preventDefault();
      axios.post("http://localhost:4000/api/instrumentos", this.form).then((res) => {
        console.log(res.data);
        const upload = new FormData();
        upload.append("file", this.formData);
        axios.post("http://localhost:4000/api/upload", upload).then((res) => {
        console.log(res.data);
      });
        this.goProductos();
      });
    },
    onChange(event) {
      this.form.imagen = event.target.files[0].name;
      this.imagen = URL.createObjectURL(event.target.files[0]);
      this.formData = event.target.files[0]
    },
    hideModal() {
        this.$refs['my-modal'].hide()
    },
    goProductos(){
      this.hideModal();
      this.$router.push('/productos')
    },
  },
};
</script>
<style scoped>
.imgPreview{
  max-width: 80px;
  max-height: 80px;
}
</style>
