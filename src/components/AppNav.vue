<template>
  <div id="nav">
    <CitySelect />
    <br>
    RouterLinks:
    <RouterLink :to="{ name: 'home' }">Home</RouterLink> |
    <RouterLink :to="{ name: 'sales', params: { city } }">Sales</RouterLink> |
    <RouterLink :to="{ name: 'shops', params: { city } }">Shops</RouterLink>
    <br>
    AppLinks:
    <AppLink :to="{ name: 'home' }">Home</AppLink> |
    <AppLink :to="{ name: 'sales', params: { city } }">Sales</AppLink> |
    <AppLink :to="{ name: 'shops', params: { city } }">Shops</AppLink>
  </div>
</template>

<script>
import { mapGetters } from 'vuex';
import AppLink from '@/components/AppLink';
import CitySelect from '@/components/CitySelect.vue';

export default {
  name: 'AppNav',

  components: {
    AppLink,
    CitySelect,
  },

  computed: {
    ...mapGetters(['city']),
  },
};
</script>

<style>
#nav {
  padding: 30px;
}

#nav a {
  font-weight: bold;
  color: #2c3e50;
}

#nav a.router-link-exact-active {
  color: #42b983;
}
</style>
