/* eslint-disabled */
export default function getResponseFromAPI() {
  const thePromise = new Promise((resolve) => {
    resolve('foo');
  });
  return (thePromise);
}
