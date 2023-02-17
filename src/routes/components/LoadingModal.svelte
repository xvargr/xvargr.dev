<div class="loading-modal">
  <!-- <div class="spinner">
    <div class="bar b-0" />
    <div class="bar b-1" />
    <div class="bar b-2" />
    <div class="bar b-3" />
    <div class="bar b-4" />
    <div class="bar b-5" />
    <div class="bar b-6" />
    <div class="bar b-7" />
  </div> -->

  <div class="center">
    <div class="shadow" />
    <div class="extrusion" />
  </div>
  <div class="center">
    <div class="shadow" />
    <div class="extrusion" />
  </div>
  <div class="center">
    <div class="shadow" />
    <div class="extrusion" />
  </div>
  <div class="center">
    <div class="shadow" />
    <div class="extrusion" />
  </div>
  <div class="center">
    <div class="shadow" />
    <div class="extrusion" />
  </div>
  <div class="center">
    <div class="shadow" />
    <div class="extrusion" />
  </div>
  <div class="center">
    <div class="shadow" />
    <div class="extrusion" />
  </div>
  <div class="center">
    <div class="shadow" />
    <div class="extrusion" />
  </div>
</div>

<style lang="scss">
  $spinner-size: 4rem;
  $bar-number: 8;
  $bar-height: 1rem;
  $bar-width: 1rem;
  //   $spinner-size: 30vw;
  //   $bar-number: 8;
  //   $bar-height: calc($spinner-size/3);
  //   $bar-width: calc($bar-height/2);

  .loading-modal {
    display: flex;
    position: fixed;
    top: 0;
    left: 0;
    z-index: 50;
    justify-content: center;
    align-items: center;
    height: 100vh;
    width: 100vw;
    background-color: #c7c7c7;
  }

  .center {
    // background-color: rgba(0, 111, 202, 0.39);
    position: absolute;
    inset: 0;
    margin: auto;
    width: $spinner-size;
    height: $spinner-size;

    .extrusion,
    .shadow {
      position: absolute;
      bottom: 4rem;
      left: calc($spinner-size/2 - $bar-width/2);
      height: $bar-height;
      width: $bar-width;
      border-radius: 99rem;
      background-color: rgb(37, 37, 37);
    }
    .shadow {
      background-color: rgb(255, 0, 0);
    }
  }

  @mixin position($n) {
    transform: rotate(calc($n * 45deg));

    .extrusion {
      animation: bar-shrink 1s linear calc($n * (2s / $bar-number)) infinite;
    }

    .shadow {
      animation: bar-shrink 1s linear calc($n * (4s / $bar-number)) infinite;
    }
  }

  //   .center:nth-last-of-type(0) {
  //     @include position(0);
  //     background-color: red;
  //   }

  .center:nth-of-type(1) {
    @include position(1);
  }
  .center:nth-of-type(2) {
    @include position(2);
  }
  .center:nth-of-type(3) {
    @include position(3);
  }
  .center:nth-of-type(4) {
    @include position(4);
  }
  .center:nth-of-type(5) {
    @include position(5);
  }
  .center:nth-of-type(6) {
    @include position(6);
  }
  .center:nth-of-type(7) {
    @include position(7);
  }
  .center:nth-of-type(8) {
    @include position(8);
  }

  //   .spinner {
  //     opacity: 0.2;

  //     position: relative;
  //     background-color: rgb(119, 28, 28);
  //     width: $spinner-size;
  //     height: $spinner-size;
  //     // animation: spinner-rotate 3s linear infinite;

  //     .bar {
  //       position: absolute;
  //       //   top: 0;
  //       top: 0;
  //       left: calc($spinner-size/2 - $bar-width/2);
  //       height: $bar-height;
  //       width: $bar-width;
  //       border-radius: 99rem;
  //       background-color: var(--text-color);
  //       transform-origin: center calc($spinner-size/2);
  //     }

  //     @mixin bar-pos($n) {
  //       transform: rotate(calc($n * 45deg));
  //       animation: bar-shrink 1s ease calc($n * (1s / $bar-number)) infinite;
  //     }

  //     .b-0 {
  //       @include bar-pos(0);
  //       background-color: aqua;
  //     }
  //     .b-1 {
  //       @include bar-pos(1);
  //     }
  //     .b-2 {
  //       @include bar-pos(2);
  //     }
  //     .b-3 {
  //       @include bar-pos(3);
  //     }
  //     .b-4 {
  //       @include bar-pos(4);
  //     }
  //     .b-5 {
  //       @include bar-pos(5);
  //     }
  //     .b-6 {
  //       @include bar-pos(6);
  //     }
  //     .b-7 {
  //       @include bar-pos(7);
  //     }
  //   }

  //   @keyframes spinner-rotate {
  //     0% {
  //       transform: rotate(0deg);
  //     }
  //     // 50% {
  //     //   transform: rotate(360deg);
  //     // }
  //     100% {
  //       transform: rotate(360deg);
  //     }
  //   }

  @keyframes bar-shrink {
    0% {
      height: $bar-height;
      //   top: 5rem;
    }
    50% {
      height: 5rem;
      //   top: 10rem;
    }
    100% {
      height: $bar-height;
      //   top: 5rem;
    }
  }
</style>
