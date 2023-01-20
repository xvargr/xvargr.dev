<footer>footer</footer>

<style lang="scss">
  @use "../styles/colors.scss";
  @use "../styles/calculated.scss";

  footer {
    height: calculated.$footer-height;
    background-color: colors.$darkest;
    color: colors.$lighter;
  }
</style>
