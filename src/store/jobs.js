import axios from "axios";

const instance = axios.create({
  baseURL:
    "https://cors-anywhere.herokuapp.com/https://jobs.github.com/positions.json"
});

export default {
  actions: {
    async fetchJobs({ commit }, [page, description, location, full_time]) {
      let params = new URLSearchParams();
      if (description) params.append("description", description);
      if (location) params.append("location", location);
      if (full_time) params.append("full_time", full_time.toString());
      params.append("page", page);
      let request = { params };

      const res = await instance
        .get("", request)
        .then(response => response.data);
      commit("updateJobs", res);
    },
    async preFetchJobs({ commit }, [description, location, full_time]) {
      commit("setIsFetching", true);
      let params = new URLSearchParams();
      if (description) params.append("description", description);
      if (location) params.append("location", location);
      if (full_time) params.append("full_time", full_time.toString());
      params.append("page", 1);

      let request = { params };
      const res = await instance.get("", request).then(response => {
        commit("setIsFetching", false);
        return response.data;
      });
      commit("setJobs", res);
    },
    async fetchJob({ commit }, id) {
      commit("setIsFetching", true);
      const res = await axios
        .get(
          `https://cors-anywhere.herokuapp.com/https://jobs.github.com/positions/${id}.json`
        )
        .then(response => {
          commit("setIsFetching", false);
          return response.data;
        });
      commit("setJob", res);
    }
  },
  mutations: {
    setJobs(state, jobs) {
      state.jobs = jobs;
    },
    updateJobs(state, jobs) {
      state.jobs = [...state.jobs, ...jobs];
    },
    setIsFetching(state, boolean) {
      state.isFetching = boolean;
    },
    setJob(state, job) {
      state.job = job;
    }
  },
  state: {
    jobs: [],
    job: {},
    isFetching: false
  },
  getters: {
    allJobs: state => state.jobs,
    singleJob: state => state.job,
    isFetching: state => state.isFetching
  }
};
