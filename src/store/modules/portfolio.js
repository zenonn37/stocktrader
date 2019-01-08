const state = {
  funds: 10000,
  stocks: []
};

const mutations = {
  BUY_STOCK(state, { stockId, quanity, stockPrice }) {
    const record = state.stocks.find(element => element.id == stockId);
    if (record) {
      record.quanity += quanity;
    } else {
      state.stocks.push({
        id: stockId,
        quanity: quanity
      });
    }
    state.funds -= stockPrice * quanity;
  },
  SELL_STOCK(state, { stockId, quanity, stockPrice }) {
    const record = state.stocks.find(element => element.id == stockId);
    if (record.quanity > quanity) {
      record.quanity -= quanity;
    } else {
      state.stocks.splice(state.stocks.indexOf(record), 1);
    }
    state.funds += stockPrice * quanity;
  }
};

const actions = {
  sellStock({ commit }, order) {
    commit("SELL_STOCK", order);
  }
};

const getters = {
  stockPortfolio(state, getters) {
    return state.stocks.map(stock => {
      const record = getters.stocks.find(element => element.id == stock.id);
      return {
        id: stock.id,
        quantity: stock.quanity,
        name: record.name,
        price: record.price
      };
    });
  },
  funds(state) {
    return state.funds;
  }
};

export default {
  state,
  mutations,
  actions,
  getters
};
