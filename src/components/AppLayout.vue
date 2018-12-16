<template>
  <div>
    <AppNav />

    <RouterView :key="$route.fullPath" />

    <pre style="text-align: left;">
      url should be: `{{ routeShouldBeFullPath }}`
      url current: `{{ $route.fullPath }}`
    </pre>
  </div>
</template>

<script>
import { mapGetters } from 'vuex';
import AppNav from '@/components/AppNav.vue';

export default {
  name: 'AppLayout',

  components: {
    AppNav,
  },

  computed: {
    ...mapGetters(['city']),

    routeShouldBeFullPath() {
      const resolve = this.$router.resolve({
        name: this.$route.name,
        params: { city: this.city },
      }, this.$route);

      return resolve.resolved.fullPath;
    },
  },
};
</script>
