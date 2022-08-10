import { useEffect, useState } from "react";
import fetchData from "../../../utils/fetchData";
import { useStateProvider } from "../../../utils/StateProvider";

export default function Layout() {
  const [{ token }] = useStateProvider();
  const [playlists, setPlaylists] = useState();

  useEffect(() => {
    const fetch = async () => {
      const data = await fetchData.featuredPlaylist(token);
      setPlaylists(data);
    };

    fetch().catch(console.error);
  }, [token]);

  return (
    <div class="main-header">
      <div class="main-title">
        <div class="grid grid-cols-1 md:grid-cols-3 lg:grid-cols-4 gap-3 mx-4">
          {playlists
            ? playlists.playlists.items.map((item, key) => (
                <div class="col-span-1 bg-white rounded-lg p-6 card" key={key}>
                  <img src={item.images[0].url} alt="" />
                  <h1 class="text-center font-semibold mt-4">{item.name}</h1>
                </div>
              ))
            : null}
        </div>
        <button>hello</button>
      </div>
    </div>
  );
}
