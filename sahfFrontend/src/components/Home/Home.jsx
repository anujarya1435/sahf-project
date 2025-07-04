import styles from './Home.module.css'
import About from '../Body/About_Section/About.jsx';
import Banner from '../Body/Home_Section/Banner.jsx';
import Transformlives from '../Body/Card_Section/Transformlives.jsx';
import Impact_Areas from '../Body/Impact Areas/Impact_Areas.jsx';
import Priority from '../Body/Priority/Priority.jsx';
import Contact_Us from '../Body/Contact_Us/Contact_Us.jsx';
import Partners from '../Body/Partners/Partners.jsx';
import Achivement from '../Body/Odometer/Achivement.jsx';


const Home = () => {
  return (
     <div className={styles.container}>
      <Banner/>
      <About/>
      <Achivement/>
      <Transformlives/>
      <Impact_Areas/>
      <Priority/>
      <Contact_Us/>
      <Partners/>
     </div>
  )
}

export default Home;