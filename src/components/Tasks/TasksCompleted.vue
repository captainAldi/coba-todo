<template>
  <div class="q-mt-lg">
    <listHeader bgColor="bg-green-4">Task Completed</listHeader>

    <q-list
      separator
      bordered>

      <task
        v-for="(task, key) in tasksCompleted"
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
  props: ['tasksCompleted'],
  components: {
    'task': Task,
    'listHeader': ListHeader
  }
}
</script>

<style>

</style>
