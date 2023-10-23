import { useAuthState } from "react-firebase-hooks/auth";
import { auth } from "../utils/firebase";
import { AiOutlineLogout } from "react-icons/ai";

export default function Header() {
  const [user, loading] = useAuthState(auth);

  return (
    <header className="flex justify-between items-center gap-20">
      <a href="/" className="text-slate-200 text-2xl">
        ListMM
      </a>
      <nav className="px-9 py-3 bg-neutral-800 rounded-xl">
        <ul className="flex justify-center items-center space-x-10 text-2xl text-slate-200">
          <li>
            <a href="#" className="hover:text-slate-400 duration-200">
              Music
            </a>
          </li>
          <li>
            <a href="#" className="hover:text-slate-400 duration-200">
              Movies/Shows
            </a>
          </li>
          <li>
            <a href="#" className="hover:text-slate-400 duration-200">
              Games
            </a>
          </li>
        </ul>
      </nav>
      <div className="flex justify-center items-center space-x-2">
        <img
          className="rounded-full object-cover h-16 w-16 outline outline-2 outline-slate-950 shadow-sm"
          src={user.photoURL}
          alt="avatar"
          referrerPolicy="no-referrer"
        />
        <button
          className="text-slate-200 text-xl hover:opacity-80 duration-200"
          onClick={() => auth.signOut()}
        >
          <AiOutlineLogout />
        </button>
      </div>
    </header>
  );
}
