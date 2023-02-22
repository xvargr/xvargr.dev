<script>
  import { userSettings } from "../userData";

  import GithubSvg from "../components/svg/GithubSVG.svelte";
  import LinkedinSvg from "../components/svg/LinkedinSVG.svelte";
  import MailSvg from "../components/svg/MailSVG.svelte";

  const { linkedIn, github, email, formLink } = userSettings;
</script>

<article>
  <section>
    <h2>Contact ✉️</h2>
    <div class="contact-container ">
      <a class="link-button linkedin" target="_blank" rel="noreferrer" href={linkedIn.page}>
        <span class="icon">
          <LinkedinSvg />
        </span>
        <span>LinkedIn</span>
      </a>
      <a class="link-button github" target="_blank" rel="noreferrer" href={github.page}>
        <span class="icon">
          <GithubSvg />
        </span>
        <span>GitHub</span>
      </a>
      <button
        class="link-button email"
        on:click={() => {
          window.location.href = `mailto:${[...email].reverse().join("")}`;
        }}
        on:mouseenter={(e) => {
          e.target.childNodes[2].innerText = [...email].reverse().join("");
        }}
        on:mouseleave={(e) => {
          e.target.childNodes[2].innerText = "email";
        }}
      >
        <span class="icon">
          <MailSvg />
        </span>
        <span>email</span>
      </button>
    </div>
  </section>

  <section>
    <h2>Leave a message</h2>
    <form action={formLink} method="POST">
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
        <button id="contact-submit-button" type="submit">Send</button>
      </div>
    </form>
  </section>
</article>

<style lang="scss">
  @use "../../styles/colors.scss";

  article {
    color: colors.$grey;

    section {
      margin-bottom: 2rem;

      h2 {
        font-size: 1.5rem;
        margin-bottom: 0.5rem;
        color: var(--background-color);
      }

      .contact-container {
        display: flex;
        flex-wrap: wrap;
        width: 100%;
        max-width: 40rem;
        margin: auto;
        justify-content: space-around;

        .link-button {
          display: flex;
          justify-content: space-around;
          align-items: center;
          padding: 0.5rem 1rem;
          margin: 0.4rem 0.2rem;
          font-weight: 500;
          text-decoration: none;
          border: none;
          border-radius: 0.5rem;
          cursor: pointer;
          transition: background-color 100ms;

          .icon {
            width: 2.5rem;
            margin-right: 1rem;
          }
        }

        .linkedin {
          background-color: #0e78aa;
          color: white;
        }
        .linkedin:hover {
          background-color: #1089c1;
        }

        .github {
          background-color: #181818;
          color: white;
        }
        .github:hover {
          background-color: #2e2e2e;
        }

        .email {
          background-color: #9dabaf;
          color: colors.$grey;
          > span:nth-child(2) {
            width: 10rem;
          }
        }
        .email:hover {
          background-color: #abb7ba;
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

          input,
          textarea {
            padding: 0.2rem;
            margin-bottom: 0.3rem;
            background-color: white;
            border: 1px solid #646464;
            border-radius: 0.5rem;
          }

          textarea {
            resize: none;
          }

          button {
            background-color: var(--background-color);
            color: var(--text-color);
            margin-top: 1rem;
            padding: 0.4rem;
            font-weight: 600;
            border: none;
            border-radius: 0.5rem;
            cursor: pointer;
            box-shadow: 0 4px 6px -1px rgb(0 0 0 / 0.1), 0 2px 4px -2px rgb(0 0 0 / 0.1);
            transition: background-color 100ms;
          }

          button:hover {
            background-color: var(--highlight-color); // js assign highlight bodge
          }
        }
      }
    }
  }
</style>
