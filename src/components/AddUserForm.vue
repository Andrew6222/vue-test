<template>
  <div class="modal-bg">
    <div class="modal-content">
        <div class="modal-header">
            <h2>Добавление пользователя</h2>
            <p @click="closeAddUser" style="cursor:pointer;">&#10006;</p>
        </div>
        <form style="display: grid;">
            <label for="name">Имя</label>
            <input type="text" v-model="userName" name="name">
            <label for="number">Телефон</label>
            <input type="text" v-model="userPhone" name="number">
            <label for="userParent">Начальник</label>
            <select name="userParent" v-model="userParent">
                <option v-for="user in users" :key="user.name">{{ user.name }}</option>
            </select>
            <input type="button" value="Сохранить" @click="addUser">
        </form>
    </div>
  </div>
</template>

<script>
export default {
    props: ['closeAddUser', 'users', 'childUsers'],
    data() {
        return {
            userName: null,
            userPhone: null,
            userParent: null
        }
    },
    methods: {
        addUser() {
            let user = {
                name: this.userName,
                number: this.userPhone,
                parent: this.userParent
            }
            if(this.userParent !== null) {
                this.childUsers.push(user)
            } else {
                this.users.push(user)
            }
            localStorage.setItem('users', JSON.stringify(this.users))
            localStorage.setItem('childUsers', JSON.stringify(this.childUsers))
            this.userName = null
            this.userPhone = null
            this.userParent = null
        }
    }
}
</script>

<style>
.modal-header{
    display: flex;
    justify-content: space-between;
    align-items: center;
}
</style>