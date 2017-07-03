<template>
  <div class="mainpage">
    <h1>{{ msg }}</h1>
   <p>
  <button type="button" class="btn btn-default btn-lg">Жмак</button>
</p>
<div class="form-group">
    <label for="vopros">Здесь будет дана ссылка на задание вопроса и на полный список вопросов</label>
    <input type="vopros" class="form-control" id="vopros" aria-describedby="vopros" placeholder="Ссылка на вопрос">
    
  </div>
  <div class="form-group">  
    <label for="otvet">Здесь будет дана ссылка для ответа на вопрос</label>
    <input type="otvet" class="form-control" id="otvet" aria-describedby="otvet" placeholder="Ссылка на ответ">
    
  </div>
  </div>
</template>

<script>
export default {
  name: 'mainpage',
  data () {
    return {
      msg: 'Anonimus fask'
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
