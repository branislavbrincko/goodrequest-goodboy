export function fakeRequest(type) {
  console.log(type);
  return new Promise((res, rej) => {
    setTimeout(() => {
      console.log("Fake request done!");
      if (type === "resolve" || type == null) res();
      if (type === "reject") rej();
    }, 200);
  });
}
