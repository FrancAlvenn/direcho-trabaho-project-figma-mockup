import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import {
  faMagnifyingGlass,
  faHeart,
  faStar,
  faBullhorn,
  faFilm,
} from "@fortawesome/free-solid-svg-icons";

function NavMenu() {
  return (
    <aside className="absolute top-[41px] left-[-194px] text-white bg-[#292b31] rounded-xl pt-3 pb-2 max-w-[386px] z-10">
      <header className="px-4">
        <h2 className="font-bold">Create your account!</h2>
        <p className="opacity-75">
          Get personalized event recommendations tailored just for you!
        </p>
        <section className="flex gap-4 py-5">
          <button className="cursor-pointer rounded-full py-3 px-8 flex-1 font-bold bg-gradient-to-r from-pink-600 to-fuchsia-600">
            Sign up
          </button>
          <button className="cursor-pointer rounded-full bg-[#0f0f0f] py-3 px-8 flex-1 font-bold">
            Log in
          </button>
        </section>
      </header>
      <main>
        <ul>
          <li className="flex gap-2 items-center py-4 border-t border-black px-4 cursor-pointer hover:text-gray-400 font-bold transition delay-10 ease-in-out">
            <FontAwesomeIcon icon={faMagnifyingGlass} />
            Search Events
          </li>
          <li className="flex gap-2 items-center py-4 border-t border-black px-4 cursor-pointer hover:text-gray-400 font-bold transition delay-10 ease-in-out">
            <FontAwesomeIcon icon={faHeart} />
            Follow Art Organizations
          </li>
          <li className="flex gap-2 items-center py-4 border-t border-black px-4 cursor-pointer hover:text-gray-400 font-bold transition delay-10 ease-in-out">
            <FontAwesomeIcon icon={faStar} />
            Highlight Video
          </li>
          <li className="flex gap-2 items-center py-4 border-t border-black px-4 cursor-pointer hover:text-gray-400 font-bold transition delay-10 ease-in-out">
            <FontAwesomeIcon icon={faBullhorn} />
            Latest News
          </li>
          <li className="flex gap-2 items-center py-4 border-t border-black px-4 cursor-pointer hover:text-gray-400 font-bold transition delay-10 ease-in-out">
            <FontAwesomeIcon icon={faFilm} />
            Watch
          </li>
        </ul>
      </main>
    </aside>
  );
}

export default NavMenu;
