import { useState, useEffect } from 'react';
import Head from 'next/head';
import { useRouter } from 'next/router';
import styles from '../styles/Signin.module.css';

export default function Signin() {
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');
  const router = useRouter();

  const validatePassword = (password: string) => {
    return /[A-Z]/.test(password) && /[0-9]/.test(password) && password.length >= 8;
  };

  const handleSubmit = (event: React.FormEvent<HTMLFormElement>) => {
    event.preventDefault();
    if (validatePassword(password)) {
      console.log('Password is valid');
      router.push('/');
    } else {
      alert('Password must consist of one Capital letter, one Number and be a length of 8 characters.');
    }
  };

  return (
    <div className={styles.FormLayout}>
      <Head>
        <title>Sign In</title>
        <meta name='description' content='Sign-in page' />
      </Head>
      <h1 className={styles.FormTitle}>Sign in or create an account</h1>
      <div className={styles.Container}>
        <div className={styles.FormContainer}>
          <form onSubmit={handleSubmit} className={styles.Form}>
            <p>* indicates required field</p>
            <input
              className={styles.FormInput}
              placeholder='*Username or email address'
              type='email'
              id='email'
              name='email'
              value={email}
              onChange={(e) => setEmail(e.target.value)}
              required
            />
            <input
              className={styles.FormInput}
              type='password'
              placeholder='*Password'
              id='password'
              name='password'
              value={password}
              onChange={(e) => setPassword(e.target.value)}
              required
            />
            <div className={styles.KeepSignedIn}>
              <input id='customCheckbox' className={styles.CheckBox} type='checkbox' />
              <label htmlFor='customCheckbox' className={styles.CheckBoxLabel}></label> <p>Keep me signed in.</p>{' '}
              <a className={styles.details}>Details</a>
            </div>
            <p className={styles.details}>Forgot your username?</p>
            <p className={styles.details}>Forgot your password?</p>

            <button className={styles.signInBtn} type='submit'>
              Sign In
            </button>
          </form>
        </div>
      </div>
    </div>
  );
}
