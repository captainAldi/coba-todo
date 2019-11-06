import Vue from 'vue'
import { uid } from 'quasar'

const state = {
  // tasks: [
  //   {
  //     id: 1,
  //     name: 'Go To Campus',
  //     completed: false,
  //     dueTime: '18:30',
  //     dueDate: '2019/05/14'
  //   },
  //   {
  //     id: 2,
  //     name: 'Go To Bali',
  //     completed: false,
  //     dueTime: '19:30',
  //     dueDate: '2018/05/15'
  //   },
  //   {
  //     id: 3,
  //     name: 'Go To Jakarta',
  //     completed: false,
  //     dueTime: '16:30',
  //     dueDate: '2019/05/16'
  //   }
  // ]
  tasks: {
    'ID1': {
      name: 'Go To Bali',
      completed: false,
      dueTime: '19:30',
      dueDate: '2019/05/15'
    },
    'ID2': {
      name: 'Go To Jakarta',
      completed: false,
      dueTime: '18:30',
      dueDate: '2019/05/18'
    },
    'ID3': {
      name: 'Go To Kaskus',
      completed: false,
      dueTime: '20:30',
      dueDate: '2019/05/14'
    }
  }
  // tasks: {

  // }
}

const mutations = {
  updateTask (state, payload) {
    Object.assign(state.tasks[payload.id], payload.updates)
  },
  deleteTask (state, id) {
    Vue.delete(state.tasks, id)
  },
  addTask (state, payload) {
    Vue.set(state.tasks, payload.id, payload.task)
  }
}

const actions = {
  updateTask ({ commit }, payload) {
    commit('updateTask', payload)
  },
  deleteTask ({ commit }, id) {
    commit('deleteTask', id)
  },
  addTask ({ commit }, task) {
    let taskId = uid()
    let payload = {
      id: taskId,
      task: task
    }
    commit('addTask', payload)
  }
}

const getters = {
  tasksTodo: (state) => {
    let tasks = {}
    Object.keys(state.tasks).forEach(function (key) {
      let task = state.tasks[key]
      if (!task.completed) {
        tasks[key] = task
      }
    })
    return tasks
  },
  tasksCompleted: (state) => {
    let tasks = {}
    Object.keys(state.tasks).forEach(function (key) {
      let task = state.tasks[key]
      if (task.completed) {
        tasks[key] = task
      }
    })
    return tasks
  }
}

export default {
  namespaced: true,
  state,
  mutations,
  actions,
  getters
}
