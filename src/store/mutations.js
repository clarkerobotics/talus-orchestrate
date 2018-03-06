export default {

  // Generic update
  UPDATE(state, { key, value }) {
    state[key] = value
  },

  UPDATE_JOINT(state, { id, value }) {
    state.joints[id] = value
  },

}
