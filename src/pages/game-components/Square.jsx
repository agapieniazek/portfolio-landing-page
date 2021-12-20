function Square(props) {
  return(
    <div class="square" { ...props}>{props.x ? "x" : (props.o ? "o" : "" )}</div>
  )
}
export default Square;