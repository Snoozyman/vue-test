<template>
<span>
    <v-navigation-drawer
      v-model="drawer"
      width=300
      app
    >
      <v-list>
        <v-list-item
          link
          v-for="menuItem in menuItems"
          :key="menuItem.title"
          :to="menuItem.path"
        >
          <v-list-item-content class="menuItem">
              {{ menuItem.title }}
          </v-list-item-content>
        </v-list-item>
      </v-list>
      <div style="width: 100%">
        <div id="copyright-text">
          By Snoozyman 😋
        </div>
        &copy; {{ new Date().getFullYear() }}</div>
    </v-navigation-drawer>

    <v-app-bar
      app
      color="indigo"
      dark
    >
      <v-app-bar-nav-icon @click.stop="drawer = !drawer"></v-app-bar-nav-icon>
      <v-toolbar-title class="text-center">Quefy</v-toolbar-title>
    </v-app-bar>
</span>
</template>

<script>

export default {
  name: 'AppBar',
  props: {
    source: String,
  },
  data: () => ({
    drawer: null,
    menuItems: [
      { title: 'Home', path: '/' },
      { title: 'Join', path: '/join' },
      { title: 'Debug', path: '/debug' },
      { title: 'Room', path: '/room' },
    ],
  }),
};
</script>

<style scoped>

</style>
