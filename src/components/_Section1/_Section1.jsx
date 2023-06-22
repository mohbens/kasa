import "./_Section1.scss"

export function SectionImage(picture, title) {
  return (
    <div className="_SectionImage" style={{backgroundImage: `url(${picture})`}}>
      {title}
    </div>
  )
}
