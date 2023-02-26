import * as fs from "fs";
import * as dotenv from "dotenv";

import { createClient } from "pexels";
import { userSettings } from "./src/routes/userData.js";

dotenv.config();

async function createPexelsData() {
  const client = createClient(process.env.PEXELS_KEY);

  const result = await client.photos.search({
    ...userSettings.imageQuery,
  });

  let photos;
  if (userSettings.imageQuery.exclude?.length > 0) {
    photos = result.photos.reduce((reduced, current) => {
      let filterOut = false;
      userSettings.imageQuery.exclude.forEach((filter) => {
        if (current.alt.includes(filter)) filterOut = true;
      });
      if (!filterOut) reduced.push(current);
      return reduced;
    }, []);
  } else photos = result.photos;

  photos.forEach((photo) => {
    const toDelete = ["width", "height", "liked"];
    const srcToDelete = ["landscape", "portrait", "small", "medium", "large", "large2x", "tiny"];
    toDelete.forEach((property) => {
      delete photo[property];
    });
    srcToDelete.forEach((property) => {
      delete photo.src[property];
    });
  });

  fs.writeFile("./src/imageData.json", JSON.stringify(photos), (err) => {
    if (err) {
      console.error(err);
      return;
    }
  });
}

createPexelsData();
