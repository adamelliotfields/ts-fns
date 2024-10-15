const ALPHABET = 'ABCDEFGHIJKLMNOPQRSTUVWXYZabcdefghijklmnopqrstuvwxyz0123456789_-'

/** Generate a unique identifier. */
export default function uid(length = 21, alphabet = ALPHABET, random_fn = Math.random): string {
  let id = ''
  for (let i = 0; i < length; i++) {
    id += alphabet.charAt(Math.floor(random_fn() * alphabet.length))
  }
  return id
}
