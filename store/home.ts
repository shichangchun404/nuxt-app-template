import {
  getBannerlist,
} from "@/src/api/home";

export const state = () => ({
  bannerList: [],
});

export const actions = {
  // @ts-ignore
  async FETCH_GET_BANNER({ commit, state }, params) {
    return new Promise(async (resolve, reject) => {
      try {
        const data = await getBannerlist(params);
        commit("GET_BANNER", data || []);
        resolve(data);
      } catch (error) {
        reject(error)
      }
    });
  },
};

export const mutations = {
  GET_BANNER: (state: any, data: Array<any>) => {
    state.bannerList = data;
  },
};
