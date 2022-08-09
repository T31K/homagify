export default function SideNav() {
  return (
    <div class="flex flex-col w-56" id="sidenav">
      <button class="relative text-sm focus:outline-none group">
        <div class="flex items-center justify-between w-full h-16 px-4 hover:bg-gray-300">
          <span class="font-medium">Dropdown</span>
        </div>
        <div class="absolute z-10 flex-col items-start hidden w-full pb-1 bg-white shadow-lg group-focus:flex">
          <a class="w-full px-4 py-2 text-left hover:bg-gray-300" href="#">
            Menu Item 1
          </a>
          <a class="w-full px-4 py-2 text-left hover:bg-gray-300" href="#">
            Menu Item 1
          </a>
          <a class="w-full px-4 py-2 text-left hover:bg-gray-300" href="#">
            Menu Item 1
          </a>
        </div>
      </button>
      <div class="flex flex-col flex-grow p-4 overflow-auto">
        <a
          class="flex items-center flex-shrink-0 h-10 px-2 text-sm font-medium rounded hover:bg-gray-300"
          href="#"
        >
          <span class="leading-none">Item 1</span>
        </a>
        <a
          class="flex items-center flex-shrink-0 h-10 px-2 text-sm font-medium rounded hover:bg-gray-300"
          href="#"
        >
          <span class="leading-none">Item 2</span>
        </a>

        <a
          class="flex items-center flex-shrink-0 h-10 px-3 mt-auto text-sm font-medium bg-gray-200 rounded hover:bg-gray-300"
          href="#"
        >
          <svg
            class="w-5 h-5"
            xmlns="http://www.w3.org/2000/svg"
            fill="none"
            viewBox="0 0 24 24"
            stroke="currentColor"
          >
            <path
              stroke-linecap="round"
              stroke-linejoin="round"
              stroke-width="2"
              d="M12 6v6m0 0v6m0-6h6m-6 0H6"
            />
          </svg>
          <span class="ml-2 leading-none">New Item</span>
        </a>
      </div>
    </div>
  );
}
