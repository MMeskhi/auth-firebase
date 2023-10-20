import { GoogleAuthProvider, signInWithPopup } from "firebase/auth";
import { auth } from "../../utils/firebase";

export default function Login() {
  const googleProvider = new GoogleAuthProvider();
  const GoogleLogin = async () => {
    try {
      const result = await signInWithPopup(auth, googleProvider);
      console.log(result.user);
    } catch (error) {
      console.log(error);
    }
  };

  return (
    <div>
      <h2>Join</h2>
      <button
        onClick={GoogleLogin}
        className="text-slate-200 border border-slate-200 p-2"
      >
        Sign in with Google
      </button>
    </div>
  );
}
