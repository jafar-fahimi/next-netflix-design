import {
  createUserWithEmailAndPassword,
  onAuthStateChanged,
  signInWithEmailAndPassword,
  signOut,
  User,
} from "firebase/auth";

import { Router, useRouter } from "next/router";
import { createContext, useContext, useEffect, useMemo, useState } from "react";
import { auth } from "../firebase";

type AuthProviderProps = {
  children: React.ReactNode;
};

type AuthType = {
  user: User | null;
  signUp: (email: string, password: string) => Promise<void>;
  signIn: (email: string, password: string) => Promise<void>;
  logout: () => Promise<void>;
  error: string | null;
  loading: boolean;
};

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
  const router = useRouter();

  const signUp = (email: string, password: string) => {
    setLoading(true);
    createUserWithEmailAndPassword(auth, email, password)
      .then((userCredential) => {
        setUser(userCredential.user);
        router.push("/");
      })
      .catch((err) => alert(err.message))
      .finally(() => setLoading(false));
  };

  const signIn = (email: string, password: string) => {
    setLoading(true);
    signInWithEmailAndPassword(auth, email, password)
      .then((userCredential) => {
        setUser(userCredential.user);
        router.push("/");
      })
      .catch((err) => alert(err.message))
      .finally(() => setLoading(false));
  };

  const logout = () => {
    setLoading(true);
    signOut(auth)
      .then(() => setUser(null))
      .catch((err) => alert(err.message))
      .finally(() => setLoading(false));
  };
  return <h1>AuthProvider</h1>;
};
