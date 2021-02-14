import React from 'react'
import {render} from 'react-dom';
import Counter from './Counter';

import './styles.scss';

class Main extends React.Component{
  render(){
    return(
      <div>
        <Counter max={400} step={50}/>
      </div>
    )
  }
}


render(<Main />, document.getElementById('root'));



