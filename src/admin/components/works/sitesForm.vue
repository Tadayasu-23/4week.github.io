<template lang="pug">
   form(v-bind:class="{activeform: isActiveForm}").works-form
      .titlerow
         .title-admin Редактирование Работы
      .works-add
         .works-add__imgwrap()
            .works-add__image()
               img.works-add__imgpreview(:src="filePreview" v-show="filePreview")
               .works-add__imgdesc(v-show="!filePreview") Перетащите или загрузите для загрузки изображения
               a().works-add__btn Загрузить
                  input(type="file" accept="image/jpeg" @change="processFile($event)")
         .works-add__desc
            label.works-add__row
               .works-add__title Название
               input(type="text" placeholder="Название работы" v-model="formdata.title").works-add__text
               span.error {{ this.validation.firstError('formdata.title') }}
            label.works-add__row
               .works-add__title Ссылка
               input(type="text" placeholder="https://www.yoursite.ru" v-model="formdata.link").works-add__text
               span.error {{ this.validation.firstError('formdata.link') }}
            label.works-add__row
               .works-add__title Описание
               textarea(cols="30", rows="10" placeholder="Описание сайта" v-model="formdata.description").works-add__text.works-add--textarea
               span.error {{ this.validation.firstError('formdata.description') }}
            label.works-add__row
               .works-add__title Добавление тэга
               input(type="text" placeholder="Jquery, Vue.js, HTML5" v-model="formdata.techs").works-add__text
               span.error {{ this.validation.firstError('formdata.techs') }}
            ul.works-add__tags
               li.works-add__tag HTML
                  .works-add__tag--text
                  button(type="button").works-add__tag--btn                  
               li.works-add__tag CSS
                  .works-add__tag--text
                  button(type="button").works-add__tag--btn 
               li.works-add__tag Javascript
                  .works-add__tag--text
                  button(type="button").works-add__tag--btn 
            .works-add__save
               button(type="submit" @click.prevent="clearForm").works-add__undo Отмена
               button(type="button" @click="submitForm").works-add__savebtn Сохранить
</template>

<script>
import { Validator } from 'simple-vue-validator';
import $axios from "../../request";
export default {
   data() {
      return {
         formdata: {
            title: "",
            techs: "",
            photo: "",
            link: "",
            description: "",

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
   computed: {
        titleError() {
            return this.validation.firstError('formdata.title')
        },
        titleError() {
            return this.validation.firstError('formdata.title')
        },
        titleError() {
            return this.validation.firstError('formdata.title')
        },
        percentError() {
            return this.validation.firstError('formdata.link')
        }
   },
   validators: {
      'formdata.title': function(value) {
         return Validator.value(value).required();
      },
      'formdata.techs': function(value) {
         return Validator.value(value).required();
      },
      'formdata.link': function(value) {
         return Validator.value(value).required();
      },
      'formdata.description': function(value) {
         return Validator.value(value).required();
      },
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
            data.append('title', this.formdata.title);
            data.append('techs', this.formdata.techs);
            data.append('link', this.formdata.link);
            data.append('description', this.formdata.description);
            $axios.post(`/works/${this.forEdit.id}`, data).then(response => {
            this.formdata.title = "";
            this.formdata.techs = "";
            this.formdata.photo = 0;
            this.formdata.link = "";
            this.formdata.description = "";
         }) } else {
         let data = new FormData();
         data.append('photo', this.formdata.photo);
         data.append('title', this.formdata.title);
         data.append('techs', this.formdata.techs);
         data.append('link', this.formdata.link);
         data.append('description', this.formdata.description);
         this.$validate().then(success => {
            if (success) {
               $axios.post('/works', data).then(response => {
                  this.formdata.title = "";
                  this.formdata.techs = "";
                  this.formdata.photo = 0;
                  this.formdata.link = "";
                  this.formdata.description = "";
                  alert('Validation succeeded!')
               });
            } else {
               console.log("Validation error");
            }
         })
         }
         
      },
      editFill() {         
         this.formdata.title = this.forEdit.title;
         this.formdata.techs = this.forEdit.techs;
         this.formdata.photo = this.forEdit.photo;
         this.formdata.link = this.forEdit.link;
         this.formdata.description = this.forEdit.description;      
      },
      clearForm() {
         this.formdata.title = "";
         this.formdata.techs = "";
         this.formdata.photo = 0;
         this.formdata.link = "";
         this.formdata.description = "";
         this.isActiveForm = false;
         this.$emit('cancel-sites');
      }
      
   },

}
</script>

<style lang="postcss" scoped src='../../pages/works/works.pcss'></style>