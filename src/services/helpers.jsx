import md5 from 'js-md5'
export const MARVEL_KEY = () => {
  const publicKey = process.env.REACT_APP_PUBLIC_KEY
  const privateKey = process.env.REACT_APP_PRIVATE_KEY
  const ts = Date.now()
  const key = md5(ts + privateKey + publicKey)
  const url_hash = `ts=${ts}&apikey=${publicKey}&hash=${key}`
  return url_hash
}
