import React from "react"

class JSXBaseDemo extends React.Component {
  constructor(props) {
    super(props)
    this.state = {
      name: "123",
      imgUrl: "",
      flag: true,
    }
  }

  render() {
    return (
      <div>
        变量： <p>{this.state.name}</p>
        表达式： <p>{this.state.flag ? "yes" : "no"}</p>
        图片地址：
        <img src={this.state.imgUrl} />
        class: <div className="title"></div>
        style: <div style={{ color: "red" }}>123</div>
        原生html <div dangerouslySetInnerHTML={{ __html: "<i>123</i>" }}></div>
      </div>
    )
  }
}

export default JSXBaseDemo
