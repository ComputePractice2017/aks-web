<template>
    <div class="otvet">
        <div class="container">
             <form class="form-inline">
                <label class="sr-only" for="inlineFormInput">Name</label>
                <input type="text" v-model="newcontact.name" class="form-control mb-2 mr-sm-2 mb-sm-0" id="inlineFormInput" placeholder="Вопрос">
    
                <label class="sr-only" for="inlineFormInputGroup">Username</label>
                <div class="input-group mb-2 mr-sm-2 mb-sm-0">
                    <input type="email" v-model="newcontact.email"  class="form-control" id="inlineFormInputGroup" placeholder="Ответ">
                </div>
      
            </form>
            <button v-on:click="addNewContact" v-if="!edit" type="button" class="btn btn-primary">Добавить</button>
                <button v-on:click="endEdit" v-if="edit" type="button" class="btn btn-danger">Сохранить</button>
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
                        <td>{{contact.name}}</td>
                        <td>{{contact.email}}</td>
                        <td>
                            <button v-on:click="editContact(contact)" v-if="!edit" type="button" class="btn btn-warning">Изменить</button>
                            <button v-on:click="deleteContact(contact)" v-if="!edit" type="button" class="btn btn-danger">Удалить</button>
                        </td>
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
        'name': '',
        'email': ''
      },
      search: ''
    }
  },
  computed: {
    contactList: function () {
      var search = this.search
      var filterFn = function (item) {
        return item.name.includes(search) || item.email.includes(search)
      }
      if (this.search !== '') {
        return this.contacts.filter(filterFn)
      }
      return this.contacts
    }
  },
  mounted: function () {
    this.$http.get('/persons').then(response => {
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
        'name': '',
        'email': ''
      }
      obj.name = this.newcontact.name
      obj.email = this.newcontact.email
      this.contacts.push(obj)
      this.$http.post('/persons', obj).then(response => {
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
      this.$http.put('/persons/' + this.newcontact.id, this.newcontact).then(response => {
        console.log(this.response)
      }, response => {
        console.log(response)
      })
      this.edit = false
      var obj = {
        'name': '',
        'email': ''
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
        return input.name === obj.name && input.email === obj.email
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
