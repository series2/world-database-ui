<template>
  <div>
    <div>東京のデータ習得testするよ!</div>
    <div>{{ TokyoInfo }}</div>

    <div v-if="TokyoInfo">{{ TokyoInfo }}</div>
    <div v-else>Tokyoはdatabaseにありません。</div>
  </div>
</template>
<script>
import axios from 'axios'
export default {
  name: 'Tokyotest',
  data() {
    return {
      TOkyoInfo: null,
    }
  },

  mounted() {
    // const TokyoName = 'Tokyo'
    // axios.get('/api/cities/' + TokyoName).then(res => {
    axios.get('/api/Tokyo').then(res => {
      // このget内のエンドピンがdevtoolに表示される。
      // ここ/api/TOkyoにしたい。
      this.TokyoInfo = res.data
    })
  },
}
</script>
