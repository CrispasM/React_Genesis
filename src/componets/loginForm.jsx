import React, { Component } from 'react';
import Input from './common/input';

class LoginForm extends Component {

    state ={
        account: {username: "",password: ""},
        errors: {}
    };
   //username = React.createRef();

   validate =() => {
    const errors = {}
    const {account} = this.state;

    if(account.username.trim() === '')
      errors.username = 'Username is required.';

    if(account.password.trim() === '')
       errors.password = 'Password is required.'

    return Object.keys(errors).length === 0? null: errors;
   };

   handleSubmit = e =>{
    e.preventDefault();

    const errors = this.validate();
    console.log(errors)
    this.setState({ errors });
    if(errors) return;
    console.log('Submitted');
}




handleChange = ({currentTarget: input}) =>{
    const account = {...this.state.account};
    account[input.name] = input.value;
    this.setState({account});
}

    render() { 
        const { account } = this.state;
        
        return <div>
            <h1>Login</h1>
            <form onSubmit={this.handleSubmit}>
             <Input  
             value={account.username}
             onChange={this.handleChange}
             id="username"
             name="username"
             type="text"
             className="form-control"
             label="Username" 
              />

           <Input 
             value={account.password}
             onChange={this.handleChange}
             name="password" 
             id="password" 
             type="text"
             className="form-control"
             label="Password" 
             
              />
                    <button className='btn btn-primary'>Login</button>
            </form>
        </div> 
    }
}
 



///