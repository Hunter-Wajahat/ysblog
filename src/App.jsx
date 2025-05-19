import { useState } from 'react'
import reactLogo from './assets/react.svg'
import viteLogo from '/vite.svg'
import Navbar from './components/navbar/Navbar'
import Card from './components/cards/card'
import About from './components/about site/About'
import Footer from './components/footer/Footer'
import './App.css'

function App() {
  return (
    <>
    <nav>
     <Navbar />
    </nav>
     <div className="cards">
     <Card 
        title="First Card"
        imgurl="https://res.cloudinary.com/jerrick/image/upload/v1684159387/64623b9b1bad18001d8cbd85.jpg"
        description="This is the description for the first card. You can put any text here."
     />
     <Card 
        title="Second Card"
        imgurl="https://lyricssy.com/wp-content/uploads/2024/09/Talha-Anjum-Lyrics.webp"
        description="This is the description for the second card. Each card can have its own unique content."
     />
     <Card 
        title="Third Card"
        imgurl="https://res.cloudinary.com/jerrick/image/upload/d_642250b563292b35f27461a7.png,f_jpg,fl_progressive,q_auto,w_1024/642c8656da30c3001d9cc0f4.jpg"
        description="This is the description for the third card. You can customize everything!"
     />
     <Card 
        title="Third Card"
        imgurl="https://cdn-images.dzcdn.net/images/artist/ab0bdc17d8524ba216afc9660e4d517f/1900x1900-000000-80-0-0.jpg"
        description="This is the description for the third card. You can customize everything!"
     />
     </div>
     <div className="about-section">
       <About />
     </div>

     <Footer />
    </>
  )
}

export default App
