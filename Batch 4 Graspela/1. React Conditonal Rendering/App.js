class Application extends React.Component {
    constructor(props) {
      super(props);
      this.state = {
        button_one: false,
        button_two: false,
        button_three: false
      }
      this.handleClick = this.handleClick.bind(this);
    }
    
    handleClick(e) {
  
        if (e.target.id === "button_one") {
          this.setState({button_one: true})
          this.setState({button_two: false})
          this.setState({button_three: false})
        }
        if (e.target.id === "button_two") {
          this.setState({button_one: false})
          this.setState({button_two: true})
          this.setState({button_three: false})
        }
        if (e.target.id === "button_three") {
          this.setState({button_one: false})
          this.setState({button_two: false})
          this.setState({button_three: true})
        }
      }
  
    
    
     render() {
       return(
         <div id="react-application">
           <div className="controls">
             <button id="button_one" onClick={this.handleClick}>Render Div One</button>
             <button id="button_two" onClick={this.handleClick}>Render Div Two</button>
             <button id="button_three" onClick={this.handleClick}>Render Div Three</button>
           </div>
           <div className="conditional-render-section">
           {
            this.state.button_one 
               ? 
            (<div id="div-one">
                <div className="img-wrapper">
                  <img src="https://images.unsplash.com/photo-1532911557891-d12f6b98dddc?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=crop&w=711&q=80" /> 
                </div>
                <p>credit: unsplash.com - Thank you @dannyeve</p>
              </div>) 
               :
            (<div></div>)
           }
           {
            this.state.button_two
               ? 
            (<div id="div-two">
              <div className="img-wrapper">
                <img src="https://images.unsplash.com/photo-1512971577074-a39f29b54a6e?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=crop&w=634&q=80" />
              </div>
                <p>credit: unsplash.com - Thank you @wenniz</p>
              </div>) 
               :
            (<div></div>)
           }
           {
            this.state.button_three 
               ? 
            (<div id="div-three">
              <div className="img-wrapper">
                <img src="https://images.unsplash.com/photo-1461924214738-0648d0b9e4f5?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=crop&w=1050&q=80" />
              </div>
                <p>credit: unsplash.com - Thank you @mrrrk_smith </p>
              </div>) 
               :
            (<div></div>)
           }
           </div>
         </div>
       )
     }
  }
  
  React.render(<Application />,
  document.getElementById('app'));