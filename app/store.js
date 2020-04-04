import Vue from 'vue';
import Vuex from 'vuex';
import { ProvidersFactory } from './BL/APIFactory';

Vue.use(Vuex);

export default new Vuex.Store({
  state: {
    higherEducationPlaces: [],
    currentUser: null
  },

  getters: {
    GetUser() {

    },
    GetEducationPlaces() {

    }
  },

  mutations: {
    SetEducationPlaces() {

    },
    SetUser() {

    }
  },

  actions: {
    GetEducationPlaces() {
      ProvidersFactory.GetEducationPlaces();
      this.commit('SetEducationPlaces');
    },
    AddEducationPlace(educationPlaceInfo) {
      ProvidersFactory.AddEducationPlace();
      this.commit('SetEducationPlaces', educationPlaceInfo);
    },
    GetUser() {
      ProvidersFactory.GetUser();
      this.commit('SetUser');
    },
    AddNewUser() {
      ProvidersFactory.AddNewUser();
      this.commit('SetUser');
    }
  }
});
