<script>
  import { onMount } from "svelte";

  onMount(() => {
    const canvas = document.querySelector("#canvas-nav");
    if (canvas) {
      canvas.width = window.innerWidth;
      canvas.height = window.innerHeight;
    } else console.warn("canvas not found");

    let windowHeight = window.innerHeight;
    // let windowTop = document.documentElement.scrollTop || document.body.scrollTop;
    // let windowBottom = windowHeight + windowTop;
    let windowTop = 0;
    let windowBottom = windowHeight;

    // console.log(windowHeight, scrollPos);
    console.log(windowTop, windowBottom);

    function resolvePosition(boundingClient) {
      // if (typeof yPosition !== "number") new Error("position must be a number");

      // console.log("wTop", windowTop);
      // console.log("wBot", windowBottom);
      // console.log("currentEl", yPosition);

      // console.log(boundingClient);

      if (boundingClient.y < windowTop + boundingClient.height) return "above";
      else if (boundingClient.y >= windowBottom) return "below";
      else return "current";
    }

    const navSections = {};
    [...document.querySelectorAll("h2")].forEach((element) => {
      navSections[element.id] = {
        // element,
        position: element.getBoundingClientRect(),
        view: resolvePosition(element.getBoundingClientRect()),
      };
    });
    // const taggedSections = [...document.querySelectorAll("h2")].map((element) => element.id);

    // console.log(navSections);
    // const sectionsInView = [];
    // const sectionsAbove = [];
    // const sectionsBelow = [];

    // let scrollPosition = window.scrollY;

    function redrawCanvas() {
      canvas.getContext("2d").clearRect(0, 0, canvas.width, canvas.height);
      drawNav();
      requestAnimationFrame(redrawCanvas);
    }

    window.addEventListener("resize", () => {
      windowHeight = window.innerHeight;
      windowBottom = windowHeight;

      canvas.width = window.innerWidth;
      canvas.height = window.innerHeight;

      //   redrawCanvas();
    });

    // console.dir(document.documentElement.scrollTop || document.body.scrollTop); // current scroll pos

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

    // function getElementPos(elementId) {
    //   const element = document.querySelector(`#${elementId}`);
    //   if (!element) return error("element not found");
    //   else return element.getBoundingClientRect();
    // }

    // function resolveViewState(elementId) {
    //   const element = document.querySelector(`#${elementId}`);
    //   const scrollPos = document.documentElement.scrollTop || document.body.scrollTop;
    //   // console.log(window);
    // }

    function updatePosition() {
      // windowHeight = window.innerHeight;
      // windowTop = document.documentElement.scrollTop || document.body.scrollTop;
      // windowBottom = windowHeight + windowTop;

      for (const element in navSections) {
        const thisElement = document.querySelector(`#${element}`);
        const newPosition = thisElement.getBoundingClientRect();
        navSections[element].position = newPosition;
        navSections[element].view = resolvePosition(newPosition);
      }
    }

    function drawNav() {
      let index = 0;
      // let bottomIndex = 0;
      const sectionContext = {
        above: [],
        current: [],
        below: [],
      };

      updatePosition();

      for (const section in navSections) {
        // const element = navSections[section];
        // const InView = position.y >= windowHeight ? false : true;

        const thisSection = navSections[section];
        const position = thisSection.position;

        // resolveViewState();

        // console.log(InView);
        // console.log(Object.keys(navSections).length);

        // console.log("view", thisSection.view);

        if (thisSection.view === "current") {
          draw.line([75, windowHeight / 2], [position.x, position.y + position.height / 2]);
          draw.text(section, [10, windowHeight / 2]);
        } else if (thisSection.view === "above") {
          draw.line([75, 20 + 20 * index], [position.x, position.y + position.height / 2]);
          draw.text(section, [10, 20 + 20 * index]);
        } else if (thisSection.view === "below") {
          draw.line(
            [75, windowHeight + 10 - 20 * (Object.keys(navSections).length - index)],
            [position.x, position.y + position.height / 2],
          );
          draw.text(section, [
            10,
            windowHeight + 10 - 20 * (Object.keys(navSections).length - index),
          ]);
          // bottomIndex++;
        }

        draw.line([0, windowTop], [1000, windowTop], "red");
        draw.line([0, windowBottom], [1000, windowBottom], "blue");

        // else {
        //   draw.line(
        //     [75, windowHeight - 15 - 20 * n],
        //     [position.x, position.y + position.height / 2],
        //   );
        //   draw.text(section, [10, windowHeight - 10 - 20 * n]);
        // }

        index++;
      }
      // sections.forEach((section) => {
      //   const position = getElementPos(section);

      //   // console.log(position);
      //   // console.log(position.y);
      //   // console.log(windowHeight);
      //   // console.log(position.y >= windowHeight);

      //   const InView = position.y >= windowHeight ? false : true;

      //   resolveViewState();

      //   // console.log(InView);

      //   if (InView) {
      //     draw.line([75, position.y - 20], [position.x, position.y + position.height / 2]);
      //     draw.text(section, [10, position.y - 20]);
      //   } else {
      //     draw.line(
      //       [75, windowHeight - 15 - 20 * n],
      //       [position.x, position.y + position.height / 2],
      //     );
      //     draw.text(section, [10, windowHeight - 10 - 20 * n]);
      //   }
      //   n++;
      // });
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
