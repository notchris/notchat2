<template>
  <table class="table table-bordered table-hover table-sm">
    <thead class="bg-light">
      <tr>
        <th scope="col">User</th>
        <th scope="col">X</th>
      </tr>
    </thead>
    <tbody>
      <tr v-for="(client,index) in clients">
        <td>{{client.id}}</td>
        <td>X</td>
      </tr>
    </tbody>
  </table>
</template>

<script>
export default {
  name: 'Userlist',
  props: {
    clients: Array 
  }
}
</script>