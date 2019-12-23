<template lang="html">
  <div class="">
    <!-- 轮播模块 -->
    <van-swipe :autoplay="3000" indicator-color="white">
      <van-swipe-item v-for="(item, idx) in 3" :key="idx">
        <img
          :src="require(`@/assets/images/bg${item}.png`)"
          width="100%"
          class="swipe-img"
        />
      </van-swipe-item>
    </van-swipe>
    <!-- 按钮组 -->
    <ul flex="box:mean" class="ul-btn-wrapper">
      <li flex="box:mean">
        <van-button type="primary">发<i />货</van-button>
      </li>
      <li flex="box:mean">
        <van-button type="danger" @click="$router.push('/inquiry')"
          >询<i />价</van-button
        >
      </li>
    </ul>
  </div>
</template>

<script>
export default {
  name: '',
  components: {},
  mixins: [],
  props: {},
  data() {
    return {}
  },
  computed: {},
  watch: {},
  created() {},
  mounted() {},
  destroyed() {},
  methods: {}
}
</script>

<style lang="scss" scoped>
.swipe-img {
  height: 150px;
  float: left;
}
.ul-btn-wrapper {
  margin-top: 40px;
  li {
    padding: 0 16px;
    font-size: 20px;
    i {
      padding: 0 4px;
    }
  }
}
</style>
