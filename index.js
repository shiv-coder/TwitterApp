const { TwitterApi } = require("twitter-api-v2");
const client = new TwitterApi({
    appKey: "3fTyLfS2ldG2pdqgHc5mHPXKU",
    appSecret: "Pfk5O6VivENwICQqKh0KAkdom17ZM58r9TBhCLXxkVTyltcIvT",
    accessToken: "1304198813356351491-7Hfuhdpg4HvgM6uvs2pVXo5fx5WoJG",
    accessSecret: "LNThcrqYg4xkA3NbJ6Nv0vFwRYPGl7V75b9jDe7Q0FW9s",
    bearerToken:"AAAAAAAAAAAAAAAAAAAAAKESswEAAAAAb65q1qNgQ%2FjvCyes1J5zSfZvt2s%3Dw3McqEG34WKl2nzyRzhNXjrUsDoLjnhWhYxwPHZwlyZbgn7abf",
});
const rwClient = client.readWrite;

const textTweet = async () => {
    try {
      await rwClient.v2.tweet(
          "This tweet has been created using nodejs");
      console.log("success");
    } catch (error) {
        console.error("Error:", error);
    }
};
textTweet();