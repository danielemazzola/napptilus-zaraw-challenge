import './comics.css'

const Comics = ({ comic }) => {
  return (
    <div className="container-images">
      <img
        src={`${comic.thumbnail.path}.${comic.thumbnail.extension}`}
        alt={comic.title}
        loading="lazy"
      />
      <p>{comic.title}</p>
    </div>
  )
}

export default Comics
