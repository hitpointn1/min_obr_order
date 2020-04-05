import Vue from 'nativescript-vue';
import Vuex from 'vuex';
import ProvidersFactory from './BL/APIFactory';

Vue.use(Vuex);

export default new Vuex.Store({
  state: {
    higherEducationPlaces: [],
    currentUser: null,
    error: null,
    isLoggedIn: false,
  },

  getters: {
    GetUser: (state, getters) => {
      return state.currentUser;
    },

    GetEducationPlaces: (state, getters) => {
      return state.higherEducationPlaces;
    },
  },

  mutations: {
    SetLoggedIn(state) {
      state.isLoggedIn = true;
    },

    SetLogOut(state) {
      state.isLoggedIn = false;
    },

    SetEducationPlaces(state, placesData) {
      state.higherEducationPlaces = placesData;
    },

    SetUser(state, userData) {
      state.currentUser = userData;
    },

    SetError(state, errorData) {
      state.error = errorData;
    },
  },

  actions: {
    SignIn(context, signInData) {

    },

    LogIn(context, login, password) {

    },

    GetEducationPlaces(context) {
      ProvidersFactory.EducationPlacesProvider
        .GetEducationPlaces().then((successRes) => {
          context.commit('SetEducationPlaces', successRes);
        }, (rejectRes) => {
          context.commit('SetError', rejectRes);
        });
    },

    AddEducationPlace(context, educationPlaceInfo) {
      ProvidersFactory.EducationPlacesProvider
        .AddEducationPlace(educationPlaceInfo).then((successRes) => {
          context.commit('SetEducationPlaces', successRes);
        }, (rejectRes) => {
          context.commit('SetError', rejectRes);
        });
    },

    GetUser(context, abiturientID) {
      ProvidersFactory.AbiturientsProvider
        .GetAbiturient(abiturientID).then((successRes) => {
          context.commit('SetUser', successRes);
          context.commit('SetLoggedIn');
        }, (rejectRes) => {
          context.commit('SetError', rejectRes);
        });
    },

    AddNewUser(context, newUserData) {
      ProvidersFactory.AbiturientsProvider
        .AddAbiturient(newUserData).then((successRes) => {
          context.commit('SetUser', successRes);
        }, (rejectRes) => {
          context.commit('SetError', rejectRes);
        });
    },
  },
});
