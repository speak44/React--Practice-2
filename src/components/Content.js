import React, { Component } from 'react';
import './css/coment.css';
import './css/content.css';

class Content extends Component{
  //向上移动
  onmove=(ev)=>{
    let parul=ev.target.parentNode;
    if(parul.previousElementSibling){
      parul.parentNode.insertBefore(parul,parul.previousElementSibling)
    }

  }
  //向下移动
  dowmove=(ev)=>{
    let parul=ev.target.parentNode;
    if(parul.nextElementSibling){
      parul.parentNode.insertBefore(parul.nextElementSibling,parul)
    }
  }
  //选中删除
  dele=()=>{
    this.props.dele(this.props.id)
  }
  //画√
  chanch=()=>{
    this.props.chanch(this.props.id)
  }
  render(){
    let {checked,txt,num,name,age,dsev}=this.props;
    return(
      <ul>
        <li><input
          type="checkbox"
          className="libtn"
          onChange={this.chanch}
          checked={checked}
        /></li>
        <li>{num}</li>
        <li>{name}</li>
        <li>{age}</li>
        <li>{dsev}</li>
        <li
          onClick={this.onmove}
          >↑</li>
        <li
          onClick={this.dowmove}
          >↓</li>
        <li
          onClick={this.dele}
          >删除</li>
      </ul>
    )
  }
}
export default Content;
