<template>
 <div>

  <q-item
   @click="updateTask({id: id, updates: {completed: !task.completed}})"
   :class="!task.completed ? 'bg-orange-5' : 'bg-green-5'"
   clickable
   v-ripple>
   <q-item-section side top>
     <q-checkbox v-model="task.completed" />
   </q-item-section>

   <q-item-section>
     <q-item-label
       :class="{ 'text-strikethrough' : task.completed }">
       {{ task.name }}
     </q-item-label>
   </q-item-section>

   <q-item-section side top>
     <div class="row">
       <div class="colum justify-center">
         <q-icon
           name="event"
           size="18px"
           class="q-mr-xs">
         </q-icon>
       </div>
       <div class="column">
         <q-item-label
           class="row justify-end"
           caption>
           <small>{{ task.dueDate }}</small>
         </q-item-label>
         <q-item-label
           class="row justify-end"
           caption>
           <small>{{ task.dueTime }}</small>
         </q-item-label>
       </div>
     </div>
   </q-item-section>

   <q-item-section side>
     <div class="row">
        <q-btn
        @click.stop="showEditTask = true"
        flat
        round
        color="primary"
        icon="edit"
        dense/>

        <q-btn
        @click.stop="promptToDelete(id)"
        flat
        round
        color="red"
        icon="delete"
        dense/>
      </div>
   </q-item-section>

    <q-dialog v-model="showEditTask">
      <editTask
        @close="showEditTask = false"
        :task="task"
        :id="id"/>
    </q-dialog>
  </q-item>

 </div>
</template>

<script>
import { mapActions } from 'vuex'
import EditTask from 'components/Tasks/Modals/EditTask.vue'

export default {
  props: ['task', 'id'],
  data () {
    return {
      showEditTask: false
    }
  },
  methods: {
    ...mapActions('tasks', ['updateTask', 'deleteTask']),
    promptToDelete (id) {
      this.$q.dialog({
        title: 'Confirm',
        message: 'Bener nih hapus ?',
        cancel: true,
        persistent: true
      }).onOk(() => {
        this.deleteTask(id)
      })
    }
  },
  components: {
    'editTask': EditTask
  }
}
</script>

<style>

</style>
