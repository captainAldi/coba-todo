<template>
  <div>
    <q-banner class="bg-grey-3">
      <template v-slot:avatar>
        <q-icon name="check" color="primary" />
      </template>
      Tidak ada kegiatan hari ini
      <template v-slot:action>
        <q-btn flat color="primary" label="Add Task" @click="$emit('showAddTask')"/>
      </template>
    </q-banner>
  </div>
</template>

<script>
export default {

}
</script>

<style>

</style>
