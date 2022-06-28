import { db } from "../firebase";
import {
  collection,
  query,
  where,
  addDoc,
  onSnapshot,
} from "firebase/firestore";
import { useState, useEffect } from "react";

const useComments = (videoId) => {
  const [comments, setComments] = useState([]);
  const commentsCollection = collection(db, "comments");
  const q = query(commentsCollection, where("videoId", "==", videoId));

  useEffect(() => {
    const unsubscribe = onSnapshot(q, (snapshot) => {
      const allComments = [];
      snapshot.forEach((doc) => {
        allComments.push(doc.data());
      });
      setComments(allComments);
    });
    return unsubscribe;
  }, []);

  const postComment = (author, comment) => {
    return addDoc(commentsCollection, { author, comment, videoId });
  };

  return [comments, postComment];
};

export default useComments;
