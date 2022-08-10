import SideNav from "../components/navs/SideNav";
import Container from "../components/app/Container";
import { useEffect } from "react";

export default function Main() {
  return (
    <>
      <div class="flex w-screen h-screen text-gray-700">
        <SideNav />
        <Container />
      </div>
    </>
  );
}
