<template>
  <b-container>
    <b-row class="justify-content-center">
      <b-col cols="4">
        <InputForm @messageFromChild="childMessageReceived"/>
      </b-col>

      <b-col cols="4">
        <ul>
          <li>FirstName:{{ person.firstName }}</li>
          <li>LastName:{{ person.lastName }}</li>
          <li>Address:{{ person.address }}</li>
          <li>Gender:{{ person.gender }}</li>
        </ul>
      </b-col>
    </b-row>


  </b-container>
</template>

<script lang="ts">
import {Component, Vue} from "nuxt-property-decorator";
import InputForm from '@/components/InputForm.vue';
import {Person} from '~/classes/person';


@Component({
  components: {
    InputForm,
  }
})
export default class test extends Vue {

  public person: Person = new Person();

  childMessageReceived(person: Person) {
    this.person = person;
    console.log("received")
    console.log(this.person);
  }

}
</script>

<style scoped>

</style>
