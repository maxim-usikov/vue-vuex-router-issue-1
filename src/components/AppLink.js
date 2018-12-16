export default {
  name: 'AppLink',

  functional: true,

  render(h, { data, children }) {
    return h('RouterLink', data, children);
  },
};
