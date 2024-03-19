
import {useState} from 'react'
import './App.css';
import Button from './components/Button';
import Box from './components/Box';

function App() {
  const types = ['rock', 'scissors', 'paper']
  const smallImages=['/img/r1.png', '/img/s1.png', '/img/p1.png']
  const bigImages =['/img/rock.png', '/img/scissors.png', 'img/paper.png']

  const [user, setUser] =useState(null)
  // {name:'rock', image:'', status:'Win'}
  const [computer, setComputer] =useState(null)
  const [result, setResult] = useState('Tie')
  const [score, setScore] =useState({user:0, computer:0})

  function getComputer(){
    const index = Math.floor(Math.random()*types.length)
    const type = types[index]
    const image = bigImages[index]
    return [type, image];
  }
  function judgement(userChoice, computerChoice){
    if(userChoice == computerChoice){
      return 'Tie' 
    } else if (userChoice=='rock'){
      return computerChoice == 'scissors'? 'Win':'Lose'
    } else if (userChoice =='scissors'){
      return computerChoice =='rock'?"Lose":"Win"
    } else if(userChoice =='paper'){
      return computerChoice=='rock'? "Win":"Lose"
    }
  }
  function play(type){
    const userChoice = type;
    let index;
    if(type==='rock'){index=0 }
    else if(type ==='scissors'){index=1}
    else {index=2}
    console.log(`${type}, ${index} 클릭됨`)
    const [computerChoice, computerImage] = getComputer()
    let result = judgement(userChoice, computerChoice)
    if (result== 'Win'){
      setScore({...score, user: score.user+1})
      setUser({...user, name:type, image:bigImages[index],status:'Win'})
      setComputer({...computer,name:computerChoice, image:computerImage, status:"Lose"})
      setResult(result)
    } else if(result =='Lose'){
      setScore({...score, computer: score.computer+1})
      setUser({...user, name:type, image:bigImages[index],status:'Lose'})
      setComputer({...computer, name:computerChoice, image:computerImage,status:"Win"})
      setResult(result)
    } else{
      setUser({...user, name:type, image:bigImages[index],status:'Tie'})
      setComputer({...computer, name:computerChoice, image:computerImage,status:"Tie"})
      setResult(result)
    }
    
  }
  return (
    <div>
      <div className="container">
        <div className="score">스코어: {score.user} : {score.computer}</div>
        <div className="boxes">
          <Box who={user}  />
          <Box who={computer} />
        </div>
        <div className="result">{result}</div>
        <div className="buttons">
          {smallImages.map((img, index)=>
            <Button onClick={()=>play(types[index])} key={index} image={img} />
          )}
        </div>
      </div>
    </div>
  );
}

export default App;
