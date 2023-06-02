import React, {Component} from 'react'
import './App.css'

class App extends Component {
  constructor(props) {
    super(props);
    this.state = {
      person: {
        fullName: 'Benoît Moussépoua SAGNA',
        bio: 'Web dev en devenir',
        ImgSrc: '...',
        profession: 'Web dev',
      },
      show: false
    };
  }
  handleClick = () => {
    this.setState({
      show: !this.state.show
    });
  }

  render() {
    return (
      <div className="App">
        <button onClick={this.handleClick}>Mon Profile</button>
        {this.state.show && (
          <div>
            <h2>{this.state.person.fullName}</h2>
            <img src={this.state.person.ImgSrc} alt='profile'/>
            <p>{this.state.person.bio}</p>
            <p>{this.state.person.profession}</p>
          </div>
        )}
      </div>
    );
  }
}

export default App;