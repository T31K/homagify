import { useEffect, useState } from "react";
import SideNav from "./SideNav";
import MainWindow from "./MainWindow";
import axios from "axios";

export default function MainContainer(props) {
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
    <div>
      <div class="relative min-h-screen md:flex" data-dev-hint="container">
        <SideNav />
        <MainWindow />
      </div>
    </div>
  );
}
