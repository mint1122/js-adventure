const promises = new Promise((resolve, reject) => {
  const res = true; // Change this to false to test rejection)

  if (res) {
    resolve("Resolved!");
  }
  else {
    reject(Error("Rejected!"));
  }
});

promises.then((res) => console.log(res),(err) => alert(err));