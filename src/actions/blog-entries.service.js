export function getBlogEntries () {
  return new Promise((resolve, reject) => {
    window
      .fetch('./data/blog-entries.json')
      .then(response => {
        if (!response.ok) {
          console.log('status: ', response.status)
          console.log(response.statusText)

          resolve({
            success: false,
            status: response.status,
            statusText: response.statusText,
            entries: []
          })
        }

        return response.json()
      })
      .then(json => {
        Promise.all(
          json.map(item =>
            window
              .fetch('/data/' + item.content)
              .then(response => response.text())
              .then(c => ({
                title: item.title,
                author: item.author,
                modified: item.modified,
                content: c
              }))
          )
        ).then(entries =>
          resolve({
            success: true,
            entries: entries
          })
        )
      })
  })
}
