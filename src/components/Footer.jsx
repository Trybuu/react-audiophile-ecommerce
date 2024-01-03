import Logo from '../ui/Logo'
import NavLinks from './NavLinks'

import fb from '/icons/icon-facebook.svg'
import ig from '/icons/icon-instagram.svg'
import twitter from '/icons/icon-twitter.svg'

import classes from './Footer.module.css'

export default function Footer() {
  return (
    <footer className={classes.footer}>
      <section className={classes.sectionOne}>
        <Logo />
        <NavLinks />
      </section>

      <p className={classes.footerText}>
        Audiophile is an all in one stop to fulfill your audio needs. We are a
        small team of music lovers and sound specialists who are devoted to
        helping you get the most out of personal audio. Come and visit our demo
        facility - we are open 7 days a week.
      </p>
      <p className={classes.footerText}>Copyright 2021. All Rights Reserved</p>
      <p>
        <a href="https://www.facebook.com/" target="_blank" rel="noreferrer">
          <img src={fb} alt="Facebook icon" />
        </a>
        <a href="https://www.instagram.com/" target="_blank" rel="noreferrer">
          <img src={ig} alt="Instagram icon" />
        </a>
        <a href="https://www.twitter.com/" target="_blank" rel="noreferrer">
          <img src={twitter} alt="Twitter icon" />
        </a>
      </p>
    </footer>
  )
}
