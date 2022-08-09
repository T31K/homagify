import axios from "axios";

const featuredPlaylist = async (token) => {
  let params = {
    headers: {
      Accept: "application/json",
      "Content-Type": "application/json",
      Authorization: `Bearer ${token}`,
    },
  };
  let url =
    "https://api.spotify.com/v1/browse/featured-playlists?country=SG&locale=en_SG&limit=30";
  try {
    const res = await axios.get(url, params);
    return res.data;
  } catch (error) {
    return error;
  }
};

const fetchData = {
  featuredPlaylist: featuredPlaylist,
};

export default fetchData;
