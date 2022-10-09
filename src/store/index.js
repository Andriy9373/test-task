import { createStore } from 'vuex';
import axios from 'axios';

const KEY = 'e3aad3aeabde40ecb21614ea6c6fe051';
const PAGE_SIZE = 20;
const URL = `https://newsapi.org/v2/everything?q=keyword&pageSize=${PAGE_SIZE}&apiKey=${KEY}`;

export default createStore({
    state: {
        news: [],
        userName: 'admin',
        password: '12345',
        alerts: []
    },
    getters: {},
    mutations: {
        SET_NEWS(state, data) {
            state.news = data;
        },
        ADD_ALERT: ( state, payload ) => {
            state.alerts.push(payload);
        },
        REMOVE_ALERT: ( state, payload ) => {
            state.alerts.splice(payload, 1);
        }
    },
    actions: {
        async getNews({ commit }) {
            try {
                const data = await axios.get(URL);
                commit('SET_NEWS', data.data.articles);
            }
            catch (error) {
                console.log(error);
            }
        },
        addAlert: ({commit, state}, data) => {
            data.id = Date.now();
            commit('ADD_ALERT', data);
            if (state.alerts.length) {
                setTimeout(() => {
                    let removeMe;
                    for (let i = 0; i < state.alerts.length; i++) {
                        if (data.id === state.alerts[i].id) {
                            removeMe = i;
                        }
                    }
                    commit('REMOVE_ALERT', removeMe);
                }, 1000 * 7)
            }
        },
        removeAlert: ({commit, state}, data) => {
            let removeMe;
            for (let i = 0; i < state.alerts.length; i++) {
                if (data.id === state.alerts[i].id) {
                    removeMe = i;
                }
            }
            commit('REMOVE_ALERT', removeMe);
        },
    },
    modules: {}
})