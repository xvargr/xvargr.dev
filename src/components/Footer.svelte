<footer>footer</footer>

<style lang="scss">
  @use "../styles/colors.scss";
  @use "../styles/calculated.scss";

  footer {
    height: calculated.$footer-height;
    background-color: colors.$darkest;
    // background-color: red;
    color: colors.$lighter;
    padding: 1rem;
    // margin-left: 5rem;
    // z-index: 50;
  }
</style>
