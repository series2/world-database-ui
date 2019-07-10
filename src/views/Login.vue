<template>
  <div class="login">
    <h1>This is an login page!!!test</h1>
    <div v-if="true">
      <!--ログインしていなかったら(false)フォームを出す-->
      <div>
        <input type="text" v-model="username" />
        <input type="password" v-model="password" />
      </div>
      <div>
        <button @click="login">login</button>
      </div>
    </div>
    <div v-else>こんにちは(username)さん。</div>
    <div>
      <button @click="logout">logout</button>
    </div>
  </div>
</template>

<script>
import axios from 'axios'
export default {
  name: 'login',
  data() {
    return {
      username: '',
      password: '',
    }
  },
  methods: {
    login() {
      axios.post('/api/login', {
        username: this.username,
        password: this.password,
      })
    },
    logout() {
      axios.post('/api/logout', {
        username: null,
        password: null,
      })
    },
  },
}
</script>
