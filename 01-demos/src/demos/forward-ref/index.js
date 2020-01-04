import React from 'react'

// 因为 function component 没有办法实例化，所以并不能直接获得 ref 属性
// 用 forwardRef 可以让 functional component 获得 ref 属性 
const TargetComponent = React.forwardRef((props, ref) => (
  <input type="text" ref={ref} />
))

export default class Comp extends React.Component {
  constructor() {
    super()
    this.ref = React.createRef()
  }

  componentDidMount() {
    this.ref.current.value = 'ref get input'
  }

  render() {
    return <TargetComponent ref={this.ref} />
  }
}
