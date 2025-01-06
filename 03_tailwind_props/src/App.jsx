import './App.css'
import Card from './components/Card'

// let oneObject = {
//   name: "Veerasiva",
//   address: {
//     city: "Tiruchirappalli",
//     state: "Tamil Nadu"
//   }
// }

let oneArray = [1,2,3,4,5]

function App() {

  return (
    <>
    <h1 className='text-3xl bg-green-600 p-3 rounded-md'>Vite with tailwind</h1>
    <Card username='Veera' post='Web Developer' image="https://letsenhance.io/static/8f5e523ee6b2479e26ecc91b9c25261e/1015f/MainAfter.jpg" />
    <Card post='Software Developer, Microsoft' obj = {oneArray} />
    <Card />
      
    </>
  )
}

export default App
