<template>
  <q-page class="q-pa-md">

    <noTasks v-if="!Object.keys(tasksTodo).length" @showAddTask="showAddTask = true"/>

    <tasksTodo v-else :tasksTodo="tasksTodo"/>

    <tasksCompleted v-if="Object.keys(tasksCompleted).length" :tasksCompleted="tasksCompleted"/>

    <div class="absolute-bottom text-center q-mb-lg">
      <q-btn
        clickable
        @click="showAddTask = !showAddTask"
        round
        color="primary"
        size="24px"
        icon="add"
      />
    </div>

    <q-dialog v-model="showAddTask">
      <addTask @close="showAddTask = false" :task="task" :id="id"/>
    </q-dialog>
  </q-page>
</template>
<script>
import { mapGetters } from 'vuex'
import AddTask from 'components/Tasks/Modals/AddTask.vue'
import TasksTodo from 'components/Tasks/TasksTodo.vue'
import TasksCompleted from 'components/Tasks/TasksCompleted.vue'
import NoTasks from 'components/Tasks/NoTasks.vue'

export default {
  props: ['id', 'task'],
  data () {
    return {
      showAddTask: true
    }
  },
  computed: {
    ...mapGetters('tasks', ['tasksTodo', 'tasksCompleted'])
  },
  components: {
    'addTask': AddTask,
    'tasksTodo': TasksTodo,
    'tasksCompleted': TasksCompleted,
    'noTasks': NoTasks
  }
}
</script>

<style>

</style>
