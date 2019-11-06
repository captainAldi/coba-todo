<template>
 <q-card>
   <modalHeader>Add Task</modalHeader>

  <form @submit.prevent="submitForm()">
    <q-card-section>

      <modalTaskName :name.sync="taskToSubmit.name" ref="modalTaskName"/>

      <modalTaskDueDate :dueDate.sync="taskToSubmit.dueDate"/>

      <modalTaskDueTime :dueTime.sync="taskToSubmit.dueTime"/>

      <modalButton />

   </q-card-section>

  </form>

 </q-card>
</template>

<script>
import { mapActions } from 'vuex'
import ModalHeader from 'components/Tasks/Modals/Shared/ModalHeader.vue'
import ModalTaskName from 'components/Tasks/Modals/Shared/ModalTaskName.vue'
import ModalTaskDueDate from 'components/Tasks/Modals/Shared/ModalTaskDueDate.vue'
import ModalTaskDueTime from 'components/Tasks/Modals/Shared/ModalTaskDueTime.vue'
import ModalButton from 'components/Tasks/Modals/Shared/ModalButton.vue'

export default {
  data () {
    return {
      taskToSubmit: {
        name: '',
        completed: false,
        dueTime: '',
        dueDate: ''
      }
    }
  },
  methods: {
    ...mapActions('tasks', ['addTask']),
    submitForm () {
      this.$refs.modalTaskName.$refs.name.validate()
      if (!this.$refs.modalTaskName.$refs.name.hasError) {
        this.submitTask()
      }
    },
    submitTask () {
      this.addTask(this.taskToSubmit)
      this.$emit('close')
    }
  },
  components: {
    'modalHeader': ModalHeader,
    'modalTaskName': ModalTaskName,
    'modalTaskDueDate': ModalTaskDueDate,
    'modalTaskDueTime': ModalTaskDueTime,
    'modalButton': ModalButton
  }
}
</script>

<style>

</style>
