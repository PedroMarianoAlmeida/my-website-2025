import { doc, collection, setDoc, arrayUnion } from "firebase/firestore";
import { database } from "@/config/databaseConfig";
import { asyncWrapper } from "@/utils/asyncWrapper";

// https://firebase.google.com/docs/firestore/query-data/get-data
const chatsRef = collection(database, "websiteChat");

interface SaveChat {
  id: string;
  messages: string[];
}

export const saveChat = ({ id, messages }: SaveChat) => {
  console.log({ id, messages, database });
  return asyncWrapper(async () => {
    const chatDocRef = doc(chatsRef, String(id));
    // Use setDoc with merge:true to update the document if it exists or create a new one if it doesn't.
    try {
      console.log("Before call DB");
      const res = await setDoc(
        chatDocRef,
        { messages: arrayUnion(...messages) },
        { merge: true }
      );
      console.log("After call DB");
      console.log({ res });
    } catch (e) {
      console.log({ e });
    } finally {
      console.log("finally");
    }
    console.log("last");
  });
};
