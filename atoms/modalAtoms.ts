import { DocumentData } from "firebase/firestore";
import { atom } from "recoil";
import { Movie } from "../typings";

// to hold state; whether to show or hide the modal window
export const modalState = atom({
  key: "modalState", // unique key
  default: false, // default value
});

export const movieState = atom<Movie | DocumentData | null>({
  key: "movieState",
  default: null,
});
