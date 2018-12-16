<template>
  <select
    id="city"
    v-model="value"
    @change="handleChange"
  >
    <option
      v-for="city in cities"
      :key="city"
    >
      {{ city }}
    </option>
  </select>
</template>

<script>
import { mapActions } from 'vuex';

export default {
  name: 'CitySelect',

  data() {
    return {
      value: 'one',
      cities: ['one', 'two', 'three', 'four'],
    };
  },

  methods: {
    ...mapActions(['setCity']),

    handleChange() {
      this.setCity(this.value);
      this.$router.push({ name: 'home' });
    },
  },
};
</script>

<style>
#city {
  margin: 0 2em 0 0;
}
</style>
