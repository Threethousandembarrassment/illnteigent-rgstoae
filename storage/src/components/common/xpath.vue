<template>
    <div class="path">
      <router-link to='/' class="link">首页</router-link>
      <span>> {{this.xpath}}</span>
    </div>
</template>

<script>
  export default {
    props: ['xpath'],
    data() {
      return {}
    },
    methods: {

    },
    computed: {},
    mounted() {}
  }

</script>

<style scoped lang='scss'>
  .link {
    color: #4ABA60;
    font-weight: 700px;
    border-bottom: 1px solid #4ABA60;
  }

  span {
    color: #7B7B7B;
  }

</style>
