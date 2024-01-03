import about from '/images/image-about.jpg'
import classes from './About.module.css'

export default function About() {
  return (
    <div className={classes.about}>
      <img
        className={classes.about__image}
        src={about}
        alt="Man listening to the music in XX99 headphones"
      />
      <div className={classes.about__content}>
        <h2>
          BRINGING YOU THE <span className={classes.highlight}>BEST</span> AUDIO
          GEAR
        </h2>
        <p>
          Located at the heart of New York City, Audiophile is the premier store
          for high end headphones, earphones, speakers, and audio accessories.
          We have a large showroom and luxury demonstration rooms available for
          you to browse and experience a wide range of our products. Stop by our
          store to meet some of the fantastic people who make Audiophile the
          best place to buy your portable audio equipment.
        </p>
      </div>
    </div>
  )
}
