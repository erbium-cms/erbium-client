import path from 'path'

export const createExtension = showdown => {
  // loading extension into showdown
  showdown.extension('image-handling', () => {
    let imageHandling = {
      type: 'output',
      regex: /<img\s+src="(.*)"\salt="(.*)"\s*\/>/g,
      replace: (match, src, alt, offset, string) => {
        if (!/assets\//.test(src)) {
          const assetsSrc = path.join('assets', src)
          return `<img src="/${assetsSrc}" alt="${alt}" />`
        }

        return match
      }
    }

    return [imageHandling]
  })
}
