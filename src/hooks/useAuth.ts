import { auth } from "@/firebase.config";
import { onAuthStateChanged } from "firebase/auth";
import { useCallback, useEffect, useState } from "react";
import { useNavigate } from "react-router-dom";

export default function useAuth() {
  const [isAuthenticated, setIsAuthenticated] = useState(false);

  const navigate = useNavigate();

  useEffect(() => {
    const subscribe = onAuthStateChanged(auth, (user) => {
      if (user) {
        const uid = user.uid;

        console.log(uid);
        setIsAuthenticated(true);
        navigate("/home");
      } else {
        setIsAuthenticated(false);
        navigate("/sign-in");
      }
    });

    return () => {
      subscribe();
    };
  }, [navigate]);

  const signOut = useCallback(async () => {
    await auth.signOut();
    navigate("/sign-in");
  }, [navigate]);

  return { isAuthenticated, signOut };
}
