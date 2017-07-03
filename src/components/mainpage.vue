<template>
  <div class="mainpage">
    <h1>{{ msg }}</h1>
   <p>
  <button type="button" class="btn btn-default btn-lg">Большая кнопка</button>
</p>
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
