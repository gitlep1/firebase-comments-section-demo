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

_Write a query that will lookup all the documents in the ‘comments’ collection where the videoId field is the value ‘fake-video-id’._

## Note on Executing Queries

Creating a query does not actually execute the query. One reason firestore is designed this way is because there are two distinct ways to use a query to read data:

1. Execute a one time query
2. Setup a listener that triggers any time a document that matches the query is added or changed

## Listening for real-time updates

[Read up on listening for real-time updates](https://firebase.google.com/docs/firestore/query-data/listen#listen_to_multiple_documents_in_a_collection)

_Setup a listener for any changes to the comments collection, where videoId is ‘fake-video-id’. Your listener should be able to print out all of the comments that match our query._

## Detaching your listener

[Read up on detaching your listeners](https://firebase.google.com/docs/firestore/query-data/listen#detach_a_listener)

_Try detaching the listener we created in the last step_

## A little more on real time data with firestore

Most databases do not push updates to their clients in real time when they occur. The backends we build ourselves in M4 will NOT push data to clients in real time. So, why does firestore do this, and how does it work? Here’s a little intro:

[Real-time: why and how? (A video)](https://www.youtube.com/watch?v=3aoxOtMM2rc)
