export const routeMixin = {
  methods: {
    openLink: function (link) {
      window.open(link.url)
    },
    redirectRoute: function (routename) {
      this.$router.push({ name: routename })
    }
  }
}
