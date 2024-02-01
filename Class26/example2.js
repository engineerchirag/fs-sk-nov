const POST_URL = "https://jsonplaceholder.typicode.com/posts/1";
const USER_URL = "https://jsonplaceholder.typicode.com/users/1";
const COMMENT_URL = "https://jsonplaceholder.typicode.com/comments/1";

function fetchData(url) {
  return fetch(url)
    .then((data) => data.json())
    .catch((err) => err);
}

// Example 2:
fetchData(POST_URL)
  .then((data) => {
    console.log(data);
    return fetchData(USER_URL);
  })
  .then((data) => {
    console.log(data);
    return fetchData(COMMENT_URL);
  })
  .then((data) => {
    console.log(data);
  })
  .catch((err) => {
    console.log(err);
  });

async function getPostRelatedData() {
  try {
    const postData = await fetchData(POST_URL); // Post
    console.log(postData);
    const userData = await fetchData(USER_URL); // User
    console.log(userData);
    const commentData = await fetchData(COMMENT_URL); // Comment
    console.log(commentData);
  } catch (err) {
    console.log(err);
  }
}

getPostRelatedData();

async function getPostRelatedDataInParallel() {
  try {
    const results = await Promise.all([
      fetchData(POST_URL),
      fetchData(USER_URL),
      fetchData(COMMENT_URL),
    ]);
    console.log(results);
  } catch (err) {
    console.log(err);
  }
}

getPostRelatedDataInParallel();

function getResult() {
  try {
    console.log("1");
    console.log("2");
    console.log("3");
    throw new Error("Failed at line 49!");
    console.log("4");
    console.log("5");
  } catch (e) {
    console.log(e);
  } finally {
    console.log('Always at end');
  }
}

getResult();
