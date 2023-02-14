<script>
  import IconButton from "../components/IconButton.svelte";
</script>

<h2>Resume</h2>
<div class="download-button">
  <div>make dedicated page? with pdf viewer</div>
  <IconButton goto="/test.html" download="Akmal-Shareef-Resume" icon="download" big
    >Download resume</IconButton
  >
</div>

<style lang="scss">
  h2 {
    font-size: 1.5rem;
    margin-bottom: 0.5rem;
    color: var(--background-color);
  }

  .download-button {
    width: fit-content;
    margin: 2rem auto;
  }
</style>
