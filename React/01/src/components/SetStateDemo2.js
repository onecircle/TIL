import React from "react"

// 可能会被合并
class SetStateDemo extends React.Component {
  constructor(props) {
    super(props)
    this.state = {
      arr: [],
      count: 1,
    }

    this.handleClick = this.handleClick.bind(this)
  }

  render() {
    return <span onClick={this.handleClick}>change</span>
  }

  handleClick() {
    // 对象 被合并
    // 会等到某一时刻 一起更新
    // this.setState({
    //   count: this.state.count + 1,
    // })
    // this.setState({
    //   count: this.state.count + 1,
    // })
    // this.setState({
    //   count: this.state.count + 1,
    // })
    // console.log(this.state.count)

    // 会执行3次 函数无法合并
    this.setState((prevState, props) => {
      return {
        count: prevState.count + 1,
      }
    })
    this.setState((prevState, props) => {
      return {
        count: prevState.count + 1,
      }
    })
    this.setState((prevState, props) => {
      return {
        count: prevState.count + 1,
      }
    })
    // 还是异步打印
    console.log(this.state.count)
  }
}

export default SetStateDemo
