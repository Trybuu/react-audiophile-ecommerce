import { NavLink } from 'react-router-dom'
import arrow from '/icons/icon-arrow-right.svg'
import classes from './AdditionalNavigation.module.css'

export default function AdditionalNavigation() {
  return (
    <nav className={classes.additionalNavigation}>
      <div className={classes.additionalNavigation__card}>
        <img
          src="/images/image-category-thumbnail-headphones.png"
          alt="Headphones image"
          className={classes.additionalNavigation__cardImage}
        />
        <div className={classes.additionalNavigation__cardContent}>
          <h3>Headphones</h3>
          <NavLink
            className={classes.additionalNavigation__link}
            to="/headphones"
          >
            SHOP <img src={arrow} alt="Arrow right" />
          </NavLink>
        </div>
      </div>

      <div className={classes.additionalNavigation__card}>
        <img
          src="/images/image-category-thumbnail-speakers.png"
          alt="Headphones image"
          className={classes.additionalNavigation__cardImage}
        />
        <div className={classes.additionalNavigation__cardContent}>
          <h3>Speakers</h3>
          <NavLink
            className={classes.additionalNavigation__link}
            to="/speakers"
          >
            SHOP <img src={arrow} alt="Arrow right" />
          </NavLink>
        </div>
      </div>

      <div className={classes.additionalNavigation__card}>
        <img
          src="/images/image-category-thumbnail-earphones.png"
          alt="Headphones image"
          className={classes.additionalNavigation__cardImage}
        />
        <div className={classes.additionalNavigation__cardContent}>
          <h3>Earphones</h3>
          <NavLink
            className={classes.additionalNavigation__link}
            to="/earphones"
          >
            SHOP <img src={arrow} alt="Arrow right" />
          </NavLink>
        </div>
      </div>
    </nav>
  )
}
