import { useEffect } from 'react';
import { useRouter } from 'next/router';
import styles from '../styles/Home.module.css';
import StarBucksItem from '../components/StarBucksItem';

function Home() {


  
  return (
    <div className={styles.container}>
      <StarBucksItem
        bgColor='#fdd8f7'
        title='Love at First Sip Duo, now in the app'
        text='   Join Starbucks® Rewards and say “be mine” to the Chocolate-Covered Strawberry Crème Frappuccino® drink or Chocolate Hazelnut Cookie Cold
          Brew, perfect for sharing. Here for a limited time.'
        imgUrl='https://content-prod-live.cert.starbucks.com/binary/v2/asset/137-88574.jpg'
        order={{ first: 1, second: 2 }}
      />

      <StarBucksItem
        bgColor='#cfd84d'
        title='Next-level luxurious'
        text='Velvety smooth, deliciously lush. Try the new Oleato Golden Foam™ Iced Shaken Espresso with Toffeenut and the Oleato™ Caffè Latte with Oatmilk.'
        imgUrl='https://content-prod-live.cert.starbucks.com/binary/v2/asset/137-88552.jpg'
        order={{ first: 2, second: 1 }}
      />

      <StarBucksItem
        bgColor='#efabfc'
        title='Happy Lunar New Year'
        text='It’s the dragon’s time to shine with this Starbucks eGift, the perfect way to wish someone a happy 2024.'
        imgUrl='https://content-prod-live.cert.starbucks.com/binary/v2/asset/137-88554.jpg'
        order={{ first: 1, second: 2 }}
      />

      <StarBucksItem
        bgColor='#e99264'
        title='Bold and bright'
        text='Celebrate the Year of the Dragon with the fruity, lively Dragon Drink™.'
        imgUrl='https://content-prod-live.cert.starbucks.com/binary/v2/asset/137-88556.jpg'
        order={{ first: 2, second: 1 }}
      />

      <StarBucksItem
        bgColor='#337481'
        title='Do your day right'
        text='Grab a savory Bacon, Sausage & Egg Wrap, our Chicken, Maple Butter & Egg Sandwich or the Impossible™ Breakfast Sandwich*.'
        imgUrl='https://content-prod-live.cert.starbucks.com/binary/v2/asset/137-88561.jpg'
        order={{ first: 1, second: 2 }}
      />

      <footer className={styles.footer}>{/* Footer content */}</footer>
    </div>
  );
}

export default Home;
