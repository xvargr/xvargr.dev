export async function wake(url, retries = 0) {
  return new Promise((resolve, reject) => {
    window
      .fetch(url, {
        mode: "cors",
        method: "GET",
        // headers: {
        //   "Access-Control-Allow-Origin": "*",
        // },
      })
      .then((data) => resolve(data))
      .catch((err) => {
        retries += 1;
        console.log("retries", retries);
        console.log(err);

        if (retries < 8) {
          setTimeout(() => {
            wake(url, retries);
          }, 3000);
        } else reject(err);
      });
  });
}
