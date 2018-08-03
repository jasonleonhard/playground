export default Voted = () => {
  if (this.state.tf == 0) {
    this.setState({counter: this.state.counter+1})
    this.setState({tf: this.state.tf+1})
  }
  if (this.state.tf == 1) {
    this.setState({counter: this.state.counter-1})
    this.setState({tf: this.state.tf-1})
  }
}
