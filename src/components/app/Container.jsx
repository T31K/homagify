import Hero from "./hero/Hero";
import Layout from "./layout/Layout";

import { useLocation } from "react-router-dom";
import { useEffect, useState } from "react";

export default function Container() {
  const { pathname } = useLocation;
  const [title, setTitle] = useState();
  useEffect(() => {
    setTitle(handleHeroTitle(pathname));
  }, [pathname]);

  const handleHeroTitle = (path) => {
    let title = "!";
    switch (path) {
      case "featured":
        title = "Featured Today";
        break;
      default:
        title = "Discover!";
    }
    return title;
  };
  return (
    <main class="content">
      <Hero title={title} />
      <Layout />
    </main>
  );
}
