import TopNav from "../components/navs/TopNav";
import SideNav from "../components/navs/SideNav";
import Container from "../components/app/Container";

export default function Main() {
  return (
    <>
      <div class="flex w-screen h-screen text-gray-700">
        <TopNav />
        <SideNav />
        <Container />
      </div>
    </>
  );
}
