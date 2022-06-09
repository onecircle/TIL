import React from "react"
import PropTypes from "prop-types"

class Input extends React.Component {
  constructor(props) {
    super(props)
    this.state = {
      input: "",
    }

    this.inputChange = this.inputChange.bind(this)
    this.add = this.add.bind(this)
  }

  render() {
    return (
      <div>
        <input value={this.state.input} onChange={this.inputChange} />
        <button onClick={this.add}>提交</button>
      </div>
    )
  }

  inputChange(e) {
    this.setState({
      input: e.target.value,
    })
  }

  add() {
    // 要么把当前的值传出去
    // 要么拿到父组件的添加方法调用
    const { submitFn } = this.props
    submitFn(this.state.input)

    // 清空
    this.setState({
      input: "",
    })
  }
}

class List extends React.Component {
  constructor(props) {
    super(props)
  }

  render() {
    // console.log(this.props)
    // 子组件接收值
    const { list } = this.props

    return (
      <ul>
        {list.map((item, index) => {
          return <li key={item.id}>{item.desc}</li>
        })}
      </ul>
    )
  }
}

// 类型检查
List.propTypes = {
  list: PropTypes.arrayOf(PropTypes.object).isRequired,
}

// props
// 传递数据
// 传递函数
// 类型检查
class PorpsDemo extends React.Component {
  constructor(props) {
    super(props)
    this.state = {
      // 状态提升：状态就是数据
      list: [
        { desc: "123", id: 1 },
        { desc: "1234", id: 2 },
        { desc: "1235", id: 3 },
        { desc: "1236", id: 4 },
      ],
    }

    this.submit = this.submit.bind(this)
  }

  render() {
    return (
      <div>
        {/* 传递函数 */}
        <Input submitFn={this.submit} />
        {/* 父组件传值 */}
        <List list={this.state.list} />
      </div>
    )
  }

  // 通过回调函数的参数拿到子组件中的值
  submit(inputVal) {
    this.setState({
      // concat 数组或值
      list: this.state.list.concat({
        desc: inputVal,
        id: Date.now(),
      }),
    })
  }
}

export default PorpsDemo
