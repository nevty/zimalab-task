<template>
  <div>
    <v-form @submit.prevent="submit">
      <v-container>
        <v-row align="center" class="grey lighten-4 black--text">
          <v-col cols="6" md="2">
            <v-text-field
              v-model="description"
              type="text"
              label="Description"
              placeholder="Company"
            />
          </v-col>
          <v-col cols="6" md="2">
            <v-text-field
              v-model="location"
              type="text"
              label="Location"
              placeholder="City"
            />
          </v-col>
          <v-col cols="7" md="2" style="max-width: 170px">
            <v-checkbox
              :ripple="false"
              v-model="full_time"
              label="Full time Only"
            />
          </v-col>
          <v-col cols="5" md="1">
            <v-btn depressed color="primary" type="submit">Search</v-btn>
          </v-col>
        </v-row>
      </v-container>
    </v-form>
    <template v-if="!isFetching">
      <JobCard
        v-for="job in allJobs.slice(currentPos, currentPos + step)"
        :job="job"
        :key="job.id"
      />
    </template>
    <template v-else>
      <v-card class="ma-6" v-for="index in 10" :key="index">
        <v-skeleton-loader type="image"></v-skeleton-loader>
      </v-card>
    </template>
    <Pagination
      v-show="!isFetching"
      :step="step"
      :current-pos="currentPos"
      :next="next"
      :prev="prev"
    />
  </div>
</template>

<script>
import { mapActions, mapGetters } from "vuex";
import Pagination from "./../components/Pagination";
import JobCard from "../components/JobCard";

export default {
  name: "Home",
  data: () => ({
    page: 1,
    step: 10,
    currentPos: 0,
    description: "",
    location: "",
    full_time: false
  }),
  computed: mapGetters(["allJobs", "isFetching"]),
  methods: {
    ...mapActions(["preFetchJobs", "fetchJobs"]),
    submit: function() {
      this.preFetchJobs([this.description, this.location, this.full_time]);
    },
    next: function() {
      this.currentPos += this.step;
      if (this.page < 10) {
        this.fetchJobs([
          ++this.page,
          this.description,
          this.location,
          this.full_time
        ]);
      }
    },
    prev: function() {
      this.currentPos -= this.step;
    }
  },
  async mounted() {
    this.preFetchJobs([]);
  },
  components: { JobCard, Pagination }
};
</script>
