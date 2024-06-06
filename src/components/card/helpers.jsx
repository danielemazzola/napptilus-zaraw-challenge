export const isFavorite = (favorite, character) => {
  const isFavorite = favorite.some(
    (el) => el.id.toString() === character.id.toString()
  )
  return isFavorite
}
