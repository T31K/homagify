import Hero from "./hero/Hero";
import Layout from "./layout/Layout";

export default function Container() {
  return (
    <div class="flex flex-col flex-grow">
      <Hero />
      <Layout />
    </div>
  );
}
