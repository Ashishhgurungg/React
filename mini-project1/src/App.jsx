
import Card from './components/Card';

const jobs = [
  {
    company: "Google",
    position: "Frontend Developer",
    image: "https://upload.wikimedia.org/wikipedia/commons/2/2f/Google_2015_logo.svg"
  },
  {
    company: "Microsoft",
    position: "Software Engineer",
    image: "https://upload.wikimedia.org/wikipedia/commons/4/44/Microsoft_logo.svg"
  },
  {
    company: "Amazon",
    position: "Backend Developer",
    image: "https://upload.wikimedia.org/wikipedia/commons/a/a9/Amazon_logo.svg"
  },
  {
    company: "Meta",
    position: "Full Stack Developer",
    image: "https://upload.wikimedia.org/wikipedia/commons/0/05/Meta_Platforms_Inc._logo.svg"
  },
  {
    company: "Netflix",
    position: "UI Engineer",
    image: "https://upload.wikimedia.org/wikipedia/commons/0/08/Netflix_2015_logo.svg"
  }
];
const App = () => {
  return (
    <div className='parent'>
        {
            jobs.map(function (elem) {
                return <Card  name={elem.company} position={elem.position} image = {elem.image} />;
            })
        }
    </div>
  )
}

export default App