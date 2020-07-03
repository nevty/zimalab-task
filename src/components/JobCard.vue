<template>
  <v-card class="ma-6">
    <v-list-item two-line>
      <v-list-item-avatar class="rounded" size="68px">
        <v-img :src="job.company_logo || undefined" />
      </v-list-item-avatar>
      <v-list-item-content>
        <v-list-item-title class="headline mb-2">
          <router-link :to="'job/' + job.id">{{ job.title }}</router-link>
          <span
            class="green darken-2 white--text text-caption ml-2 pl-2 pr-2 rounded"
            >{{ job.type }}</span
          >
        </v-list-item-title>
        <v-list-item-subtitle class="subtitle-1 mb-2">
          {{ job.company }}
        </v-list-item-subtitle>
        <v-list-item-action class="ma-0 align-start">
          <v-list-item-subtitle class="subtitle-1 mb-2">
            <span>{{ job.location }}</span> <v-icon>{{ svgLocation }}</v-icon>
          </v-list-item-subtitle>
          <v-list-item-subtitle class="subtitle-1">
            {{ job.created_at | date("date") }}
          </v-list-item-subtitle>
        </v-list-item-action>
      </v-list-item-content>
    </v-list-item>
  </v-card>
</template>

<script>
import { mdiMapMarker } from "@mdi/js";

export default {
  data: () => ({
    svgLocation: mdiMapMarker
  }),
  props: ["job"]
};
</script>
