import React from "react";

function Author(props) {
  return (
    <img className="Avatar" src={props.user.avatarUrl} alt={props.user.name} />
  );
}

function UserInfo(props){
    return (
        <div className="UserInfo">
        <Author user={props.author} />
        <div className="UserInfo-name">{props.author.name}
        </div>
      </div>
    )
}
export default function ExtractingComponents(props) {
  return (
    <div className="Comment">
      <h1>Extracting Components</h1>
      <UserInfo user={props.author}/>
      <div className="Comment-text">text : {props.text}</div>
      <div className="Comment-date">date : {props.date}</div>
    </div>
  );
}
