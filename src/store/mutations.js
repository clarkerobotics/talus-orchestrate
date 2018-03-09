export default {

  // Generic update
  UPDATE(state, { key, value }) {
    state[key] = value
  },

  UPDATE_JOINT(state, { id, value }) {
    state.joints[id] = value
  },

  WS_ACTIVE(state, bool) {
    state.wsActive = bool
  },

}
