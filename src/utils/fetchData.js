import axios from "axios";

const fetchData = async ({ path, token }) => {
  console.log(token);
  let params = {
    headers: {
      Accept: "application/json",
      "Content-Type": "application/json",
      Authorization: `Bearer ${token}`,
    },
  };

  let baseUrl = "https://api.spotify.com/v1/browse/";
  let url = "";
  switch (path) {
    case "featured":
      url = `${baseUrl}featured-playlists?country=SG&locale=en_SG&limit=30`;
      break;
    case "new_releases":
      url = `${baseUrl}new-releases?country=SG&locale=en_SG&limit=30`;
      break;
    default:
      url = `${baseUrl}featured-playlists?country=SG&locale=en_SG&limit=30`;
  }
  try {
    const res = await axios.get(url, params);
    return res.data;
  } catch (error) {
    return error;
  }
};

export default fetchData;
