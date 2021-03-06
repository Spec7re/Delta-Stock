import stocks from "../../data/stocks";

const state = {
    stocks: [],
};

const mutations = {
    'SET_STOCKS'(state, stocks) {
        state.stocks = stocks;
    },
    'RND_STOCKS'(state) {

    },
};

const actions = {
    buyStocks: ({ commit }, order ) => {
        commit('BUY_STOCKS', order);
    },
    initStocks: ({ commit }) => {
        commit('SET_STOCKS', stocks);
    },
    randomizeStocks: ({commit}) => {
        commit('RND_STOCKS');
    }
};

const getters = {
    stocks: (state) => {
        return state.stocks;
    }
};

export default {
    state: state,
    mutations: mutations,
    actions: actions,
    getters: getters,
}