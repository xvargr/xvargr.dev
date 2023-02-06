<script>
  import { onMount } from "svelte";
  import { themeColor } from "../../stores/states";

  onMount(() => {
    const submitButton = document.querySelector("#contact-submit-button");
    submitButton.style.setProperty("--highlight-color", $themeColor.highlight);
  });
</script>

<article>
  <section>
    <h2 style={`color: ${$themeColor.background};`}>Email ✉️</h2>
    <p />
    <p>
      Feel free to drop me an email at
      <!-- todo self host fonts and assets -->
      <a
        href="&#109;&#97;&#105;&#108;&#116;&#111;&colon;&#99;&#111;&#110;&#116;&#97;&#99;&#116;&commat;&#120;&#118;&#97;&#114;&#103;&#114;&period;&#100;&#101;&#118;"
        >&#99;&#111;&#110;&#116;&#97;&#99;&#116;&commat;&#120;&#118;&#97;&#114;&#103;&#114;&period;&#100;&#101;&#118;</a
      >
    </p>
  </section>

  <section>
    <h2 style={`color: ${$themeColor.background};`}>Links 🔗</h2>
    <p>LinkedIn</p>
    <p>Github</p>
    <p>whatsapp?</p>
  </section>

  <section>
    <h2 style={`color: ${$themeColor.background};`}>Leave a message</h2>
    <form action="https://formspree.io/f/mqkopzle" method="POST">
      <div class="form-container">
        <label for="email"> Your email: </label>
        <input id="email" type="email" name="email" autocomplete="off" placeholder="(optional)" />
        <label for="subject"> Subject: </label>
        <input
          id="subject"
          type="text"
          name="subject"
          autocomplete="off"
          maxlength="100"
          required
        />
        <label for="message"> Message: </label>
        <textarea
          id="message"
          name="message"
          autocomplete="off"
          rows="4"
          maxlength="500"
          required
        />
        <button
          id="contact-submit-button"
          type="submit"
          style={`background-color: ${$themeColor.background}; color: ${$themeColor.text}`}
          >Send</button
        >
      </div>
    </form>
  </section>
</article>

<style lang="scss">
  @use "../../styles/colors.scss";

  :root {
    --highlight-color: #818181;
  }

  article {
    color: colors.$grey;

    section {
      margin-bottom: 2rem;

      h2 {
        font-size: 1.5rem;
        // text-decoration: underline 4px;
      }
    }

    form {
      display: flex;
      width: 100%;
      justify-content: center;

      .form-container {
        width: 100%;
        max-width: 40rem;
        display: flex;
        flex-direction: column;
      }

      input,
      textarea {
        padding: 0.2rem;
        background-color: white;
        border: 1px solid rgb(100, 100, 100);
        border-radius: 0.5rem;
      }

      textarea {
        // border-radius: 0;
        resize: none;
      }

      button {
        font-weight: 600;
        margin-top: 1rem;
        border: none;
        border-radius: 0.5rem;
        cursor: pointer;
        // background-color: cyan;
      }
      button:hover {
        background-color: var(--highlight-color) !important; // js assign highlight bodge
      }

      *:focus {
        // outline: none;
      }

      *:valid {
        // outline: 2px solid green;
      }

      *:invalid {
        // outline: 2px solid red;
      }
    }
  }
</style>
