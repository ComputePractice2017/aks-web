<template>
    <div class="vopros">
        <div class="container">
       
           
            <form class="form-inline">

                <label class="sr-only" for="inlineFormInput">ask</label>
                
                <input type="text" v-model="newcontact.ask" class="form-control mb-2 mr-sm-2 mb-sm-0" id="inlineFormInput" placeholder="Введите здесь вопрос">
                
                <label class="sr-only" for="inlineFormInputGroup">Username</label>
                     
                
                <button v-on:click="endEdit" v-if="edit" type="button" class="btn btn-danger">Сохранить</button>
            </form>
             <button v-on:click="addNewContact" v-if="!edit" type="button" class="btn btn-primary">Добавить</button>
            <table class="table">
                <thead>
                    <tr>
                        <th>Вопрос</th>
                        <th>Ответ</th>
                        <th></th>
                    </tr>
                </thead>
                <tbody>
                    <tr v-for="contact in contactList">
                        <td>{{contact.ask}}</td>
                        <td>{{contact.answer}}</td>
                        
                    </tr>
                </tbody>
            </table>

        </div>  
    </div>
</template>

<script>
export default {
  name: 'hello',
  data () {
    return {
      contacts: null,
      edit: false,
      newcontact: {
        'ask': '',
        'answer': ''
      },
      search: ''
    }
  },
  computed: {
    contactList: function () {
      var search = this.search
      var filterFn = function (item) {
        return item.ask.includes(search) || item.answer.includes(search)
      }
      if (this.search !== '') {
        return this.contacts.filter(filterFn)
      }
      return this.contacts
    }
  },
  mounted: function () {
    this.vopros = this.$route.params.vopros
    this.$http.get('/fask/' + this.vopros).then(response => {
      this.contacts = response.body
      console.log(this.contacts)
    }, response => {
      console.log(response)
    })
  },
  methods: {
    addNewContact: function () {
      if (this.contacts === null) {
        this.contacts = []
      }
      var obj = {
        'ask': '',
        'answer': ''
      }
      obj.ask = this.newcontact.ask
      obj.answer = this.newcontact.answer
      this.contacts.push(obj)
      this.$http.post('/fask/' + this.newcontact.murl + '/question', obj).then(response => {
        console.log(this.response)
      }, response => {
        console.log(response)
      })
    },
    editContact: function (obj) {
      this.edit = true
      this.newcontact = obj
    },
    endEdit: function () {
      this.$http.post('/fask/{guid}/question/' + this.newcontact.id, this.newcontact).then(response => {
        console.log(this.response)
      }, response => {
        console.log(response)
      })
      this.edit = false
      var obj = {
        'ask': '',
        'answer': ''
      }
      this.newcontact = obj
    },
    deleteContact: function (obj) {
      this.$http.delete('/persons/' + obj.id).then(response => {
        console.log(this.response)
      }, response => {
        console.log(response)
      })
      var eq = function (input) {
        return input.ask === obj.ask && input.answer === obj.answer
      }
      var index = this.contacts.findIndex(eq)
      if (index > -1) {
        this.contacts.splice(index, 1)
      }
    }
  }
}
</script>

<style>
.form {
    margin-top: 20px;
    margin-bottom: 20px;
}
</style>
