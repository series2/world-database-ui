<template>
  <div>
    <div v-if="cityInfo">{{ cityInfo }}</div>
    <div v-else>街が見つかりませんでした</div>
    <!--以下2行自分で編集 -->
    <!-- <div>世界の国一覧なんだと</div> -->
    <!-- <div>{{countriesInfo}}</div> -->
  </div>
</template>

<script>
import axios from 'axios'
export default {
  name: 'City',
  data() {
    return {
      cityInfo: null,
    }
  },

  mounted() {
    const cityName = this.$route.params.cityName
    axios.get('/api/cities/' + cityName).then(res => {
      this.cityInfo = res.data
    })
  },

  // これ以下自分で編集
  // mounted2() {
  //    const contryNames = this.$route.params.cityName;
  //    axios.get("/api/cities/" + cityName).then(res => {
  //      this.countriesInfo = res.data;
  //   });
  //  }
}
</script>
