import React from "react"

// 条件判断
class ConditionDemo extends React.Component {
  constructor(props) {
    super(props)
    this.state = {
      name: "",
    }

    this.inputChange = this.inputChange.bind(this)
  }

  render() {
    return (
      // 受控组件
      // 组件的值与我的state绑定的
      <div>
        <div>{this.state.name}</div>
        <label htmlFor="inputname">姓名：</label>
        {/* 需要自己实现onChange 改变name值 实现双向绑定 */}
        <input
          id="inputname"
          value={this.state.name}
          onChange={this.inputChange}
        />

        {/* textarea 必须用value 不可以双标签 */}
        <textarea value={this.state.name} onChange={this.inputChange} />
      </div>
    )
  }

  inputChange(event) {
    console.log(event.target.value)
    this.setState({
      name: event.target.value,
    })
  }
}

export default ConditionDemo
