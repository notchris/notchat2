<template>
  <div class="message mt-2 px-2">
    <div class="input-group">
      <div class="input-group-prepend">
        <button class="btn btn-light border" type="button"><i class="mdi mdi-settings-outline"></i></button>
        <button class="btn btn-light border" type="button"><i class="mdi mdi-format-text"></i></button>
        <button class="btn btn-light border" type="button"><i class="mdi mdi-emoticon-excited-outline"></i></button>
        <button class="btn btn-light border" type="button"><i class="mdi mdi-at"></i></button>
      </div>
      <input type="text" class="form-control">
      <div class="input-group-append">
        <button class="btn btn-light border" type="button"><i class="mdi mdi-send"></i></button>
      </div>
    </div>
  </div>
</template>

<script>
export default {
  name: 'Message',
  props: {
  }
}
</script>