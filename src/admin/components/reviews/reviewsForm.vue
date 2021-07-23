<template lang="pug">
   form(v-bind:class="{activeform: isActiveForm}").works-form
      .activeform__shadow
         .titlerow
            .title-admin Новый отзыв
         .works-add.reviews__add
            .reviews__imgwrap
               .reviews__image
                  img(:src="userPic" v-show="!filePreview").reviews__stub
                  img(:src="filePreview" v-show="filePreview").reviews__stub
               a().works-add__undo.reviews-avatar Добавить фото
                  input(type="file" accept="image/jpeg" @change="processFile($event)")
            .reviews__desc
               .reviews__row
                  label.works-add__row.reviews-add__row
                     .works-add__title Имя автора
                     input(type="text" placeholder="Имя Фамилия" v-model="formdata.author").works-add__text
                     span.error {{ this.validation.firstError('formdata.author') }}
                  label.works-add__row.reviews-add__row
                     .works-add__title Титул автора
                     input(type="text" placeholder="Основатель LoftSchool" v-model="formdata.occ").works-add__text
                     span.error {{ this.validation.firstError('formdata.occ') }}
               label.works-add__row
                  .works-add__title Отзыв
                  textarea(cols="30", rows="10" placeholder="Этот парень проходил обучение..." v-model="formdata.text").reviews-add__textarea
                  span.error {{ this.validation.firstError('formdata.text') }}
               .works-add__save
                  button(type="button" @click.prevent="clearForm").works-add__undo Отмена
                  button(type="button" @click="submitForm").works-add__savebtn Сохранить
</template>

<script>
import { Validator } from 'simple-vue-validator';
import $axios from "../../request";
import appInput from "../input/input.vue";

export default {
   components: {
      appInput
   },
   data() {
      return {
         formdata: {
            author: "",
            occ: "",
            photo: 0,
            text: "",
         },
         filePreview: "",
         isActiveForm: false,
      }
   },
   props: {
      isEdit: Boolean,
      forEdit: Object,
      isReady: Boolean,
   },
   watch: {
      forEdit: {
         immediate: false,
         handler (newVal, oldVal) {
            this.editFill();
         }
      },
      isReady: {
         immediate: true,
         handler (newVal, oldVal) {
            this.isActiveForm = newVal;
         }
      }
   },
   computed: {
        titleError() {
            return this.validation.firstError('formdata.title')
        },
        percentError() {
            return this.validation.firstError('formdata.link')
        },
        userPic() {
            return require("../../../images/content/zaglushka.jpg").default
        }
   },
   validators: {
      'formdata.author': function(value) {
         return Validator.value(value).required();
      },
      'formdata.occ': function(value) {
         return Validator.value(value).required();
      },
      'formdata.text': function(value) {
         return Validator.value(value).required();
      },
   },
   methods: {
      processFile(event) {
         this.formdata.photo = event.target.files[0];
         this.renderFile(this.formdata.photo).then((f) => {
            this.filePreview = f
        })
      },
      selectImage(file) {
         this.file = file;
         let reader = new FileReader();
         reader.onload = this.formdata.photo;
         reader.readAsDataURL(file);
         console.log(file);
      },
      renderFile(file) {
      const reader = new FileReader();

      return new Promise((resolve, reject) => {
          try {
              reader.readAsDataURL(file);
              reader.onloadend = () => {
                  resolve(reader.result);
              };
          } catch (error) {
              throw new Error("Ошибка при чтении файла");
          }
      });
      },
      submitForm() {
         if (this.isEdit === true) {
            let data = new FormData();
            data.append('photo', this.formdata.photo);
            data.append('title', this.formdata.author);
            data.append('occ', this.formdata.occ);
            data.append('text', this.formdata.text);
            $axios.post(`/reviews/${this.forEdit.id}`, data).then(response => {
            this.formdata.author = "";
            this.formdata.occ = "";
            this.formdata.photo = 0;
            this.formdata.text = "";
         }) } else {
         let data = new FormData();
         data.append('photo', this.formdata.photo);
         data.append('author', this.formdata.author);
         data.append('occ', this.formdata.occ);
         data.append('text', this.formdata.text);
         this.$validate().then(success => {
            if(success) {
               $axios.post('/reviews', data).then(response => {
               this.formdata.author = "";
               this.formdata.occ = "";
               this.formdata.photo = 0;
               this.formdata.text = "";
         })
            } else {
               console.log("Validation error reviews");
            }
         })
         }
      },
      editFill() {         
         this.formdata.author = this.forEdit.author;
         this.formdata.occ = this.forEdit.occ;
         this.formdata.photo = this.forEdit.photo;
         this.formdata.text = this.forEdit.text;      
      },
      clearForm() {
         this.formdata.author = "";
         this.formdata.occ = "";
         this.formdata.photo = 0;
         this.formdata.text = "";
         this.isActiveForm = false;
         this.$emit('cancel-sites');
      }
      
   },

}
</script>

<style lang="postcss" scoped src='../../pages/reviews/reviews.pcss'></style>