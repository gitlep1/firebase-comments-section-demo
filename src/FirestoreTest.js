import db from "./Firebase";
import {
  collection,
  addDoc,
  query,
  where,
  onSnapshot,
} from "firebase/firestore";

// console.log("Firestore Database: ", db);

// commentsCollection is a reference to a firestore collection
const commentsCollection = collection(db, "comments");

const postComment = (videoId, author, comment) => {
  addDoc(commentsCollection, { videoId, author, comment }).catch((error) =>
    console.log(error)
  );
};

// postComment("3", "colbolt", "my comment is cool thumbs up");

const q = query(commentsCollection, where("videoId", "==", "3"));
onSnapshot(q, (snapshot) => {
  const queryResults = [];
  snapshot.forEach((doc) => {
    queryResults.push(doc.data());
  });
  // console.log("queryResults: ", queryResults);
});
