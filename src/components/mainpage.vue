<template>
  <div class="mainpage">
    <h1>{{ msg }}</h1>
   <p>
  <button @click="ssilki()" type="button" class="btn btn-default btn-lg">Жмак</button>
</p>
<div class="form-group">
    <label for="vopros">Здесь будет дана ссылка на задание вопроса и на полный список вопросов</label>
    <input v-model="vopros" readonly placeholder="вопрос">
    
  </div>
  <div class="form-group">  
    <label for="otvet">Здесь будет дана ссылка для ответа на вопрос</label>
    <input v-model="otvet" readonly placeholder="ответ">
    
  </div>
 
</div>
  </div>
</template>

<script>
export default {
  name: 'mainpage',
  data () {
    return {
      ssilka: null,
      msg: 'Anonimus fask',
      message: '',
      message1: '',
      vopros: '',
      otvet: ''
    }
  },
  methods: {
    ssilki: function () {
      this.otvet = ('/' + obj.murl + '/' + obj.surl, this.newssilka)
      this.vopros = ('/' + obj.murl, this.newssilka)
      var obj = {
        'murl': '',
        'surl': ''
      }
      obj.murl = this.newssilka.murl
      obj.surl = this.newssilka.surl
      this.ssilka.push(obj)
      this.$http.post('/fask', obj).then(response => {
        console.log(this.response)
      }, response => {
        console.log(response)
      })
      this.route.params.vopros = obj.murl
      this.route.params.otvet = obj.surl
    }
  }
}
</script>


<style scoped>
h1, h2 {
  font-weight: normal;
}

ul {
  list-style-type: none;
  padding: 0;
}

li {
  display: inline-block;
  margin: 0 10px;
}

a {
  color: #42b983;
}
</style>
