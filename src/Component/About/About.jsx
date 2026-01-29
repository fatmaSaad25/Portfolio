import React from 'react';
import { Link } from 'react-router-dom';
import StyleAbout from '../About/About.module.css'

const About = () => {
    return (
        <div>
          <section className={StyleAbout.about}>
            <div className="container">
              <div className={StyleAbout.content}>
               <h1>ABOUT US</h1>
              <p>We are a fashion brand dedicated to providing <br/>stylish and high-quality clothing that empowers <br/>individuals to express their unique personalities.</p>
              </div>
            </div>
          </section>
          <section className={StyleAbout.partAbout}>
            <div className="container">
              <div className="row">
                <div className="col-lg-4">
                  <div className={StyleAbout.iconsAbout}>
                    <h3><i class="fa-solid fa-gem"></i> Quality</h3>
                    <p>We choose the best fabrics and designs.</p>
                  </div>
                </div>
                <div className="col-lg-4">
                  <div className={StyleAbout.iconsAbout}>
                    <h3><i class="fa-solid fa-star"></i> Style</h3>
                    <p>Trendy looks for every mood and season.</p>
                  </div>
                </div>
                <div className="col-lg-4">
                  <div className={StyleAbout.iconsAbout}>
                    <h3><i class="fa-solid fa-heart"></i> Care</h3>
                    <p>Our customers are at the heart of everything.</p>
                  </div>
                </div>
              </div>
            </div>
          </section>
          <section className={StyleAbout.aboutStory}>
            <div className="container">
              <h3>Our Story</h3>
              <p>     We believe fashion is more than clothes it’s a way to express yourself. 
                      Our mission <br/>  is to bring you stylish, affordable, and comfortable outfits 
                      for every occasion.</p>
              <img src={require('../img/Fashion Banner.PNG')} alt="Fashion Banner" />
              <div className="row">
                <div className="col-lg-4">
                  <div className={StyleAbout.Fashion}>
                    <h4>✨ New Season, New Style!</h4>
                  </div>
                </div>
                <div className="col-lg-4">
                  <div className={StyleAbout.Fashion}>
                    <h4>👗 Where Elegance Meets Comfort</h4>
                  </div>
                </div>
                <div className="col-lg-4">
                  <div className={StyleAbout.Fashion}>
                    <h4>🌿 Timeless Fashion for Every Occasion</h4>
                  </div>
                </div>
              </div>
            <div className={StyleAbout.text}>
                <p>🛍️ Upgrade Your Wardrobe Today</p>
              <p>💎 Because You Deserve to Shine</p>
            </div>
            </div>
          </section>
            <div class={StyleAbout.aboutCta}>
              <h2>Be part of our fashion journey</h2>
              <Link to="/AllProduct" className={StyleAbout.btn}>Shop Now</Link>
          </div>
        </div>
    );
}

export default About;
