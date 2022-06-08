import React from "react"

// 不可变值
// 可能是异步更新
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
    // setState 不可变值
    // 函数式编程 纯函数
    // 但凡改变到原state中的操作，都不可以，只能通过setState
    // scu后面还会讲
    this.setState(
      {
        arr: this.state.arr.concat([1, 2, 3]),
        count: this.state.count + 1, // ++this.state.count  this.state.count++ 都是有问题的
      },
      () => {
        // 同步 后打印
        // 联想 vue $nextTick
        console.log("sync" + this.state.arr)
        console.log("sync" + this.state.count)
      }
    )
    // 不会立即拿到更新后的值 异步 先打印
    console.log(this.state.arr)
    console.log(this.state.count)

    setTimeout(() => {
      this.setState(
        {
          arr: this.state.arr.concat([1, 2, 3]),
          count: this.state.count + 1, // ++this.state.count  this.state.count++ 都是有问题的
        },
        () => {
          // 执行2次的感觉
          console.log("setTimeout sync" + this.state.arr)
          console.log("setTimeout sync" + this.state.count)
        }
      )
      // setTimeout中可以拿到更新后的值
      console.log("setTimeout async" + this.state.arr)
      console.log("setTimeout async" + this.state.count)
    }, 0)
  }

  // 自定义事件绑定中 同步
  handleBodyClick = () => {
    this.setState({
      count: this.state.count + 1,
    })
    // 为啥打印2次？
    // 卧槽 提出去就不会打印2次 为啥？
    console.log(this.state.count)
  }

  componentDidMount() {
    document.body.addEventListener("click", this.handleBodyClick)
  }

  componentWillUnmount() {
    // 及时销毁
    document.body.removeEventListener("click", this.handleBodyClick)
    // clearTimeout
  }
}

export default SetStateDemo
