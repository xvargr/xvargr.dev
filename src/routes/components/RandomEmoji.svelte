<script>
  const emojis = ["🐺", "🦕", "🐍", "🐣", "🐳", "🍫", "🍰", "🍪", "🍗", "ඞ", "🇲🇾"];

  function getRandomEmoji() {
    const length = emojis.length;
    return emojis[Math.floor(Math.random() * length)];
  }
</script>

{getRandomEmoji()}
