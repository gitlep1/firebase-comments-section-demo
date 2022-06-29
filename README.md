# Firebase Comments Section Demo

The `main` branch of this repo has a basic YouTube clone setup, minus a comments section.
The `complete` branch has a completed firebase comments section implementation.

## Getting started

### Main branch and Complete branch

1. `npm install`
2. Add a file called `./env` with the following code:

   ```plaintext
   REACT_APP_YOUTUBE_API_KEY=<your api key goes here>
   ```

### Complete branch only

3. In `src/firebase.js` replace the empty firebase config object with your own.

# Lesson Part I: Getting to know firestore

## Firestore Data Model

[Read up on the firestore data model](https://firebase.google.com/docs/firestore/data-model)

- Documents
  - Firestore stores documents that you can think of kind of like JSON objects
  - All documents have a name / id. We will let firestore generate a random id for the documents we create
- Collections
  - Firestore documents belong to collections, this lets us organize our documents
- References
  - We can create references to documents or collections in our code.
  - References point to "hypothetical" locations in our database. Just because we create a reference to a collection named 'comments' doesn't mean it actually exists yet

_How should we model our comments data?_

## Adding a Document

[Read up on adding documents to firestore](https://firebase.google.com/docs/firestore/manage-data/add-data#add_a_document)

_Write a function that can add a document to a collection called ‘comments’_

## Querying your Firestore data

[Read up on querying your firestore data](https://firebase.google.com/docs/firestore/query-data/queries#simple_queries)

- The `query` function let's us create document queries that select documents that meet specific _constraints_
- The `where` function let's us define query constraints

_Write a query that will lookup all the documents in the ‘comments’ collection where the videoId field is the value ‘fake-video-id’._

## Note on Executing Queries

Creating a query does not actually execute the query. One reason firestore is designed this way is because there are two distinct ways to use a query to read data:

1. Execute a one time query
2. Setup a listener that triggers any time a document that matches the query is added or changed

## Listening for real-time updates

[Read up on listening for real-time updates](https://firebase.google.com/docs/firestore/query-data/listen#listen_to_multiple_documents_in_a_collection)

- `onSnapshot` let's us listen for updates to any document that matches a query
- When a matching document is added or changed, our callback fires and is passed the full list of matching documents

_Setup a listener for any changes to the comments collection, where videoId is ‘fake-video-id’. Your listener should be able to print out all of the comments that match our query._

## Detaching your listener

[Read up on detaching your listeners](https://firebase.google.com/docs/firestore/query-data/listen#detach_a_listener)

- When we no longer need to listen for database updates, we should detach our listener so it isn't needlessly called in the future

_Try detaching the listener we created in the last step_

## A little more on real time data with firestore

Most databases do not push updates to their clients in real time when they occur. The backends we build ourselves in M4 will NOT push data to clients in real time. So, why does firestore do this, and how does it work? Here’s a little intro:

[Real-time: why and how? (A video)](https://www.youtube.com/watch?v=3aoxOtMM2rc)

# Part II: Integrating firebase in React

## Investigate the Video page

- How is the Video page currently setup? Try draing a component tree
- Which component do you think we will add our database posting and listening logic into? Why?

## Complete the controlled CommentForm component

- Complete the `handleChange` function in `CommentFeed` so that `commentDraft.author` and `commentDraft.comment` are updated when a user types into `CommentForm`
- Create a `postComment` function in `CommentFeed` that:
  - accepts a comment author and comment text
  - adds a document to the comment collection in firebase. The document should have three fields: `videoId`, `author`, and `comment`
- Complete the `handleSubmit` function in `CommentFeed` that:
  - prevents default form submission behavior
  - uses `postComment` to add the `commentDraft` to firebase
  - clears the `CommentForm` inputs when complete

_At this point, you should be able to fill out the comment form and see a new document added in your firebase console_

## Listen for realtime updates to trigger updating the react state

- Create a new effect with the `useEffect` hook that:
  - Begins listening for changes to comments on the matching youtube video when the `CommentForm` component is mounted
  - updates the `comments` state when it hears an update
  - Detaches the listener when the `CommentForm` component unmounts

## Pull out stateful logic into a custom hook

We've created some pretty useful logic uses firestore and built in react hooks to synchronize our component state with the firestore state.
This is so useful, in fact, that we might want to reuse this logic to create comment sections on other social media posts or other projects. This sounds like a great opportunity to create a custom hook!

- Create a new file called `src/hooks/useComments.js`. This file will contain our reusable stateful logic and export the custom hook we create.
- Write a function called `useComments` that:
  - accepts a `videoId`
  - uses `useState`, `useEffect`, and firestore methods to synchronize react state with firestore state the same way we did in the steps above
  - returns an array with the `comments` state that updates anytime a comment is added, and the `postComment` function that adds a comment to firestore

## Test your app

- Send your firestore config to a friend
- Once the replace their config, you should each be able to comment on videos and see each other's comments appear live
