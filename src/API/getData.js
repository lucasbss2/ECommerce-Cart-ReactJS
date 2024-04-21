import { response } from "./response";

const getData = async () => {
  return new Promise((resolve, reject) => {
    setTimeout(() => {
      resolve(response);
    }, 2000);
  });
};

export default getData;
