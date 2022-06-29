import { useState, useEffect } from "react";

import db from "../../Firebase";
import {
  collection,
  addDoc,
  query,
  where,
  onSnapshot,
} from "firebase/firestore";

const useComments = (videoId) => {
  const [comments, setComments] = useState([]);

  const commentsCollection = collection(db, "comments");

  const postComment = (author, comment) => {
    addDoc(commentsCollection, { videoId, author, comment }).catch((error) =>
      console.log(error)
    );
  };

  useEffect(() => {
    const q = query(commentsCollection, where("videoId", "==", videoId));

    const unsubscribe = onSnapshot(q, (snapshot) => {
      const queryResults = [];
      snapshot.forEach((doc) => {
        queryResults.push(doc.data());
      });
      setComments(queryResults);
    });

    return unsubscribe;
  }, []); // eslint-disable-line

  return { comments, postComment };
};

export default useComments;
