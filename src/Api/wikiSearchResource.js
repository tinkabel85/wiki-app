import wrapPromise from "./wrapPromise";

async function wikiSearch(searchInput) {
  if (!searchInput) {
    return [];
  }
  const response = await fetch(
    `https://en.wikipedia.org/w/api.php?action=query&generator=search&gsrsearch=${searchInput}&exintro=&prop=extracts|pageimages&format=json&origin=*`
  );
  const data = await response.json();
  console.log(Object.values(data.query.pages));
  return Object.values(data.query.pages);
}
const wikiSearchResource = (searchInput) => {
  return wrapPromise(() => wikiSearch(searchInput));
};

export default wikiSearchResource;
