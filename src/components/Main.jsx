import { useEffect, useState } from "react";
import SideNav from "./navs/SideNav";
import Container from "./app/Container";
import axios from "axios";

export default function Main(props) {
  const [featuredList, setFeaturedList] = useState();

  useEffect(() => {
    let params = {
      headers: {
        Accept: "application/json",
        "Content-Type": "application/json",
        Authorization: `Bearer ${props.token}`,
      },
    };
    axios
      .get(
        "https://api.spotify.com/v1/browse/featured-playlists?country=SG&locale=en_SG&limit=10",
        params
      )
      .then((res) => {
        setFeaturedList(res.data);
      });
  }, []);

  return (
    <>
      <div class="flex w-screen h-screen text-gray-700">
        <SideNav />
        <Container />
      </div>
    </>
  );
}
