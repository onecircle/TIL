import React from "react"

// 事件
class EventDemo extends React.Component {
  constructor(props) {
    super(props)
    this.state = {
      name: "zs",
    }

    this.handleClick = this.handleClick.bind(this)
  }

  render() {
    // 1. bind 与 箭头函数
    // return <div onClick={this.handleClick}>{this.state.name}</div>
    // return <div onClick={this.handleClick1}>{this.state.name}</div>

    // 2. event
    return (
      // <a href="www.baidu.com" onClick={this.aClick}>
      //   不跳转
      // </a>

      // TODO 不bind aClick1 立即执行 除了bind还能怎么写
      <a href="www.baidu.com" onClick={this.aClick1.bind(this, 1, 2)}>
        不跳转
      </a>
    )
  }

  handleClick() {
    // console.log(this) // 如果不绑定this undefined
    this.setState({
      name: "ls",
    })
  }

  // 静态方法
  // 一定要使用箭头函数
  handleClick1 = () => {
    // console.log(this) // 指向当前组件
    this.setState({
      name: "ls",
    })
  }

  aClick = (event) => {
    // 阻止默认行为
    event.preventDefault()
    // 阻止冒泡
    event.stopPropagation()
    // SyntheticBaseEvent
    // 合成事件机制
    // target & currentTarget
    // currentTarget 给谁绑定
    // target 真正谁触发
    // https://www.cnblogs.com/guojiabing/p/12213332.html#:~:text=DOM%E4%BA%8B%E4%BB%B6%E4%B8%ADtarget%E5%92%8CcurrentTarget%E7%9A%84%E5%8C%BA%E5%88%AB.%20DOM%E4%BA%8B%E4%BB%B6%E4%B8%AD%20target%20%E5%92%8C%20currentTarget%20%E7%9A%84%E5%8C%BA%E5%88%AB.%20target%20%E6%98%AF%E4%BA%8B%E4%BB%B6%E8%A7%A6%E5%8F%91%E7%9A%84%E7%9C%9F%E5%AE%9E%E5%85%83%E7%B4%A0.,target%20%E4%B8%BA%E5%AD%90%E5%85%83%E7%B4%A0.%20%E5%BD%93%E4%BA%8B%E4%BB%B6%E6%98%AF%E5%85%83%E7%B4%A0%E8%87%AA%E8%BA%AB%E8%A7%A6%E5%8F%91%E6%97%B6%EF%BC%8C%20currentTarget%20%E5%92%8C%20target%20%E4%B8%BA%E5%90%8C%E4%B8%80%E4%B8%AA%E5%85%83%E7%B4%A0%E3%80%82.%20copy.
    console.log(event)
    console.log(event.target)
    console.log(event.currentTarget)
    console.log(event.nativeEvent.target)
    console.log(event.nativeEvent.currentTarget) // 绑定到root上，之前是document，后来改了，利于微前端，多个root可以共存
  }

  aClick1 = (arg1, arg2, event) => {
    // 阻止默认行为
    event.preventDefault()
    // 阻止冒泡
    event.stopPropagation()
    console.log(arg1)
    console.log(arg2)
    console.log(event)
  }
}

export default EventDemo
