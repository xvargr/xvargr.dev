<script>
  import { themeColor } from "../stores/states";

  // export let data;
  // $: console.log($themeColor);
</script>

<article>
  <h2 style={`color: ${$themeColor.background};`}>Landing</h2>
  Lorem ipsum dolor sit amet, consectetur adipisicing elit. Alias tempora exercitationem perspiciatis
  corrupti id saepe sit minus asperiores quas vero, accusamus rerum molestiae quasi voluptate. Ullam
  quam earum nostrum alias! Odit minus nobis recusandae minima expedita exercitationem illo, nihil explicabo
  vitae maiores dolore tempore officia impedit, aperiam aut, perspiciatis natus doloribus quasi tempora
  laborum animi. Quisquam, omnis. Officia, corrupti iusto. Ullam cumque quia reprehenderit! Esse non
  veritatis dolorem officia laboriosam quo impedit quis illum consectetur nostrum adipisci illo id omnis,
  sit consequuntur officiis. Consequatur, ut praesentium incidunt aperiam corrupti earum. Consequuntur
  in amet magnam sunt impedit eaque beatae ab laborum iure veritatis inventore aspernatur numquam earum
  obcaecati hic maiores eligendi tempore, corrupti a, saepe tenetur quisquam illo vero. Dignissimos,
  voluptates? Voluptatum rem quas tempore asperiores fugit perferendis, saepe numquam perspiciatis beatae.
  Velit soluta consequatur tempore aliquid voluptas, officiis consectetur quam quidem hic, quisquam nulla
  vero. Similique voluptatibus minima asperiores laboriosam! Veritatis modi ducimus, impedit dolorem
  mollitia inventore id velit vitae atque sequi expedita tempore dicta! Explicabo quaerat, dolorem molestiae
  temporibus animi beatae itaque amet harum rem officia repudiandae sint ex. Facere repudiandae beatae
  suscipit distinctio. A fugit harum asperiores et facilis itaque molestiae autem. Ducimus iure, blanditiis
  veniam incidunt, repellat, at dignissimos iste quidem tempora qui harum repellendus illo placeat. Distinctio
  rerum, nobis accusantium repellendus harum aspernatur laudantium sunt consequatur dolorem fugit porro
  fugiat nostrum. Commodi, neque! Alias cupiditate quas temporibus, itaque consequatur esse qui sunt
  enim? Rem, et officiis! Reiciendis nihil assumenda asperiores consequuntur sequi hic, veritatis ad
  dicta enim facere est nam placeat fuga sit quis sapiente non impedit nobis, corporis earum! Explicabo
  aperiam tempore deleniti dolorum nam. Consectetur in alias porro quaerat, numquam perferendis quo nihil
  nulla dolore est ut corrupti necessitatibus voluptatum, deserunt voluptatibus velit animi eius. Et
  quo, aut rem maxime harum velit eligendi explicabo.
</article>

<style lang="scss">
  @use "../styles/colors.scss";

  article {
    color: colors.$grey;

    h2 {
      font-size: 1.5rem;
      // text-decoration: underline 4px;
    }
  }
</style>
