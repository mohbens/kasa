import "./Thumb.scss"

export function Thumb(imageUrl, title, id = "#") {
  return (
    <a key={id} href={id !== "#" ? "/details/" + id : "#"}>
      <div className="Thumbnail">
        <img className="ImgThumb" src={imageUrl} alt={title} />
        <h3 className="Title">{title}</h3>
      </div>
    </a>
  )
}
