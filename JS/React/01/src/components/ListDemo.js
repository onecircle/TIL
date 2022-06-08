import React from "react"

// 条件判断
class ListDemo extends React.Component {
  constructor(props) {
    super(props)
    this.state = {
      list: [1, 2, 3, 4],
    }
  }

  render() {
    // map
    return (
      <ul>
        {/* jsx 注释 */}
        {this.state.list.map((item, index) => {
          // key的作用
          return <li key={index}>{item + index}</li>
        })}
      </ul>
    )
  }
}

export default ListDemo
