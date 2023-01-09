export const productQuery = async () => {
  const requestOptions = {
    method: "GET",
    redirect: "follow",
  };

  const result = await fetch(
    "https://geektrust.s3.ap-southeast-1.amazonaws.com/coding-problems/shopping-cart/catalogue.json",
    requestOptions
  );

  const res = await result.json();
  return res;
};
