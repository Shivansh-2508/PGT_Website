//19.159304862733944, 72.99104646520951
// https://serpapi.com/search.json?engine=google_maps&q=pinnacleclassesairoli&ll=@19.159304862733944,72.99104646520951,15.1z&type=search
// 0x3be7bff4b54fa8fd:0xc39c1e0a30a91470
// https://serpapi.com/search.json?engine=google_maps_reviews&data_id=0x3be7bff4b54fa8fd:0xc39c1e0a30a91470&sort_by=ratingHigh
// fetchDataScript.js

require("dotenv").config();
const { getJson } = require("serpapi");
const fs = require("fs");

async function fetchDataAndStore() {
  try {
    const apiKey = process.env.API_KEY;

    if (!apiKey) {
      console.error("API_KEY is missing in the environment variables.");
      return;
    }

    const json = await new Promise((resolve, reject) => {
      getJson(
        {
          engine: "google_maps_reviews",
          data_id: "0x3be7bff4b54fa8fd:0xc39c1e0a30a91470",
          sort_by: "ratingHigh",
          api_key: apiKey,
        },
        (data) => {
          if (data) {
            resolve(data);
          } else {
            reject(new Error("Failed to fetch data"));
          }
        }
      );
    });

    const reviews = json["reviews"];

    if (reviews && reviews.length > 0) {
      const dataToStore = reviews.map((review) => ({
        snippet: review.snippet,
        rating: review.rating,
        username: review.user.name,
      }));

      // Write data to JSON file
      fs.writeFileSync("data.json", JSON.stringify(dataToStore, null, 2));

      console.log("Data retrieved and stored successfully.");
    } else {
      console.log("No reviews found");
    }
  } catch (error) {
    console.error(error);
  }
}

fetchDataAndStore();

// Schedule the code to run once every 5 days (in milliseconds)
const intervalInDays = 5;
const intervalInMilliseconds = intervalInDays * 24 * 60 * 60 * 1000;
setInterval(fetchDataAndStore, intervalInMilliseconds);
