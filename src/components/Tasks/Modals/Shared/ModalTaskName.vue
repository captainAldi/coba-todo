<template>
  <div class="row q-mb-sm">
    <q-input
      autofocus
      outlined
      @input="$emit('update:name', $event)"
      :value="name"
      :rules="[val => !!val || 'Field is required']"
      label="Task Name"
      ref="name"
      class="col"/>
  </div>
</template>

<script>
export default {
  props: ['name']
}
</script>

<style>

</style>
