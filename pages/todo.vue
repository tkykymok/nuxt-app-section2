<template>
  <b-container>
    <br>
    <br>
    <br>
    <br>

    <b-row class="">
      <b-col cols="md-6" offset="md-3">
        <b-input-group v-for="(todo1, index) in todoList" :key="todo1.id">
          <b-form-checkbox :value="true" :unchecked-value="false" @change="select(todo1, $event)">
            data-{{ index }}: {{todo1}}
          </b-form-checkbox>
        </b-input-group>

        <b-input-group>
          <b-input ref="text" class="form-control" v-model="todo.title"/>
          <b-button variant="primary ml-2" @click="addTodo">Add</b-button>
        </b-input-group>
      </b-col>
      <b-col cols="md-6" offset="md-3">
        <b-card class="mt-2" v-for="todo in todoList" :key="todo.id">
          <span :class="{'strike': todo.completed}" class="todoTitle" @click="complete(todo.id)">{{ todo.title }}</span>
          <button type="button" aria-label="Close" class="close" @click="del(todo.id)">×</button>
        </b-card>

      </b-col>
    </b-row>


  </b-container>
</template>

<script lang="ts">
import {Component, Vue} from "nuxt-property-decorator";
import {Todo} from '~/classes/todo';

@Component
export default class todo extends Vue {

  public todoList: Todo[] = [];
  public todo: Todo = new Todo();

  public checkedList: Todo[] = [];

  public id: number = 0;

  addTodo() {
    if (this.todo.title.length) {
      const newTodo: Todo = new Todo();
      newTodo.id = this.id;
      this.id++;
      newTodo.title = this.todo.title;
      this.todoList.push(newTodo);
      console.log(newTodo);
      this.todo.title = '';
    }
  }

  complete(id: number) {
    let targetTodo = this.todoList.filter(item => item.id === id)[0];
    targetTodo.completed = true;
  }

  del(id: number) {
    console.log(this.todoList);
    console.log(id);
    this.todoList = this.todoList.filter(item => item.id !== id);
  }

  select(todo: Todo, event: boolean) {
    const id = todo.id;
    if (event) {
      this.checkedList = [...this.checkedList, todo]
    } else {
      this.checkedList = this.checkedList.filter(item => item.id !== id);
    }
    console.log(this.checkedList);
  }

}
</script>

<style scoped>
.card-body {
  padding: 0.5rem;
}

.strike {
  text-decoration-line: line-through;
}

.todoTitle {
  cursor: pointer;
}


</style>
