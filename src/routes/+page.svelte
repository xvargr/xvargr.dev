<script>
  // import { onMount } from "svelte";

  // onMount(() => {
  //   const title = document.querySelector(".intro-title");
  //   console.log(title.textContent);
  //   console.log(typeof title.textContent);
  //   console.log([...title.textContent]);
  //   setInterval(() => {
  //     const titleContent = [...title.textContent];
  //     // const newText = titleContent.slice(titleContent.length - 1);
  //     titleContent.pop();
  //     // console.log(titleContent);
  //     // console.log(newText);
  //     // title.textContent = .join();
  //     title.textContent = titleContent.join("");
  //   }, 1000);
  // });
</script>

<section>
  <div class="title-screen">
    <div class="intro-title">xvargr</div>
    <div>I know <span>technology</span></div>
  </div>

  <h1>Hello World</h1>
  <p>
    Lorem ipsum dolor sit amet, consectetur adipisicing elit. Nisi vel commodi debitis dolores amet
    adipisci nihil quas eaque harum, animi error necessitatibus officiis quos dolorum obcaecati
    neque tempora id consectetur. Eveniet inventore consectetur quos, quia sit, quas nulla numquam
    voluptatem modi dignissimos quod. Perferendis doloribus iure, odio reiciendis labore optio,
    quibusdam quisquam blanditiis expedita, quia facere quae sed vitae soluta? Ipsum incidunt earum
    soluta nisi repellat molestiae. Aut, corrupti vel eius tempore, optio at placeat, id cumque
    magnam eum cum. Laudantium, quis laboriosam vero fuga cumque repellat corrupti provident itaque?
    Quos, minus ab unde accusantium reprehenderit est eum officiis, temporibus deserunt facere aut
    aliquam eveniet quod! Soluta quo qui suscipit voluptatibus inventore aspernatur voluptates,
    neque quia rerum numquam corporis voluptatum. Sint suscipit labore, fuga iure, sed ad iusto
    inventore praesentium corrupti iste ipsum earum, provident voluptas adipisci repellendus
    similique enim. Doloremque quas et reprehenderit, pariatur facilis necessitatibus! Amet, fugit
    pariatur? Velit cum eligendi iure libero iusto alias doloremque, hic necessitatibus voluptate
    error dolor reiciendis distinctio molestias praesentium sint temporibus obcaecati eos recusandae
    ad dolore impedit? Velit possimus dolores cum cupiditate? Facilis consequuntur beatae molestias
    ullam et temporibus numquam culpa in atque amet a, quia mollitia odit, tenetur magnam, ad
    accusamus quis quos. Dolorum quibusdam fugit suscipit eveniet non tempore omnis? Reprehenderit
    doloribus repellat vel incidunt fugit odio earum quam, dolores molestiae voluptatum.
    Consequatur, corrupti officia nisi beatae dignissimos totam autem suscipit cupiditate, dolore
    molestiae similique nostrum reiciendis neque fugiat unde? Lorem ipsum dolor sit amet,
    consectetur adipisicing elit. Nisi vel commodi debitis dolores amet adipisci nihil quas eaque
    harum, animi error necessitatibus officiis quos dolorum obcaecati neque tempora id consectetur.
    Eveniet inventore consectetur quos, quia sit, quas nulla numquam voluptatem modi dignissimos
    quod. Perferendis doloribus iure, odio reiciendis labore optio, quibusdam quisquam blanditiis
    expedita, quia facere quae sed vitae soluta? Ipsum incidunt earum soluta nisi repellat
    molestiae. Aut, corrupti vel eius tempore, optio at placeat, id cumque magnam eum cum.
    Laudantium, quis laboriosam vero fuga cumque repellat corrupti provident itaque? Quos, minus ab
    unde accusantium reprehenderit est eum officiis, temporibus deserunt facere aut aliquam eveniet
    quod! Soluta quo qui suscipit voluptatibus inventore aspernatur voluptates, neque quia rerum
    numquam corporis voluptatum. Sint suscipit labore, fuga iure, sed ad iusto inventore praesentium
    corrupti iste ipsum earum, provident voluptas adipisci repellendus similique enim. Doloremque
    quas et reprehenderit, pariatur facilis necessitatibus! Amet, fugit pariatur? Velit cum eligendi
    iure libero iusto alias doloremque, hic necessitatibus voluptate error dolor reiciendis
    distinctio molestias praesentium sint temporibus obcaecati eos recusandae ad dolore impedit?
    Velit possimus dolores cum cupiditate? Facilis consequuntur beatae molestias ullam et temporibus
    numquam culpa in atque amet a, quia mollitia odit, tenetur magnam, ad accusamus quis quos.
    Dolorum quibusdam fugit suscipit eveniet non tempore omnis? Reprehenderit doloribus repellat vel
    incidunt fugit odio earum quam, dolores molestiae voluptatum. Consequatur, corrupti officia nisi
    beatae dignissimos totam autem suscipit cupiditate, dolore molestiae similique nostrum
    reiciendis neque fugiat unde?
  </p>
</section>

<style lang="scss">
  @use "../styles//fonts.scss";
  @use "../styles/colors.scss";

  section {
    padding: 0 1rem;
    background-color: colors.$darkest;
    color: colors.$lightest;
  }

  .title-screen {
    display: flex;
    flex-direction: column;
    height: 100vh;
  }

  .intro-title {
    font-family: fonts.$logo;
    font-weight: 700;
    font-size: 6rem;
    text-align: center;
  }
</style>
