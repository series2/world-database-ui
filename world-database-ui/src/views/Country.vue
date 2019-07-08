<template>
  <div>
    <div v-if="countryDetail">
      国名:{{ countryDetail.name }}
      <li>所属大陸:{{ countryDetail.continent }}</li>
      <li>所属地域:{{ countryDetail.region }}</li>
      <li>人口 :{{ countryDetail.population }}人</li>
      <li>平均寿命:{{ countryDetail.lifeexpectancy.Float64 }}歳</li>
      <li>ＧＮＰ :{{ countryDetail.gnp.Float64 }}</li>
      <!--  <div>{{ countryDetail }}</div>-->
    </div>
    <div v-else>国が見つかりませんでした</div>
  </div>
</template>

<script>
import axios from 'axios'
export default {
  name: 'Country',
  data() {
    return {
      countryDetail: null,
    }
  },

  mounted() {
    const countryName = this.$route.params.countryName
    axios.get('/api/countries/' + countryName).then(res => {
      this.countryDetail = res.data
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
