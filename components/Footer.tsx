import React from 'react';
import styles from '../styles/Footer.module.css';

const Footer = () => {
  return (
    <div>
      <ul className={styles.FooterContainer}>
        <li className={styles.FooterItemContainer}>
          <a href='https://www.starbucks.com/terms/privacy-policy/'>Privacy Notice</a>
        </li>
        <li className={styles.FooterItemContainer}>
          <span aria-hidden='true' className={styles.Divider}>
            |
          </span>
          <a href='https://www.starbucks.com/terms/starbucks-terms-of-use/'>Terms of Use</a>
        </li>
        <li className={styles.FooterItemContainer}>
          <span aria-hidden='true' className={styles.Divider}>
            |
          </span>
          <a href='https://www.starbucks.com/personal-information' id='personal-information'>
            Do Not Share My Personal Information
          </a>
        </li>
        <li className={styles.FooterItemContainer}>
          <span aria-hidden='true' className={styles.Divider}>
            |
          </span>
          <a href='https://content-prod-live.cert.starbucks.com/binary/v2/asset/137-70076.pdf'>CA Supply Chain Act</a>
        </li>
        <li className={styles.FooterItemContainer}>
          <span aria-hidden='true' className={styles.Divider}>
            |
          </span>
          <a href='https://www.starbucks.com/about-us/accessibility/'>Accessibility</a>
        </li>
        <li className={styles.FooterItemContainer}>
          <span aria-hidden='true' className={styles.Divider}>
            |
          </span>
          <button>Cookie Preferences</button>
        </li>
      </ul>
    </div>
  );
};

export default Footer;
