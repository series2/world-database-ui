<template>
  <div>
    <div>
      <div>以下のフォームに国名を入力すると基本情報が得られます。</div>
      <input
        type="text"
        placeholder="国名を入力してください。"
        v-model="countryname"
      />
    </div>
    <div>
      <button @click="search">search</button>
    </div>

    <div>
      <div v-if="countryinfo">{{ countryinfo }}</div>
      <!--<div v-else-if="countryinfo === null">国名を入力してください</div> -->
      <!--<div v-else>データベースにアクセスできませんでした。</div>-->
      <!--以下2行自分で編集 -->
      <!-- <div>世界の国一覧なんだと</div> -->
      <!-- <div>{{countriesInfo}}</div> -->
    </div>
    <div>
      --------------------------------------------------------------------
    </div>
    <div>国を列挙</div>

    <!--<div v-if="countrylistinfo">{{ countrylistinfo }}</div>-->
    <div v-if="countrylistinfo">
      <div v-for="Country in countrylistinfo" :key="Country.Name">
        <li>
          <router-link :to="'/country/' + Country.name">{{
            Country.name
          }}</router-link>
        </li>
        <!--  {{ Country.name}}  -->
        <!--ここのCountryはjsonで帰ってきた一つ一つのデータセットのことを指し、.nameはjsonで指定したデータの中の値の名前を示す。-->
      </div>
    </div>
  </div>
</template>

<script>
import axios from 'axios'

export default {
  /* name: 'countrylist',
  data() {
    return {
      countrylist: null,
    }, */

  name: 'countrylist',
  data() {
    return {
      countryinfo: null,
      countrylistinfo: null,
    }
  }, // これやるとなぜかmounted()で返ってきたresponseの値がうまく表示される。

  mounted() {
    axios.get('/api/country').then(res => {
      this.countrylistinfo = res.data
    })

    /* const countryName = 'Tokyo' // ここに知りたい国名を入れる。もともとはthis.$route.params.cityName
    axios.get('/api/countries/' + countryName).then(res => {
      this.countryinfo = res.data
    }) */
    /*  axios
      .get('/api/countries/' + this.countryname)
      .then(res => {
        this.countryinfo = res.data
      })
      // eslint-disable-next-line handle-callback-err
      .catch(error => {
        alert('「' + this.countryname + '」は国名として正しくありません。')
        this.countryinfo = 'error'
      }) */
  },

  methods: {
    search() {
      if (!this.countryname) {
        this.countryinfo = '入力欄が空です。国名を入力してください。'
      } else {
        axios
          .get('/api/countries/' + this.countryname)
          .then(res => {
            this.countryinfo = res.data
          })
          // eslint-disable-next-line handle-callback-err
          .catch(error => {
            alert('「' + this.countryname + '」は国名として正しくありません。')
            this.countryinfo = 'error'
          })
      }
    },
  },
}
</script>
