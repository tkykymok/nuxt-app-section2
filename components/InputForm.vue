<template>
  <div>


        <b-form>
          <b-form-group id="input-group-1" label="First Name:" label-for="input-1">
            <b-form-input id="input-1" type="text" v-model="person.firstName"/>
          </b-form-group>

          <b-form-group id="input-group-2" label="Last Name:" label-for="input-2">
            <b-form-input id="input-2" type="text" v-model="person.lastName"/>
          </b-form-group>

          <b-form-group id="input-group-3" label="Address:" label-for="input-3">
            <b-form-input id="input-3" type="text" v-model="person.address"/>
          </b-form-group>

          <b-form-group id="input-group-4" label="Gender:" label-for="input-4">
            <b-form-select ref="gender" id="input-4" type="text" v-model="person.gender" @change="checkGender">
              <b-form-select-option v-for="option in genderOption" :value="option.value" :key="option.value">
                {{ option.gender }}
              </b-form-select-option>
            </b-form-select>
          </b-form-group>

          <b-form-group id="input-group-5" label="CheckBox:" label-for="input-5" v-show="isMale">
            <b-form-checkbox id="input-5" v-model="isCheck" value="1" unchecked-value="0"/>
            <p>{{ isCheck }}</p>
          </b-form-group>
          <b-button type="button" variant="primary" @click="send">Submit</b-button>
        </b-form>



  </div>
</template>

<script lang="ts">
import {Component, Vue, Watch} from 'nuxt-property-decorator';
import {Person} from '~/classes/person';

@Component
export default class InputForm extends Vue {
  public person: Person = new Person();

  public genderOption = [{value: "1", gender: "Male"}, {value: "2", gender: "Female"}]
  public isMale: boolean = true;
  public isCheck: string = "0";

  mounted() {
    this.person.gender = "1";
    if (this.person.gender === "1") {
      this.isCheck = "1";
      this.$emit('messageFromChild', this.person);
    }
  }

  @Watch('isMale')
  public onGenderChanged() {
    if (!this.isMale) {
      this.isCheck = "0";
    }
  }

  checkGender() {
    this.person.gender == "1" ? this.isMale = true : this.isMale = false;
  }

  send() {

    // console.log(this.person);
    // console.log(this.isCheck);
    // console.log(this.isMale);
  }

}
</script>


