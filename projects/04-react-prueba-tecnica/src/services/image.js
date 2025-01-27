export const getImage = async (firstThreeWords) => {
  const data = await fetch(`https://cataas.com/cat/says/${firstThreeWords}?fontSize=50&fontColor=red`)
  const { url } = data
  return url
}
