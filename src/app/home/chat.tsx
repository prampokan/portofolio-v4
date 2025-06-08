"use client";

import { useState, useEffect } from "react";
import Image from "next/image";
import { Button } from "@/components/ui/button";

import { SendHorizontal, Github, LogOut, Rocket } from "lucide-react";
import { db, auth } from "@/lib/firebase";
import {
  signInWithPopup,
  GoogleAuthProvider,
  GithubAuthProvider,
} from "firebase/auth";
import {
  getDocs,
  collection,
  orderBy,
  query,
  addDoc,
} from "firebase/firestore";
import { useAuthState } from "react-firebase-hooks/auth";

export default function Chat() {
  const [chats, setChats] = useState([]);
  const [formData, setFormData] = useState("");
  const [user, loading, error] = useAuthState(auth);
  const [loadingUpload, setLoadingUpload] = useState(false);

  const googleAuth = new GoogleAuthProvider();
  const githubAuth = new GithubAuthProvider();

  const SignInWithGoogle = async () => {
    try {
      await signInWithPopup(auth, googleAuth);
    } catch (error) {
      console.error(error);
    }
  };

  const SignInWithGithub = async () => {
    try {
      await signInWithPopup(auth, githubAuth);
    } catch (error: any) {
      if (error.code === "auth/account-exists-with-different-credential") {
        // toast({
        //   title: "Please use google login instead",
        //   description: "Your email is already linked into google provider",
        // });
      }
      console.error(error);
    }
  };

  useEffect(() => {
    getChats();
  }, []);

  const getChats = async () => {
    try {
      const q = query(collection(db, "chats"), orderBy("created_at", "desc"));
      const snapshot = await getDocs(q);
      const data: any = snapshot.docs.map((doc) => ({
        id: doc.id,
        ...doc.data(),
      }));
      setChats(data);
    } catch (error) {
      console.error("Error getting chats: ", error);
    }
  };

  const addChat = async (e: any) => {
    e.preventDefault();
    setLoadingUpload(true);
    try {
      await addDoc(collection(db, "chats"), {
        uid: user?.uid,
        name: user?.displayName,
        email: user?.email,
        profile_photo: user?.photoURL,
        content: formData,
        created_at: new Date(),
      });
    } catch (error) {
      console.error(error);
    } finally {
      setFormData("");
      setLoadingUpload(false);
    }
  };

  const formatedTimeStamp = (timestamp: any) => {
    const now = new Date();
    const postDate = new Date(timestamp * 1000);
    const diffInSeconds = Math.floor(
      (now.getTime() - postDate.getTime()) / 1000
    );

    const units = [
      { name: "Y", value: 60 * 60 * 24 * 365 },
      { name: "M", value: 60 * 60 * 24 * 30 },
      { name: "d", value: 60 * 60 * 24 },
      { name: "h", value: 60 * 60 },
      { name: "m", value: 60 },
      { name: "s", value: 1 },
    ];

    for (let unit of units) {
      const quotient = Math.floor(diffInSeconds / unit.value);
      if (quotient > 0) {
        return `${quotient}${unit.name} ago`;
      }
    }

    return "just now";
  };

  console.log(chats);
  return (
    <div className="mt-20">
      <h1 className="text-lg font-semibold tracking-tight font-[family-name:var(--font-geist-mono)]">
        What do you think about my website?
      </h1>
      <div className="flex gap-x-2 mt-10 w-full">
        <Button
          variant="outline"
          className="w-1/2 cursor-pointer font-semibold p-5"
        >
          <Image
            src="/images/google.webp"
            alt="google"
            width={18}
            height={18}
          />
          Sign In With Google
        </Button>
        <Button
          variant="outline"
          className="w-1/2 cursor-pointer font-semibold p-5"
        >
          <Github />
          Sign In With Github
        </Button>
      </div>
      <div className="mt-10">
        {chats.map((item: any, i) => (
          <div
            key={i}
            className="flex flex-col pt-2 pb-5 hover:border-sky-500 border-l relative ml-6 group transition-all duration-300"
          >
            <div className="w-12 h-12 border group-hover:border-sky-500 transition-all duration-300 rounded-full absolute -left-6 overflow-hidden bg-background flex justify-center items-center text-muted-foreground group-hover:text-sky-500">
              <Rocket size="18" />
            </div>
            <div className="ml-10 flex items-center gap-x-4">
              <div className="w-12 h-12 rounded-full overflow-hidden border">
                <Image
                  src={item.profile_photo}
                  alt={item.name}
                  width={100}
                  height={100}
                  className="w-full h-full object-center object-cover"
                />
              </div>
              <div>
                <h1 className="font-medium text-sm">{item.name}</h1>
                <p className="text-sm text-muted-foreground">{item.email}</p>
              </div>
            </div>
            <p className="ml-26 mt-2 text-sm font-[family-name:var(--font-geist-mono)]">
              {item.content}
            </p>
          </div>
        ))}
      </div>
    </div>
  );
}
