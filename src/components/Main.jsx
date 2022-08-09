import React from 'react'
import Header from './Header'

import { useState, useEffect } from 'react';
import axios from 'axios'

export default function Main(props) {

  const [ featuredList, setFeaturedList ] = useState();
  
  useEffect(() => {
    let params = {
      headers: {
        Accept: "application/json",
        "Content-Type": "application/json",
        Authorization: `Bearer ${props.token}`,
      },
    }
    axios.get("https://api.spotify.com/v1/browse/featured-playlists?country=SG&locale=en_SG&limit=13", params).then((res) => {
    setFeaturedList(res.data)
    });
  }, [])
  return (
    <div>
      <Header />
      <main className="col-span-5 row-span-3 overflow-auto">
          <header
            className="px-6 py-4 mb-6 bg-gray-600 flex items-center justify-between sticky top-0 z-10"
          >

          </header>
          <section className="px-6 grid gap-6 mb-8">
            <div className="flex items-center">
              <div className="flex-1">
                <h3 className="text-2xl text-white font-bold">
                    Featured Today
                </h3>
              </div>
              <div>
       
              </div>
            </div>
            <div className="grid grid-cols-6 gap-4">
            { featuredList ? featuredList.playlists.items.map(item => (
        <div className="bg-gray-200 rounded-lg p-5">
        <div className="relative pt-full mb-4">
          <img
            className="block w-full absolute inset-0"
            src={item.images[0].url}
            alt=""
          />
        </div>
        <div className="text-sm text-white text-line-clamp-1 mb-1 block text font-bold">
          {item.name}
        </div>
        <div className="relative pb-5">
          <span className="text-xs text-gray-100 text-line-clamp-1">
            {item.owner.display_name}
          </span>
          <button
            className="absolute right-0 top-0 w-10 h-10 bg-green-200 rounded-full flex text-white"
          >
            <svg
              className="fill-current h-5 w-5 m-auto"
              xmlns="http://www.w3.org/2000/svg"
              viewBox="0 0 20 20"
            >
              <path d="M5 4h3v12H5V4zm7 0h3v12h-3V4z" />
            </svg>
          </button>
        </div>
      </div>
      )) : null }
        
            </div>
          </section>

        </main>
    </div>
  )
}
