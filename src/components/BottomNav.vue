<template>
  <v-bottom-navigation
    v-model="bottomNav"
    height="40"
  >
    <v-btn value="queue" :to="{ path: '/room/queue'}">
      <span>Queue</span>
    </v-btn>

    <v-btn value="request" :to="{ path: '/room/request'}">
      <span>Request</span>
    </v-btn>
  </v-bottom-navigation>
</template>

<script>
export default {

  data() {
    return {
      bottomNav: 'queue',
    };
  },
};
</script>
