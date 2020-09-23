import React, { Component } from 'react';
import './App.css';
import Customer from './components/Customer';
//app.js는 웹사이트에서 화면출력을 담당하는 부분

const customer = [{
  'id': 1,
  'image': 'https://placeimg.com/64/64/any',
  'name': '홍길동',
  'birthday': '123',
  'gender': '남자',
  'job': '대학생'
},

{
  'id': 12,
  'image': 'https://placeimg.com/64/64/any',
  'name': '옹길동',
  'birthday': '123',
  'gender': '남자',
  'job': '대학생'
},

{
  'id': 13,
  'image': 'https://placeimg.com/64/64/any',
  'name': '공길동',
  'birthday': '123',
  'gender': '남자',
  'job': '대학생'
}]

class App extends Component {
  render() {
    return (
      <div>
        {
          customer.map(c => {
            return (
              <Customer key={c.id} id={c.id} image={c.image}  name={c.name}  gender={c.gender}  birthday={c.birthday} job={c.job}
              />
            );
          })
        }

      </div>



    );
  }
}

export default App;
