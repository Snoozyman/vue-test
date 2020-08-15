<template>
<v-container fluid height="100%">
  <bottom-nav class="mb-2 d-md-none"/>
  <v-row dense class="d-none d-md-flex deskrow">
    <v-col>
      <Queue />
    </v-col>
    <v-col>
      <RequestSongs />
    </v-col>
  </v-row>
  <v-row class="d-md-none">
    <transition>
      <keep-alive>
        <router-view></router-view>
      </keep-alive>
    </transition>
  </v-row>
  <v-card v-intersect="infiniteScrolling"></v-card>

</v-container>
</template>

<script>
import Queue from '../components/Queue.vue';
import BottomNav from '../components/BottomNav.vue';
import RequestSongs from '../components/RequestSongs.vue';

export default {
  name: 'Room',
  components: {
    Queue, BottomNav, RequestSongs,
  },

};
</script>

<style>
.deskrow {
  height: 100%;
}

</style>
