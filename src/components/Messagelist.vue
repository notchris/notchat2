<template>
<div class="messages p-2">
  <div v-for="(message,index) in messages" class="card mb-1">
    <div class="card-body pb-1">
      <div class="row">
        <div class="col-6">
          <img style="width:42px;" class="rounded img-fluid mr-2 float-left" src="https://placehold.it/64x64"/>
          <span style="font-size:1.1rem;margin-bottom:-4px;" class="font-weight-bold float-left">{{message.user}}</span><br/>
          <span style="margin-top:-4px" class="text-muted small">{{message.dt}}</span>
        </div>
        <div class="col-6 text-right">Test</div>
      </div>
      <div class="row">
        <div class="col-12"><p style="margin-left:50px;font-size:0.9rem;">{{message.msg}}</p></div>
      </div>
    </div>
  </div>
</div>
</template>

<script>
export default {
  name: 'Messagelist',
  props: {
    messages: Array
  }
}
</script>