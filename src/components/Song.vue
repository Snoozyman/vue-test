<template>
<v-container fluid class="primary rounded-md song" >
    <v-row dense>
        <v-col cols="auto"><v-img :src="song.url" max-height="90" max-width="90"></v-img></v-col>
        <v-col>
            <v-card elevation="2" height="90">
                <v-card-title>{{ song.name }}</v-card-title>
                <v-card-subtitle>{{ song.artist }}</v-card-subtitle>
            </v-card>
        </v-col>
        <v-col cols="auto" class="ml-2 mr-1">
            <v-row dense class="mb-2">
                <v-col>
                    <v-btn >Play</v-btn>
                </v-col>
            </v-row>
            <v-row dense>
                <v-col>
                    <v-btn width="100%">Skip</v-btn>
                </v-col>
            </v-row>
        </v-col>
    </v-row>
</v-container>
</template>

<script>

export default {
  name: 'Song',
  props: [
    'song',
  ],
  data() {
    return {

    };
  },
};
</script>

<style scoped>
.song {
    border-style: 1px solid;
    border-color: black;
}
</style>
