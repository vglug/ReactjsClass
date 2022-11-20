import React from 'react';
import InputBox from './InputElement';
import "../../StyleSheet/Form.css"

function Form() {
  return (
    <form >
      <div class="container">
        
        {/* username Label */}
          <label for="uname"><b>Username</b></label>
        
        {/* Username InputBox Component added  */}
          <InputBox type="text" placeholder="Enter Username" name="uname"  />

          <label for="psw"><b>Password</b></label>
        {/* Password InputBox Component added */}
          <InputBox type="password" placeholder="Enter Password" name="psw" />
              
          <label for="email"><b>Email</b></label>
        {/* Email InputBox Component added */}
            <InputBox type="email" placeholder="Enter Email" name="email"  />
                
            <button type="submit">Login</button>
        </div>
    </form>
  )
}

export default Form