import React, { useEffect, useState } from "react";
import { modalState, movieState } from "../atoms/modalAtoms";
import { useRecoilState } from "recoil";
import { Element, Genre } from "../typings";
import ReactPlayer from "react-player/lazy";
import { FaPlay } from "react-icons/fa";
import {
  PlusIcon,
  ThumbUpIcon,
  VolumeOffIcon,
  VolumeUpIcon,
  XIcon,
} from "@heroicons/react/outline";

const Modal = () => {
  const [showModal, setShowModal] = useRecoilState(modalState);
  const [movie, setMovie] = useRecoilState(movieState);
  const [trailer, setTrailer] = useState("");
  const [genres, setGenres] = useState<Genre[]>([]);
  const [muted, setMuted] = useState(false);

  const handleClose = () => setShowModal(false);

  useEffect(() => {
    if (!movie) return;

    async function fetchMovie() {
      const data = await fetch(
        `https://api.themoviedb.org/3/${
          movie?.media_type === "tv" ? "tv" : "movie"
        }/${movie?.id}?api_key=${
          process.env.NEXT_PUBLIC_API_KEY
        }&language=en-US&append_to_response=videos`
      ).then((response) => response.json());
      if (data?.videos) {
        const index = data.videos.results.findIndex(
          (element: Element) => element.type === "Trailer"
        );
        setTrailer(data.videos?.results[index]?.key);
      }
      if (data?.genres) {
        setGenres(data.genres);
      }
    }

    fetchMovie();
  }, [movie]);

  return (
    <>
      {/* open modal when showModal is true, when closing modal do handleClose */}
      {showModal && (
        <div
          className="fixed !top-7 left-0 right-0 z-50 mx-auto w-full max-w-5xl overflow-hidden overflow-y-scroll rounded-md scrollbar-hide"
          // onClose={handleClose}
        >
          <>
            <button
              onClick={handleClose}
              className="modalButton absolute right-5 top-5 !z-40 h-9 w-9 border-none bg-[#181818] p-1"
            >
              <XIcon width={45} height={45} />
            </button>
            <div className="relative pt-[56.25%]">
              <ReactPlayer
                url={`https://www.youtube.com/watch?v=${trailer}`}
                width="100%"
                height="100%"
                style={{ position: "absolute", top: "0", left: "0" }}
                playing
                muted={muted}
              />
              <div className="absolute bottom-10 flex w-full items-center justify-between px-10">
                <div className="flex space-x-2">
                  <button className="flex items-center gap-x-2 rounded bg-white px-8 text-xl font-bold text-black transition hover:bg-[#e6e6e6]">
                    <FaPlay className="h-7 w-7 text-black" />
                    Play
                  </button>
                  <button className="modalButton">
                    <PlusIcon className="h-7 w-7" />
                  </button>
                  <button className="modalButton">
                    <ThumbUpIcon className="h-6 w-6" />
                  </button>
                </div>
                <button
                  className="modalButton"
                  onClick={() => setMuted(!muted)}
                >
                  {muted ? (
                    <VolumeOffIcon className="h-6 w-6" />
                  ) : (
                    <VolumeUpIcon className="h-6 w-6" />
                  )}
                </button>
              </div>
            </div>
            <div className="space-y-6 rounded-b-md bg-stone-900 px-10 py-8 text-lg">
              <div className="flex items-center space-x-2 text-sm">
                <p className="font-semibold text-green-400">
                  {movie?.vote_average * 10}% Match
                </p>
                <p className="font-light">
                  {movie?.release_date || movie?.first_air_date}
                </p>
                <div className="h-4 rounded border border-white/40 px-1.5 text-xs leading-tight">
                  HD
                </div>
              </div>
              <div className="flex flex-col gap-x-10 gap-y-4 font-light md:flex-row">
                <p className="w-5/6">{movie?.overview}</p>
                <div className="space-y-3 text-sm">
                  <div>
                    <span className="text-[gray]">Genres:</span>{" "}
                    {genres.map((genre) => genre.name).join(", ")}
                  </div>

                  <div>
                    <span className="text-[gray]">Original language:</span>{" "}
                    {movie?.original_language}
                  </div>

                  <div>
                    <span className="text-[gray]">Total votes:</span>{" "}
                    {movie?.vote_count}
                  </div>
                </div>
              </div>
            </div>
          </>
        </div>
      )}
    </>
  );
};
export default Modal;
