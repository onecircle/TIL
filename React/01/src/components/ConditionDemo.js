import React from "react"

// 条件判断
class ConditionDemo extends React.Component {
  constructor(props) {
    super(props)
    this.state = {
      theme: "black",
    }
  }

  render() {
    // 1. if
    // if (this.state.theme === "black") {
    //   return <div>黑色</div>
    // } else {
    //   return <div>白色</div>
    // }

    // 2. 三元
    // return this.state.theme === "black" ? <div>黑色</div> : <div>白色</div>

    // 3. && || 逻辑
    return this.state.theme === "black" && <div>黑色</div>
  }
}

export default ConditionDemo
