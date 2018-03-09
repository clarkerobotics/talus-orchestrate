export default {

  // Generic Update
  update({ commit }, { key, value }) {
    commit('UPDATE', { key, value })
  },

  updateJoint({ commit }, { id, value }) {
    commit('UPDATE_JOINT', { id, value })
  },

  wsActive({ commit }, bool) {
    commit('WS_ACTIVE', bool)
  },

  wsUpdate({ commit }, data) {
    commit('WS_ACTIVE', true)
    console.log('wsUpdate data', data)
  },

}
