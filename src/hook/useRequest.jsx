import md5 from "md5";
const { REACT_APP_BASE_URL } = process.env;

export const useRequest = () => {
  const request = async ({ method, url, data = "" }) => {
    const sign = md5(
      data
        ? `${method}${url}${JSON.stringify(
            data
          ).toString()}${localStorage.getItem("SecKey")}`
        : `${method}${url}${localStorage.getItem("SecKey")}`
    );
    const options = {
      method,
      headers: {
        Key: localStorage.getItem("key"),
        Sign: sign,
      },
      data,
    };

    return fetch(`${REACT_APP_BASE_URL}${url}`, options).then((res) =>
      res.json()
    );
  };

  return request;
};

export default useRequest;
