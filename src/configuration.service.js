export function get() {
  return new Promise((resolve, reject) => {
    window
      .fetch('./configuration.json')
      .then(response => {
        if (!response.ok) {
          console.log('status: ', response.status)
          console.log(response.statusText)

          resolve({
            success: false,
            status: response.status,
            statusText: response.statusText,
            configuration: {}
          })
        }

        return response.json()
      })
      .then(json => {
        resolve({
          success: true,
          configuration: json
        })
      })
  })
}
