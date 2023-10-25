import { useAuthState } from "react-firebase-hooks/auth";
import { auth } from "./utils/firebase";
import Intro from "./pages/intro";
import ListBoard from "./pages/listboard";

function App() {
  const [user, loading] = useAuthState(auth);
  if (loading) return <main className=""></main>;

  return (
    <main className="py-14 px-40 min-h-screen">
      {user ? <ListBoard /> : <Intro />}
    </main>
  );
}

export default App;
