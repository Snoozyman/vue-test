<template>
  <v-container fluid class="grey lighten-2" id="main_songs">
    <v-row v-if="debug">
      <v-col>
        <v-btn @click="addSong()" class="ma-1">Add song</v-btn>
        <v-btn @click="removeSongsFromList()"  class="ma-1">Remove songs</v-btn>
      </v-col>
    </v-row>
    <span v-if="songs && songs.length > 0">
    <v-row class="ma-2 rounded-xl red lighten-3">
      <v-col cols="12">
        <div class="text-center text-h4">
          <label>
            Now playing
          </label>
        </div>
      </v-col>
    </v-row>
    <v-row  class="ma-2 rounded-xl">
      <v-col cols="12">
        <div id="now-playing" class="">
          <SongCom v-bind:song="nowPlaying" class="" />
        </div>
      </v-col>
    </v-row>
    <transition-group tag="div" name="fade">
      <v-row v-for="song in songs" :key="song.id" class="pa-1" no-gutters>
          <v-col>
              <SongCom v-if="song.id >= 1" v-bind:song="song" class="song"/>
          </v-col>
      </v-row>
      </transition-group>
      </span>
      <div v-else>
        <v-alert type="warning">No songs added</v-alert>
      </div>
  </v-container>
</template>

<script>
import SongCom from './Song.vue';

let id = 0;

export default {
  name: 'Song',
  data() {
    return {
      isMobile: true,
      debug: true,
      songs: [],
    };
  },
  computed: {
    nowPlaying() {
      return this.songs[0];
    },
  },
  components: { SongCom },
  methods: {
    infiniteScrolling() {
      console.log('hi');
    },
    addSong() {
      this.songs.push({
        id,
        name: 'Rolling in deep',
        artist: 'Assmickey',
        url: 'https://i.pinimg.com/originals/f3/50/d9/f350d960214d22aacc38f020de0b8f6d.jpg',
      });
      id += 1;
    },
    removeSongsFromList() {
      while (this.songs.length > 0) {
        this.songs.pop();
        id -= 1;
      }
    },
  },
};
</script>

<style>
.moi {
    background-color: cadetblue;
}
#main_songs {
  height: 100%;
}
#now-playing {

}
.song:hover {
  transform: scale(1.01, 1.01);
  box-shadow: 5px 5px 2px hotpink;
}
</style>
