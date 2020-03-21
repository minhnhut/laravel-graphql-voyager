// this is dummy ts file
// to make Typescript stop complain about module not found when import component
// https://github.com/vuejs/vue-class-component/issues/219
declare module "*.vue" {
  import Vue from "vue";
  export default Vue;
}
