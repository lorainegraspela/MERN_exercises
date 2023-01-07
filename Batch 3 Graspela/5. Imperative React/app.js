const App = () => {
    const [state, setState] = React.useState({
      fullName: "",
      emailAddress: "",
      password: "",
      editor: "",
      message: "",
      terms: false,
      test: ""
    });
  
    const handleChange = (event) => {
      const target = event.target;
      const value = target.type === "checkbox" ? target.checked : target.value;
      const name = target.name;
  
      setState((state) => ({
        ...state,
        [name]: value
      }));
    };
  
    const handleSubmit = (event) => {
      event.preventDefault();
      console.log(state);
    };
  
    return (
      <div className="App">
        <header>
          <div className="container">
            <nav className="navbar">
              <div className="navbar-brand">
                <span className="navbar-item">Forms in React</span>
              </div>
            </nav>
          </div>
        </header>
        <div className="container">
          <div className="columns">
            <div className="column is-9">
              <form className="form" onSubmit={handleSubmit}>
                <div className="field">
                  <label className="label">Name</label>
                  <div className="control">
                    <input
                      className="input"
                      type="text"
                      name="fullName"
                      value={state.fullName}
                      onChange={handleChange}
                    />
                  </div>
                </div>
  
                <div className="field">
                  <label className="label">Email Address</label>
                  <div className="control">
                    <input
                      className="input"
                      type="email"
                      name="emailAddress"
                      value={state.emailAddress}
                      onChange={handleChange}
                    />
                  </div>
                </div>
  
                <div className="field">
                  <label className="label">Password</label>
                  <div className="control">
                    <input
                      className="input"
                      type="password"
                      name="password"
                      value={state.password}
                      onChange={handleChange}
                    />
                  </div>
                </div>
  
                <div className="field">
                  <label className="label">Pick your editor</label>
                  <div className="control">
                    <div className="select">
                      <select
                        value={state.editor}
                        name="editor"
                        onChange={handleChange}
                      >
                        <option value="vscode">VSCode</option>
                        <option value="vim">Vim</option>
                      </select>
                    </div>
                  </div>
                </div>
  
                <div className="field">
                  <label className="label">What do you like about React</label>
                  <div className="control">
                    <textarea
                      className="textarea"
                      name="message"
                      value={state.message}
                      onChange={handleChange}
                    />
                  </div>
                </div>
  
                <div className="field">
                  <div className="control">
                    <label className="checkbox">
                      <input
                        name="terms"
                        type="checkbox"
                        checked={state.terms}
                        onChange={handleChange}
                      />
                      I agree to the{" "}
                      <a href="https://google.com">terms and conditions</a>
                    </label>
                  </div>
                </div>
  
                <div className="field">
                  <div className="control">
                    <label className="label">Do you test your React code?</label>
                    <br />
                    <label className="radio">
                      <input
                        type="radio"
                        name="test"
                        onChange={handleChange}
                        value="Yes"
                        checked={state.test === "Yes"}
                      />
                      Yes
                    </label>
                    <label className="radio">
                      <input
                        type="radio"
                        name="test"
                        onChange={handleChange}
                        value="No"
                        checked={state.test === "No"}
                      />
                      No
                    </label>
                  </div>
                </div>
  
                <div className="field">
                  <div className="control">
                    <input
                      type="submit"
                      value="Submit"
                      className="button is-primary"
                    />
                  </div>
                </div>
              </form>
            </div>
            <div className="column is-3">
              <pre>
                <code>
                  <p>Full Name: {state.fullName}</p>
                  <p>Email Address: {state.emailAddress}</p>
                  <p>Password: {state.password}</p>
                  <p>Choice in Editor: {state.editor}</p>
                  <p>Why React: {state.message}</p>
                  <p>Terms and Condition: {state.terms}</p>
                  <p>Do you test?: {state.test}</p>
                </code>
              </pre>
            </div>
          </div>
        </div>
      </div>
    );
  };
  
  ReactDOM.render(<App />, document.getElementById("root"));
  