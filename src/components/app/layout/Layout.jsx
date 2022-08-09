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
    <div class="flex-grow md:p-10 lg:p-8 overflow-auto" id="layout">
      <div class="grid grid-cols-6 gap-6">
        {playlists
          ? playlists.playlists.items.map((item) => (
              <div class="col-span-1 bg-white rounded-lg p-6 card">
                <img src={item.images[0].url} alt="" />
                <h1 class="text-center font-semibold mt-4">{item.name}</h1>
              </div>
            ))
          : null}
      </div>
    </div>
  );
}
