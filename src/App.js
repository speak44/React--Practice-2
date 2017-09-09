import React, { Component } from 'react';
import './App.css';
import Header from './components/Header';
import Content from './components/Content'
class App extends Component {
  constructor(){
    super()
    this.state={
        data:[
        // {name:'小明',checked:false,id:1,age:20,dsev:'男'},
      ],
      num:0
    }
  }
  //改变数据内容
  changedata=(newdata)=>{
    let {data}=this.state;
    let data2=Object.assign(data);
    data2.unshift(newdata)
    this.setState({
      data:data2,
      num:data.length
    })
  }
  //删除节点
  dele=(id)=>{
    let {data}=this.state;
    let data2=null;
    console.log(id)
    data2=data.filter((e,i) => {
      return e.id!=id
    })
    this.setState({
      data:data2
    })
  }
  //改变选中
  chanch = (id) => {
     let {data} = this.state;
     let data2 = Object.assign(data);
     data2.forEach(e=>{
       if(e.id === id){
         e.checked = !e.checked
       }
     });
     this.setState({
       data:data2
     })
   }
   //全选按钮
   allchange=(ev)=>{
     let {data}=this.state;
     let data2=Object.assign(data);
     let {checked}=ev.target;
     data2.forEach((e)=>{
      e.checked=checked
     })
     this.setState({
       data:data2
     })
   }
  render() {
    let {data}=this.state;
    let data2=Object.assign(data);
    let list=null;
    list=data2.map((e,i)=>{
      let data={
        name:e.name,
        checked:e.checked,
        age:e.age,
        dsev:e.dsev,
        dele:this.dele,
        id:e.id,
        num:i+1,
        chanch:this.chanch
      }
      return <Content{...data}/>
    })
    let arr={
      changedata:this.changedata
    }
    let all=null;
    if (data2.length) {
      all=data2.every((e)=>{
          return e.checked
      })
    }else{
      all=false;
    }
    return (
      <div className="App">
        <Header{...arr}/>
        <div className="foot">
    			<div className="info_box">
    				<span><input
              type="checkbox"
              className="libtn"
              checked={all}
              onChange={this.allchange}
            /></span>
    				<span>全选</span>
    				<span>ID</span>
    				<span>姓名</span>
    				<span>年龄</span>
    				<span>性别</span>
    				<span>操作</span>
    			</div>
          <div>
            {list}
          </div>
        </div>
      </div>
    );
  }
}

export default App;
if (module.hot) {
  module.hot.accept();
}
