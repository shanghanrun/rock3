
import {useState} from 'react'
import './App.css';
import Button from './components/Button';
import Box from './components/Box';

function App() {
  const types = ['rock', 'scissors', 'paper']
  const smallImages=['/img/r1.png', '/img/s1.png', '/img/p1.png']
  const bigImages =['/img/rock.png', '/img/scissors.png', 'img/paper.png']

  const [user, setUser] =useState({name:'rock' ,image:'/img/rock.png',status:'normal' })
  const [computer, setComputer] =useState({name:'scissors' ,image:'/img/scissors.png',status:'normal' })
  const [result, setResult] = useState('Tie')
  const [score, setScore] =useState({user:0, computer:0})
  function play(type){
    let index;
    if(type==='rock'){index=0 }
    else if(type ==='scissors'){index=1}
    else {index=2}
    console.log(`${type}, ${index} 클릭됨`)
    setUser({...user, name:type, image:bigImages[index]})
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
