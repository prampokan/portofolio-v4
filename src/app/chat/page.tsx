"use client";

import { useState, useEffect } from "react";
import Image from "next/image";
import { Input } from "@/components/ui/input";
import { Button } from "@/components/ui/button";
import { toast } from "sonner";
import {
  DropdownMenu,
  DropdownMenuContent,
  DropdownMenuItem,
  DropdownMenuTrigger,
} from "@/components/ui/dropdown-menu";
import { SendHorizontal, Github, LogOut } from "lucide-react";
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
import Wave from "@/components/ui/wave";
import { BlurFade } from "@/components/magicui/blur-fade";

export default function Page() {
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
        toast("Please use google login instead", {
          description: "Your email is already linked into google provider",
        });
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
      getChats();
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
      { name: "Year", value: 60 * 60 * 24 * 365 },
      { name: "Month", value: 60 * 60 * 24 * 30 },
      { name: "Day", value: 60 * 60 * 24 },
      { name: "Hour", value: 60 * 60 },
      { name: "Min", value: 60 },
      { name: "Sec", value: 1 },
    ];

    for (let unit of units) {
      const quotient = Math.floor(diffInSeconds / unit.value);
      if (quotient > 0) {
        return `${quotient} ${unit.name} ago`;
      }
    }

    return "just now";
  };

  return (
    <BlurFade inView>
      <div className="flex flex-col items-center">
        <h1 className="text-3xl sm:text-4xl font-jacquard font-bold mt-7 sm:mt-0 text-center">
          Let's talk🙌
        </h1>
        <p className="font-[family-name:var(--font-geist-mono)] text-center max-w-md mt-5 text-muted-foreground leading-relaxed">
          Sign in with Google or Github, and let me know what you think about
          the website!
        </p>
        <Wave className="mt-8 mb-5" />
      </div>
      <div
        className={`${
          user ? "hidden" : "flex"
        } mt-5 gap-2 w-full grid grid-cols-2`}
      >
        <Button variant="outline" onClick={SignInWithGoogle}>
          <Image src="/images/google.webp" alt="g" width={15} height={15} />
          Sign in with Google
        </Button>
        <Button variant="outline" onClick={SignInWithGithub}>
          <Github />
          Sign in with Github
        </Button>
      </div>
      <div
        className={`mt-7 relative border-dashed ${
          user ? "border-t-2" : "border-y-2"
        }`}
      >
        <div className="h-[30rem] overflow-y-auto pt-10 flex flex-col-reverse no-scrollbar">
          {chats &&
            chats.map((chat: any) => (
              <div
                key={chat.id}
                className={`flex ${
                  chat.uid === user?.uid ? "flex-row-reverse" : "flex-row"
                } items-end gap-x-3 mb-7`}
              >
                <div className="w-10 h-10 rounded-full bg-card overflow-hidden shrink-0">
                  <Image
                    src={chat.profile_photo}
                    alt="i"
                    width={50}
                    height={50}
                  />
                </div>
                <div
                  className={`${
                    chat.uid === user?.uid &&
                    "flex flex-col items-end -translate-x-4"
                  }`}
                >
                  <div
                    className={`flex ${
                      chat.uid === user?.uid ? "flex-row-reverse" : "flex-row"
                    } items-end`}
                  >
                    <div
                      className={`max-w-72 py-2 px-4 bg-zinc-100 dark:bg-zinc-900 rounded-[20px] ${
                        chat.uid === user?.uid
                          ? "translate-x-6"
                          : "-translate-x-2"
                      } overflow-hidden`}
                    >
                      {chat.content}
                    </div>
                    <p
                      className={`text-xs text-zinc-500 ${
                        chat.uid === user?.uid
                          ? "translate-x-5"
                          : " -translate-x-1.5"
                      }`}
                    >
                      {formatedTimeStamp(chat.created_at.seconds)}
                    </p>
                  </div>
                  <p
                    className={`text-sm pt-1 text-zinc-500 ${
                      chat.uid === user?.uid && "translate-x-4"
                    }`}
                  >
                    {chat.email}
                  </p>
                </div>
              </div>
            ))}
        </div>
        <form
          onSubmit={addChat}
          className={`bg-zinc-50 dark:bg-zinc-900 py-2 px-4 ${
            user ? "flex" : "hidden"
          }  items-center gap-x-3 rounded-b-lg`}
        >
          <DropdownMenu>
            <DropdownMenuTrigger className="w-10 h-10 rounded-full bg-red-500 cursor-pointer overflow-hidden hover:opacity-75 transition-all shrink-0">
              <Image
                src={user?.photoURL || "/google.webp"}
                alt="i"
                width={50}
                height={50}
              />
            </DropdownMenuTrigger>
            <DropdownMenuContent>
              <DropdownMenuItem
                className="cursor-pointer"
                onClick={() => auth.signOut()}
              >
                <LogOut />
                Sign out
              </DropdownMenuItem>
            </DropdownMenuContent>
          </DropdownMenu>
          <Input
            type="text"
            placeholder="Aa"
            className="bg-white dark:bg-zinc-800 rounded-full focus-visible:ring-transparent focus-visible:ring-offset-0 border-none px-3"
            value={formData}
            onChange={(e) => setFormData(e.target.value)}
            required
          />
          <div>
            <Button
              type="submit"
              className="rounded-full"
              size="icon"
              variant="secondary"
              disabled={loadingUpload}
            >
              <SendHorizontal />
            </Button>
          </div>
        </form>

        <div className="absolute left-0 top-0 bg-gradient-to-b from-white dark:from-zinc-950 to-transparent w-full h-10"></div>
        <div
          className={`absolute left-0 bottom-0 bg-gradient-to-t from-white dark:from-zinc-950 to-transparent w-full h-10 ${
            user ? "hidden" : "block"
          } `}
        ></div>
      </div>
    </BlurFade>
  );
}
