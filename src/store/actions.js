export default {

  // Generic Update
  update({ commit }, { key, value }) {
    commit('UPDATE', { key, value })
  },

  updateJoint({ commit }, { id, value }) {
    commit('UPDATE_JOINT', { id, value })
  },

}
