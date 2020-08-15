<template>
  <v-app>
    <app-bar />
    <v-main>
      <router-view></router-view>
    </v-main>
  </v-app>
</template>

<script>

import AppBar from './components/AppBar.vue';

export default {
  name: 'App',

  components: {
    AppBar,
  },

  data: () => ({
    //
  }),
};
</script>
<style scoped>

#copyright-text {
  color:red;
}
v-btn:hover {
  cursor: pointer;
}
.v-footer {
  width: 100%;
}
</style>
