export function fakeRequest(type, timeout = 500) {
  return new Promise((res, rej) => {
    setTimeout(() => {
      console.log(`Fake request done (type: ${type})`);
      if (type === "resolve" || type == null) res();
      if (type === "reject") rej();
    }, timeout);
  });
}

export const fakesShelters = [
  { id: 1, name: "Útulok pre psov - TEZAS" },
  { id: 2, name: "OZ Tuláčik Brezno" },
];
