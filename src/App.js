import React from 'react';
import PropTypes from "prop-types";

const App = () => {
  const profiles = [
    {name: "Taro", age: 10},
    {name: "Hanako", age: 5},
    {name: "Hanako"},
    {age: 5},
  ];
  return (
    <div>
      {
        profiles.map((profile, index) => {
          return <User name={profile.name} age={profile.age} key={index}/>
        })
      };
    </div>
  )
}

const User = (props) => {
return <div>Hi, I am {props.name}, and {props.age} years old! </div>
}

// デフォルトプロップス
User.defaultProps = {
  name: "NoName", age: 99
}

// 型チェック（プロップタイプス）
// isRequired: 必須の値として扱う
User.propTypes = {
  name: PropTypes.string.isRequired, age: PropTypes.number.isRequired
}

export default App;
