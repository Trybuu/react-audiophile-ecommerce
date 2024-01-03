import classes from './ProductGallery.module.css'

export default function ProductGallery({ gallery }) {
  return (
    <div className={classes.gallery}>
      {gallery.map((image, index) => (
        <img
          className={classes.image}
          src={image}
          alt="Image of product"
          key={index}
        />
      ))}
    </div>
  )
}
