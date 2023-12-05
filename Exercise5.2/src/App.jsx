import './App.css'
import Card from './components/Card'
import Image1 from './assets/img1.jpg'
import Image2 from './assets/img2.jpg'
import Image3 from './assets/img3.jpg'

function App() {
 
  return (
    <>
      <Card
        image= {Image1}
        title="Card 1"
        description="Description for Card 1."
        link="https://example.com/card1"
      />
      <Card
        image= {Image2}
        title="Card 2"
        description="Description for Card 2."
        link="https://example.com/card2"
      />
      <Card
        image= {Image3}
        title="Card 3"
        description="Description for Card 3."
        link="https://example.com/card3"
      />
    </>
  )
}

export default App
