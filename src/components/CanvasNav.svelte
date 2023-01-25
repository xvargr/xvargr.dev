<script>
  import { error } from "@sveltejs/kit";
  import { onMount } from "svelte";

  onMount(() => {
    const sections = ["section2", "section1"];
    const sectionsInView = [];
    const sectionsAbove = [];
    const sectionsBelow = [];

    const canvas = document.querySelector("#canvas-nav");
    let windowHeight = window.innerHeight;

    canvas.width = window.innerWidth;
    canvas.height = window.innerHeight;
    // let scrollPosition = window.scrollY;

    function redrawCanvas() {
      canvas.getContext("2d").clearRect(0, 0, canvas.width, canvas.height);
      drawNav();
      requestAnimationFrame(redrawCanvas);
    }

    window.addEventListener("resize", () => {
      windowHeight = window.innerHeight;
      canvas.width = window.innerWidth;
      canvas.height = window.innerHeight;

      //   redrawCanvas();
    });

    console.dir(document.documentElement.scrollTop || document.body.scrollTop); // current scroll pos

    // document.addEventListener("scroll", () => {
    //   //   redrawCanvas();
    // });

    // setInterval(() => {
    //   windowHeight = window.innerHeight;
    //   redrawCanvas();
    // }, 5);

    window.requestAnimationFrame(redrawCanvas);

    const draw = {
      line(start, end, color = "white") {
        const ctx = canvas.getContext("2d");
        ctx.strokeStyle = color;
        ctx.lineWidth = 3;
        ctx.lineCap = "round";

        ctx.beginPath();
        ctx.moveTo(start[0], start[1]);
        ctx.lineTo(end[0], end[1]);
        ctx.stroke();
      },
      text(text, position) {
        const ctx = canvas.getContext("2d");
        ctx.fillStyle = "white";
        ctx.font = "16px Quicksand";
        ctx.fillText(text, position[0], position[1]);
      },
    };

    function getElementPos(elementId) {
      const element = document.querySelector(`#${elementId}`);
      if (!element) return error("element not found");
      else return element.getBoundingClientRect();
    }

    function resolveViewState(elementId) {
      const element = document.querySelector(`#${elementId}`);
      console.log(window);
    }

    function drawNav() {
      let n = 0;
      sections.forEach((section) => {
        const position = getElementPos(section);

        // console.log(position);
        // console.log(position.y);
        // console.log(windowHeight);
        // console.log(position.y >= windowHeight);

        const InView = position.y >= windowHeight ? false : true;

        // resolveViewState();

        // console.log(InView);

        if (InView) {
          draw.line([75, position.y - 20], [position.x, position.y + position.height / 2]);
          draw.text(section, [10, position.y - 20]);
        } else {
          draw.line(
            [75, windowHeight - 15 - 20 * n],
            [position.x, position.y + position.height / 2],
          );
          draw.text(section, [10, windowHeight - 10 - 20 * n]);
        }
        n++;
      });
    }
    if (canvas.getContext) drawNav();
    else console.warn("canvas unsupported");
  });
</script>

<canvas id="canvas-nav" class:invisible={false} />

<!-- <canvas id="canvas-nav" class:invisible={false} /> -->
<style>
  #canvas-nav {
    /* background-color: gray; */
    position: fixed;
    /* width: 5rem; */
    /* height: 100%; */
    /* object-fit: cover; */
    transition: opacity 100ms ease-in-out;
  }

  .invisible {
    opacity: 0;
  }
</style>
