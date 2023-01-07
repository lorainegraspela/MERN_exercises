function FragmentExample () {  
    return (
      <>
        <div>
          First div
        </div>
        <div>
          Second div
        </div>
        <div>
          Third div
        </div>
        <div>
          Fourth div
        </div>
      </>
    );  
  }
  
  ReactDOM.render(
    <FragmentExample/>,
    document.getElementById('container')
  );