import { Component } from "react";
export default function Demo(props) {
  const buy = () => {
    props.user.gender = "男";
    console.log(props);
  };

  return (
    <div>
      <h3>我是Demo组件</h3>
      <div>
        {props.money}-{props.user.gender}
      </div>
      <button onClick={buy}>子组件buy</button>
    </div>
  );
}
