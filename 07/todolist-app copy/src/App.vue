<template>
  <div id="app" class="container">
    <div class="card card-body bg-light">
      <div class="title">:: Todolist App</div>
    </div>
    <div classs="card card-default card-borderless">
      <div class="card-body">
        <InputTodo @add-todo="addTodo" />
        <TodoList :todoList="todoList" @delete-todo="deleteTodo" @toggle-completed="toggleCompleted" /> 
      </div>
    </div>
  </div>
</template>

<script>
import TodoList from './components/TodoList.vue';
import InputTodo from './components/InputTodo.vue';

let ts = new Date().getTime()

export default {
  name: 'App',
  components: {
    TodoList,
    InputTodo
  },
  data() {
    return {
      todoList: [
        { id: ts, todo: "Vue.js 공부하기", completed: false },
        { id: ts+1, todo: "Vue Router 공부하기", completed: false },
        { id: ts+2, todo: "Vuex 공부하기", completed: false },
        { id: ts+3, todo: "Vuex 원고집필", completed: false },
      ]
    }
  },
  methods: {
    addTodo(todo) {
      if (todo.length >= 2) {
        this.todoList.push({
          id: new Date().getTime(),
          todo: todo,
          completed: false
        });
      }
    },
    deleteTodo(id) {
      let index = this.todoList.findIndex((item) => id === item.id);
      this.todoList.splice(index, 1);
    },
    toggleCompleted(id) {
      let index = this.todoList.findIndex((item) => id === item.id);
      this.todoList[index].completed = !this.todoList[index].completed;
    }
  }
}
</script>
