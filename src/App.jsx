import { useState, useEffect } from 'react'
import viteLogo from './assets/vite.svg'

import heroImg from '/images/happy-young-colleagues-office-coworking_171337-17719.avif'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faStar, faArrowUp, faStarOfLife } from '@fortawesome/free-solid-svg-icons';
import Header from './Components/Header'
import Footer from './Components/Footer'
import Banner from './Components/Banner'
import AboutSection from './Components/AboutSection'
import FeaturedProjects from './Components/FeaturedProjects'
import Services from './Components/Services'
import Resume from './Components/Resume';

function App() {

  // const [post, setPost] = useState([]);


  // useEffect(() => {
  //   const posts = async () => {
  //     const response = await fetch('https://jsonplaceholder.typicode.com/posts');
  //     const data = await response.json();
  //     console.log(data);
  //     setPost(data);
  //   }

  //   posts();

  // }, [])

  return (
    <>
      <Resume />
      <Header />
      <Banner />
      <AboutSection />
      <FeaturedProjects />
      <Services />
      <Footer />
    </>
  )
}

export default App

{/* <div className='posts_content'>
        {post.filter((item) => item.id <= 5)
          .map((item) => (
            <div className='post' key={item.id}><h2>{item.id}</h2><h3>{item.title}</h3>
              <p>{item.body}</p></div>
          ))}
        
      </div> */}