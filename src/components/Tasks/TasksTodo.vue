<template>
  <div>
    <listHeader bgColor="bg-orange-4">Todo</listHeader>

    <q-list
      separator
      bordered>

    <task
      v-for="(task, key) in tasksTodo"
      :key="key"
      :task="task"
      :id="key">
    </task>

  </q-list>

  </div>
</template>

<script>
import Task from 'components/Tasks/Task.vue'
import ListHeader from 'components/Shared/ListHeader.vue'

export default {
  props: ['tasksTodo'],
  components: {
    'task': Task,
    'listHeader': ListHeader
  }
}
</script>

<style>

</style>
