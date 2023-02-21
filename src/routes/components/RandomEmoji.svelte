<script>
  import { userSettings } from "../userData";
  const { emojis } = userSettings;

  function getRandomEmoji() {
    const length = emojis.length;
    return emojis[Math.floor(Math.random() * length)];
  }
</script>

{getRandomEmoji()}
