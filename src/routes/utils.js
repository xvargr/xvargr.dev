export async function wake(url, retries = 0) {
  return new Promise((resolve, reject) => {
    window
      .fetch(url, {
        method: "GET",
      })
      .then((data) => {
        // setInterval(() => {
        //   wake(url);
        // }, 840000);
        console.warn("not keeping service awake");
        resolve(data);
      })
      .catch((err) => {
        retries += 1;

        if (retries < 30) {
          setTimeout(() => {
            wake(url, retries);
          }, 10000);
        } else reject(err);
      });
  });
}
