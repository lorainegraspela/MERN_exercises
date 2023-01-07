const useNameFormState = () => {
    const init = {
      name: '',
      surname: ''
    }
    const [values, setValues] = React.useState(init)
    // ... you can subscribe here
    return [values, setValues]
  }
  
  const NameForm = (props) => {
    const [values, setValues] = useNameFormState();
  
    const handleChange = (event) => {
      setValues({...values, [event.target.name]: event.target.value});
    }
  
    const handleSubmit = (event) => {
      alert('form submited: ' + JSON.stringify(values));
      event.preventDefault();
    }
    
    return (
      <form onSubmit={handleSubmit}>
        <label>Name: <input type="text" value={values.name} name="name" onChange={handleChange} /></label><br />
        <label>Surname: <input type="text" value={values.surname} name="surname" onChange={handleChange} /></label>
        <input type="submit" value="Submit" />
      </form>
    );
  }
  
  ReactDOM.render(
    <NameForm />,
    document.getElementById('root')
  );