import server from './server'

export default server

export const transformURL = url => {
  for (const key in server) {
    const protocol = `${key}:`
    if (url.indexOf(protocol) !== -1) {
      return url.replace(protocol, server[key])
    }
  }
  return url
}
