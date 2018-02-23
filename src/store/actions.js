export default {

  // Generic Update
  update({ commit }, { key, value }) {
    commit('UPDATE', { key, value })
  },

}
