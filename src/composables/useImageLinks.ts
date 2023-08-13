export default (links: string[]) => {
  const imgList = links.map((link) => `${import.meta.env.VITE_API_BASE_URL}/${link}`)
  const img = imgList[imgList.length - 1]
  const srcset = imgList.reduce((acc, curr): string => {
    const regex = /-(\d+)\.jpg$/;
    const match = curr.match(regex);

    if (match) {
      const size = match[1]
      acc += `${curr} ${size}w, `
    }

    return acc
  }, '')

 return { img, srcset }
}
