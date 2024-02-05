import Link from 'next/link';
import styles from '../styles/Navbar.module.css';
import Image from 'next/image';

export default function Navbar() {
  return (
    <nav className={styles.NavContainer}>
      <Image width={50} height={50} className={styles.Logo} src='./logo.svg' alt='Starbucks Logo' />

      <div className={styles.FlexCenter}>
        <ul className={styles.NavItemsContainer}>
          <li>
            <Link className={styles.NavItem} href='/'>
              MENU
            </Link>
          </li>
          <li>
            <Link className={styles.NavItem} href='/about'>
              REWARDS
            </Link>
          </li>
          <li>
            <Link className={styles.NavItem} href='/contact'>
              GIFT CARDS
            </Link>
          </li>
        </ul>
      </div>
      <div className={styles.FlexCenter}>
        <div className={`${styles.FlexCenter} `}>
          <svg className={styles.MapLogo} aria-hidden='true' focusable='false' preserveAspectRatio='xMidYMid meet' viewBox='0 0 24 24' height={20}>
            <path d='M12,11.475 C10.5214286,11.475 9.32142857,10.299 9.32142857,8.85 C9.32142857,7.401 10.5214286,6.225 12,6.225 C13.4785714,6.225 14.6785714,7.401 14.6785714,8.85 C14.6785714,10.299 13.4785714,11.475 12,11.475 M12,1.5 C7.85357143,1.5 4.5,4.7865 4.5,8.85 C4.5,14.3625 12,22.5 12,22.5 C12,22.5 19.5,14.3625 19.5,8.85 C19.5,4.7865 16.1464286,1.5 12,1.5'></path>
          </svg>
          <p className={styles.FindStoreText}>Find a store</p>
        </div>
        <Link href='/signin' passHref>
          <button className={styles.SignInBtn}>Sign In</button>
        </Link>
        <button className={styles.JoinNowBtn}>Join now</button>
      </div>
      <svg
        xmlns='http://www.w3.org/2000/svg'
        width='24'
        height='24'
        viewBox='0 0 24 24'
        fill='none'
        stroke='currentColor'
        strokeWidth='2'
        strokeLinecap='round'
        strokeLinejoin='round'
        className={styles.HamburgerMenu}
      >
        <line x1='3' y1='12' x2='21' y2='12'></line>
        <line x1='3' y1='6' x2='21' y2='6'></line>
        <line x1='3' y1='18' x2='21' y2='18'></line>
      </svg>
    </nav>
  );
}
