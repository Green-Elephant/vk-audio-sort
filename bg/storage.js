//Created by GreenElephantt at 15.09.2017
const storage = chrome.storage,
  sync = storage.local;

storage.get = (key) => {
  return new Promise((resolve) => {
    sync.get(key, (res) => {
      resolve(res[key]);
    })
  })
};
storage.set = (key, value) => {
  return new Promise((resolve) => {
    sync.set({[key]: value}, (res) => {
      resolve(res);
    })
  })
};