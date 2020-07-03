<template>
  <div>
    <v-btn class="pl-1" text :ripple="false" color="primary" to="/">
      <v-icon class="mr-3">{{ svgArrowBack }}</v-icon>
      All jobs
    </v-btn>
    <v-card v-if="!isFetching" tile class="pa-5">
      <span class="text-overline"
        >{{ singleJob.type }} / {{ singleJob.location }}</span
      >
      <v-card-title class="headline font-weight-medium pa-0 pt-2 pb-3">
        {{ singleJob.title }}
      </v-card-title>
      <v-divider class="mb-2"></v-divider>
      <v-container class="pa-0">
        <v-row justify="end">
          <v-col order-md="2" cols="12" md="3">
            <a target="_blank" :href="singleJob.company_url">
              {{ singleJob.company_url }}
              <v-img
                class="elevation-1 mb-6"
                max-height="320"
                :src="singleJob.company_logo"
              />
            </a>
            <div class="elevation-1">
              <div class="text-subtitle-1 pt-1 pl-3 pr-3">How to apply</div>
              <v-divider class="mb-2"></v-divider>
              <div class="pl-3 pr-3 pb-1" v-html="singleJob.how_to_apply"></div>
            </div>
          </v-col>
          <v-col order-md="1" cols="12" md="9">
            <div v-html="singleJob.description" />
          </v-col>
        </v-row>
      </v-container>
    </v-card>
    <v-card v-else tile class="pa-5">
      <v-skeleton-loader type="article"></v-skeleton-loader>
    </v-card>
  </div>
</template>

<script>
import { mapActions, mapGetters } from "vuex";
import { mdiArrowLeft } from "@mdi/js";

export default {
  name: "JobPage",
  data: () => ({
    svgArrowBack: mdiArrowLeft
  }),
  props: ["id"],
  computed: mapGetters(["singleJob", "isFetching"]),
  methods: {
    ...mapActions(["fetchJob"])
  },
  async mounted() {
    this.fetchJob(this.id);
  }
};
</script>
