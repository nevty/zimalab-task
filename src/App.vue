<template>
  <v-app id="app">
    <v-container fluid>
      <v-row align="center" justify="center">
        <v-col cols="12" sm="10">
          <v-main>
            <router-view />
          </v-main>
        </v-col>
      </v-row>
    </v-container>
  </v-app>
</template>

<script>
export default {
  name: "app",
  data: () => ({})
};
</script>
