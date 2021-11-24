const state = {
    cash: 10000,
    stocks: [
        { name: 'BMW', price: 13.13, quantity: 13},
        { name: 'AUDI', price: 13.13, quantity: 31},
    ],
};

const mutations = {
    'BUY_STOCKS'( state, { stockId, stockPrice, stockQuantity } ){

        const record = state.stocks.find(element => element.id === stockId);

        if (record) {
            record.quantity += stockQuantity;
        } else {
            state.stocks.push({
                id: stockId,
                quantity: stockQuantity,
            });
        }
        state.cash -= stockPrice*stockQuantity;
    },
    'SELL_STOCKS'( state, { stockId, stockPrice, stockQuantity } ) {

        const record = state.stocks.find(element => element.id === stockId);

        if (record.quantity > stockQuantity) {
            record.quantity -= stockQuantity;
        } else {
            state.stocks.splice(state.stocks.indexOf(record), 1);
        }

        state.cash += stockPrice*stockQuantity;
    },
};

const actions = {
    buyStocks: ({ commit }, order ) => {
        commit('BUY_STOCKS', order);
    },
    sellStocks: ({ commit }, stock) => {
        commit('SELL_STOCKS', stock);
    },
};

const getters = {
    stocksPortfolio: (state) => {
        return state.stocks;
    },
    cash: (state) => {
        return state.cash;
    }
};

export default {
    state: state,
    mutations: mutations,
    actions: actions,
    getters: getters,
}