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
      vopros: '',
      otvet: '',
      murl: '',
      surl: ''
    }
  },
  methods: {
    ssilki: function () {
      
      
      this.$http.post('/fask', obj).then(response => {
        this.ssilka=response.body
        console.log(this.ssilka)
      }, response => {
        console.log(response)
      })

      if (this.ssilka === null) {
        this.ssilka = []
      }
       var obj = {
        'murl': '',
        'surl': ''
      }
      obj.murl = this.ssilka.murl
      obj.surl = this.ssilka.surl

      this.otvet = '/' + this.ssilka.murl + '/' + this.ssilka.surl
      this.vopros = '/' + this.ssilka.murl
      
    
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
