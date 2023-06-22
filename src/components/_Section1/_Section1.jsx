import './_Section1.scss'

export function SectionImage(picture, title) {
  console.log(picture)
  return (
    <div className="_SectionImage" style={{backgroundImage: `url(${picture})`}}>
      {title}
    </div>
  )
}
