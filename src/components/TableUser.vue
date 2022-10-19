<template>
  <div class="content-bg">
    <div class="content">
      <div class="table-list">
        <button @click="visibleAddUser = true" class="table-list_buton">Добавить</button>
        <table class="iksweb">
          <thead>
              <tr>
                <th>Имя</th>
                <th>Телефон</th>
              </tr>
          </thead>
          <tbody v-for="user in users" :key="user.name">
            <tr v-if="user.parent == null">
              <td>{{ user.name }}</td>
              <td>{{ user.number }}</td>
            </tr>
            <tr v-for="childUser in childUsers" :key="childUser.name" v-if="childUser.parent == user.name" style="padding-left:10px;">
              <td>{{childUser.name}}</td>
              <td>{{childUser.number}}</td>
            </tr>
          </tbody>
        </table>
      </div>
      <div class="form-add" v-if="visibleAddUser">
        <AddUserForm
        :closeAddUser="closeAddUser"
        :users="users"
        :childUsers="childUsers"
        />
      </div>
    </div>
  </div>
</template>

<script>
import AddUserForm from './AddUserForm.vue'
export default {
  components: {
    AddUserForm
  },
  name: 'HelloWorld',
  data () {
    return {
      visibleAddUser: false,
      users: [],
      childUsers: []
    }
  },
  methods: {
    closeAddUser() {
      this.visibleAddUser = false
    }
  },
  created() {
    const users = localStorage.getItem('users')
    const childUsers = localStorage.getItem('childUsers')
      if (users) {
        this.users = JSON.parse(users)
      }
      if (childUsers) {
        this.childUsers = JSON.parse(childUsers)
      }
  }
}
</script>

<style>
body{
  margin: 0;
  padding: 0;
}
table.iksweb{
	border-collapse:collapse;
	border-spacing:0;
	height: auto;
}
table.iksweb,table.iksweb td, table.iksweb th {
	border: 1px solid #595959;
  background-color: #fff;
}
table.iksweb td,table.iksweb th {
	padding: 3px;
	width: 30px;
	height: 35px;
}
.content{
  display: flex;
  justify-content: space-between;
  flex-wrap: wrap;
  width: 80%;
  margin: 0 auto;
  padding-top: 50px;
}
.content-bg{
  background: url('../assets/list.jpg');
  width: 100vw;
  height: 100vh;
}
.form-add{
  background-color: #fff;
  border: 1px solid #000;
  padding: 15px;
}
.table-list_buton{
  background-color: #e0e0e0;
  color: #000;
  border: 1px solid #000;
  padding: 8px 30px;
  border-radius: 20px;
  font-size: 16px;
  cursor: pointer;
}
</style>
