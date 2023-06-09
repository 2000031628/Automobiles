import React from 'react';
import './Footer.css';
import { Button } from './Button';
import { Link } from 'react-router-dom';

function Footer() {
  return (
    <div className='footer-container' style={{backgroundColor:"light",border:"lightgrey",borderWidth:10,borderStyle:"solid",height:750,width:1520}} >
      <section className='footer-subscription'>
        <p className='footer-subscription-heading'>
          JOIN OUR BEST COMFORTS WITH OUR LUXURY LIFE
        </p>
        <p className='footer-subscription-text'>
          YOU CAN UNSUBSCRIBE AT ANY TIME.
        </p>
        <div className='input-areas'>
          <form>
            <input
              className='footer-input'
              name='email'
              type='email'
              placeholder='Your Email'
            />
            <Button buttonStyle='btn--outline'>SUBSCRIBE</Button>
          </form>
        </div>
      </section>
      <div class='footer-links'>
        <div className='footer-link-wrapper'>
          <div class='footer-link-items'>
            <h2>ABOUT US</h2>
            <Link to='/sign-up'>HOW IT WORKS</Link>
            <Link to='/'>TESTIMONIALS</Link>
            <Link to='/'>CAREERS</Link>
            <Link to='/'>INVESTORS</Link>
            <Link to='/'>TERMS OF SERVICE</Link>
          </div>
          <div class='footer-link-items'>
            <h2>CONTACT US</h2>
            <Link to='/'>CONTACT</Link>
            <Link to='/'>SUPPORT</Link>
            <Link to='/'>DESTINATIONS</Link>
            <Link to='/'>SPONSERSHIPS</Link>
          </div>
        </div>
        <div className='footer-link-wrapper'>
          <div class='footer-link-items'>
            <h2>VIDEOS</h2>
            <Link to='/'>SUBMIT VIDEO</Link>
            <Link to='/'>AMBASSADORS</Link>
            <Link to='/'>AGENCY</Link>
            <Link to='/'>INFLUENCER</Link>
          </div>
          <div class='footer-link-items'>
            <h2>SOCIAL MEDIA</h2>
            <Link to='/'>INSTAGRAM</Link>
            <Link to='/'>FACEBOOK</Link>
            <a href='https://www.youtube.com/'>YOUTUBE</a>
            <Link to='/'>TWITTER</Link>
          </div>
        </div>
      </div>
      <section class='social-media'>
        <div class='social-media-wrap'>
          <div class='footer-logo'>
            <Link to='/' className='social-logo'>
              CARSWORLD
              <i class='fab fa-typo3' />
            </Link>
          </div>
          <small class='website-rights'>CARSWORLD © 2020</small>
          <div class='social-icons'>
            <Link
              class='social-icon-link facebook'
              to='/'
              target='_blank'
              aria-label='Facebook'
            >
              <i class='fab fa-facebook-f' />
            </Link>
            <Link
              class='social-icon-link instagram'
              to='/'
              target='_blank'
              aria-label='Instagram'
            >
              <i class='fab fa-instagram' />
            </Link>
            <Link
              class='social-icon-link youtube'
              to='/'
              target='_blank'
              aria-label='Youtube'
            >
              <i class='fab fa-youtube' />
            </Link>
            <Link
              class='social-icon-link twitter'
              to='/'
              target='_blank'
              aria-label='Twitter'
            >
              <i class='fab fa-twitter' />
            </Link>
            <Link
              class='social-icon-link twitter'
              to='/'
              target='_blank'
              aria-label='LinkedIn'
            >
              <i class='fab fa-linkedin' />
            </Link>
          </div>
        </div>
      </section>
    </div>
  );
}

export default Footer;