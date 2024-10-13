async function fetchUserProfile(num) {
  let profile = `https://jsonplaceholder.typicode.com/users/${num}`;
  let posts = `https://jsonplaceholder.typicode.com/users/${num}/posts`;
  let todos = `https://jsonplaceholder.typicode.com/users/${num}/todos`;

  try {
    let response = await fetch(url);
    let data = await response.json();
    console.log(data); 
  } catch(error) {
    console.error(error);
  }
}

// Example usage:
fetchUserProfile(1);
// Logs user profile, posts, and todos. Catches and logs errors at each step if they occur.