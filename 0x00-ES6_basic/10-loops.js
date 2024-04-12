export default function appendToEachArrayValue(array, appendString) {
  const arrIndex = [];
  for (const idx of array) {
    arrIndex.push(`${appendString}${idx}`);
  }

  return arrIndex;
}
