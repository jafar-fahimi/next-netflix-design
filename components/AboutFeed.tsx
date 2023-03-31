import {
  addDoc,
  collection,
  serverTimestamp,
  Timestamp,
} from "firebase/firestore";
// import { useSession } from "next-auth/react";
import { useState } from "react";
import { AiFillMail } from "react-icons/ai";
import { GoRequestChanges } from "react-icons/go";
import { MdCastForEducation } from "react-icons/md";
import { RiNetflixFill } from "react-icons/ri";
import { db } from "../utils/firebase";
import useAuth from "../hooks/useAuth";
import Image from "next/image";

type Props = {};

function AboutFeed({}: Props) {
  //   const { data: session } = useSession();
  const [feedback, setFeedback] = useState("");
  const authDetail = useAuth();

  const handleSubmit = async (event: any) => {
    event.preventDefault();
    if (feedback) {
      try {
        await addDoc(collection(db, "feedBack"), {
          username: authDetail.user?.displayName,
          caption: feedback,
          profileImage: authDetail.user?.photoURL,
          email: authDetail?.user?.email,
          timestamp: serverTimestamp() as Timestamp,
        });

        setFeedback("");
      } catch (error) {
        console.log(error);
      }
    }
  };

  return (
    <main className="relative h-auto overflow-x-hidden pb-24 lg:space-y-24 xxs:pl-4">
      <div className="pb-18 pt-28">
        <p className="px-4 text-3xl font-semibold xs:px-20">Information's</p>
        <div className="inline-block justify-between overflow-x-hidden px-8 py-8 md:flex md:space-x-8 xs:px-16 ">
          {/* sm:w-[450px] md:w-[465px] w-[280px] lg:w-[700px] */}
          <div className="z-0 w-full flex-1 items-center md:w-1/2 ">
            <Image
              src="/../public/images/my-netflix-design.png"
              width={550}
              height={280}
              alt="My Netflix Design Image"
            />
          </div>
          <div className="w-full flex-1 mt-8 md:mt-0 items-center space-y-4 md:w-1/2">
            <p className="flex items-center justify-start gap-4 text-xl font-semibold">
              <RiNetflixFill color="red" /> Netflix Design
            </p>
            <p className="flex items-center justify-start gap-4 text-lg font-semibold">
              <MdCastForEducation /> For Educational Purposes Only
            </p>
            <p className="flex items-center justify-start gap-4 text-lg font-semibold">
              <AiFillMail /> Contact:
              <br />
              <a
                href="mailto:jafar.fahimi12@gmail.com"
                className="text-sm text-gray-400"
              >
                jafar.fahimi12@gmail.com
              </a>
            </p>
            <form
              className="flex flex-col items-start pt-10"
              onSubmit={handleSubmit}
            >
              <p className="flex items-center justify-start gap-4 space-x-4 text-lg font-medium">
                <GoRequestChanges /> Feedback
              </p>
              <input
                className="mt-4 w-full rounded-md bg-gray-900 py-2 px-2.5 outline-none placeholder:text-gray-400"
                placeholder="Your Message or Feedback..."
                type="text"
                value={feedback}
                onChange={(e) => setFeedback(e.target.value)}
              />
              <button
                disabled={!feedback}
                onClick={handleSubmit}
                type="submit"
                className="mt-2 cursor-pointer rounded-md bg-red-600 px-6 py-2.5 text-sm font-medium text-white hover:bg-red-500 disabled:cursor-not-allowed disabled:text-gray-100"
              >
                Submit
              </button>
            </form>
          </div>
        </div>
      </div>
    </main>
  );
}

export default AboutFeed;
