<template>
  <v-container>
    <v-row justify="center">
      <v-btn
        class="ml-2 pl-2"
        depressed
        v-show="currentPos >= step"
        v-on:click="prev"
      >
        <v-icon class="mr-1">
          {{ svgArrowBack }}
        </v-icon>
        Back
      </v-btn>
      <v-btn
        :class="`${currentPos >= step ? 'ml-2' : 'ml-16'} pr-2`"
        depressed
        v-on:click="next"
      >
        Next
        <v-icon class="ml-1">
          {{ svgArrowNext }}
        </v-icon>
      </v-btn>
    </v-row>
  </v-container>
</template>

<script>
import { mdiArrowLeft, mdiArrowRight } from "@mdi/js";

export default {
  data: () => ({
    svgArrowBack: mdiArrowLeft,
    svgArrowNext: mdiArrowRight
  }),
  props: ["currentPos", "step", "next", "prev"]
};
</script>
