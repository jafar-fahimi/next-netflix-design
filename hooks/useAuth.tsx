import {
  createUserWithEmailAndPassword,
  onAuthStateChanged,
  signInWithEmailAndPassword,
  signOut,
  User,
  AuthError,
} from "firebase/auth";

import { useRouter } from "next/router";
import { createContext, useContext, useEffect, useMemo, useState } from "react";
import { auth } from "../utils/firebase";

type AuthProviderProps = {
  children: React.ReactNode;
};

type AuthType = {
  user: User | null;
  signUp: (email: string, password: string) => Promise<void>;
  signIn: (email: string, password: string) => Promise<void>;
  logout: () => Promise<void>;
  error: string | null | AuthError;
  loading: boolean;
};

// when creating Context we must provide inital value;
const AuthContext = createContext<AuthType>({
  user: null,
  signUp: async () => {},
  signIn: async () => {},
  logout: async () => {},
  error: null,
  loading: false,
});

export const AuthProvider = ({ children }: AuthProviderProps) => {
  const [loading, setLoading] = useState(false);
  const [user, setUser] = useState<User | null>(null);
  const [error, setError] = useState<null | AuthError>(null);
  const [initalLoading, setInitialLoading] = useState(true);
  const router = useRouter();

  // to Persist the user:
  useEffect(
    () =>
      onAuthStateChanged(auth, (user) => {
        if (user) {
          // Logged in...
          setUser(user);
          setLoading(false);
        } else {
          // Not logged in...
          setUser(null);
          setLoading(true);
          if (router.pathname.slice(1) !== "login") router.push("/Starter");
        }
        setInitialLoading(false);
      }),
    [auth]
  );

  const signUp = async (email: string, password: string) => {
    setLoading(true);
    await createUserWithEmailAndPassword(auth, email, password)
      .then((userCredential) => {
        setUser(userCredential.user);
        router.push("/");
      })
      .catch((err) => {
        alert(err.message);
        setError(err.message);
      })
      .finally(() => setLoading(false));
  };

  const signIn = async (email: string, password: string) => {
    setLoading(true);
    // await func; so that its done completely, before other codes. not for then.
    await signInWithEmailAndPassword(auth, email, password)
      .then((userCredential) => {
        setUser(userCredential.user);
        router.push("/");
      })
      .catch((err) => {
        alert(err.message);
        setError(err.message);
      })
      .finally(() => setLoading(false));
  };

  const logout = async () => {
    setLoading(true);
    await signOut(auth)
      .then(() => setUser(null))
      .catch((err) => {
        alert(err.message);
        setError(err.message);
      })
      .finally(() => setLoading(false));
  };

  const memoedValues = useMemo(
    () => ({ user, signUp, signIn, error, loading, logout }),
    [user, loading, error]
  );
  return (
    <AuthContext.Provider value={memoedValues}>
      {!initalLoading && children}
    </AuthContext.Provider>
  );
};

// instead of the context, to use the hook directly and not the context component.
export default function useAuth() {
  return useContext(AuthContext);
}
