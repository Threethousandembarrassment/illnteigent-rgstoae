<template>
  <div class="app">
    <xHead></xHead>
    <xNavigation v-bind:modular="modular"></xNavigation>
    <main>
      <div class="lay">
        <xPath v-bind:xpath="xpath"></xPath>
        <div class="searchBox"></div>
      </div>
    </main>
    <xFooter></xFooter>

  </div>
</template>

<script>
  import xFooter from '../common/xfooter.vue'
  import xHead from '../common/xheader.vue'
  import xNavigation from '../common/xnavigation.vue'
  import xPath from '../common/xpath.vue'
  export default {
    name: 'func',
    components: {
      xFooter,
      xNavigation,
      xHead,
      xPath
    },
    data() {
      return {
        modular: 7,
        xpath: "功能管理",
      }
    },
    methods: {

    },
    computed: {},
    mounted() {}
  }

</script>

<style scoped lang='scss'>
  @import '../functionManagement/functionManagement.scss';

</style>
