function fetchUserData() {
  return new Promise((resolve, reject) => {
    setTimeout(() => reject({ error: "User not found" }), 500);
  })
    .catch((hsh) => console.error(hsh.error))
    .finally(() => console.log('Fetching complete'));
}

fetchUserData();