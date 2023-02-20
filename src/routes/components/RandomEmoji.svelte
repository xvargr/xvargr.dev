<script>
  import { userInfo } from "../userData";

  function getRandomEmoji() {
    const length = userInfo.emojis.length;
    return userInfo.emojis[Math.floor(Math.random() * length)];
  }
</script>

{getRandomEmoji()}
