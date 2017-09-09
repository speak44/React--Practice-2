import React, { Component } from 'react';
import './css/coment.css';
import './css/header.css';

class Header extends Component{
  constructor(){
    super()
    this.state={
        checkcont:{display:'none'},
        //性别内容修改
        onOff:'true',
        sev:'男',
        name:'',
        age:''

    }
  }
  //添加按钮点击事件
  click=()=>{
    if(this.state.age!=''&&this.state.name!=''){
      let json = {
        dsev:this.state.sev,
        age:this.state.age,
        name:this.state.name,
        checked:false,
        id: +new Date()
      }
      this.props.changedata(json)
      this.setState({
        name:'',
        age:''
      })
    }else{
      alert('请输入正确内容')
    }
  }
  //下拉框选中内容事件
  check=()=>{
    if(this.state.onOff){
      this.setState({
          checkcont:{display:'block'},
          onOff:'false'
      })
    }else{
      this.setState({
          checkcont:{display:'none'},
          onOff:'true'
      })
    }
  }
  //性别选择
  spanchange=(event)=>{
    this.setState({
        checkcont:{display:'none'},
        onOff:'true',
        sev:event.target.innerHTML
    })
  }
  //姓名内容输入时
  changename=(event)=>{
      this.setState({
        name:event.target.value
      })
  }
  //年龄内容输入时
changeage=(event)=>{
      this.setState({
        age:event.target.value
      })
}

  render(){
    return(
      <div className="compile">
      <div className="name">
        <span>姓名</span>
        <input type="text"
          value={this.state.name}
          placeholder="请输入姓名"
          className="inna"
          onChange={this.changename.bind(this)}
        />
      </div>
      <div className="age">
        <span>年龄</span>
        <input type="text"
          className="inna"
          placeholder="请输入年龄"
          value={this.state.age}
          onChange={this.changeage.bind(this)}
        />
      </div>
      <div className="gender">
        <span>性别</span>
        <ul>
          <li className="check-box"
            onClick={this.check}>
            <span>{this.state.sev}</span>
            <span>▼</span>
          </li>
          <li className="check" style={this.state.checkcont}>
            <span
              onClick={this.spanchange.bind(this)}
            >
              男
            </span>
            <span
              onClick={this.spanchange.bind(this)}
            >
              女
            </span>
            <span
              onClick={this.spanchange.bind(this)}
              >
                保密
              </span>
          </li>
        </ul>
      </div>
      <a className="add"
        href='javascript:;'
        type="button"
        onClick={this.click}
      >添加</a>
    </div>
    )
  }
}
export default Header;
