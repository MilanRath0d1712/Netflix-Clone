import React from "react";


const Login = (props) => {

    const {
          email,
          setEmail,
          password,
          setPassword,
          handleLogin,
          handleSignUp,
          hasAccount,
          setHasAccount,
          emailError,
          passwordError
        } = props;

    return(
       

        <div className="bg-img">
           <form>
              <section className="login">
                  <div className="loginContainer">
                      <h2>Sign In</h2>
                      {/* <label>Email : </label> */}
                        <input
                        type="text"
                        placeholder="Email"
                        autoFocus
                        required
                        value={email}
                        onChange={(e) => setEmail(e.target.value)}
                        />
                  <p className="errorMsg">{emailError}</p>
                    
                      <input type="password" placeholder="Password" required value={password} onChange={(e) => setPassword(e.target.value)}
                      />
                     <p className="ErrorMsg">{passwordError}</p>
                         <div className="btnContainer">
                            {hasAccount ?(
                         <>
                          <button id="btnOne" onClick={handleLogin}>Sign In</button>
                          <p id="pOne">
                             New to Netflix ? <span id="spanOne" onClick={() => setHasAccount(!hasAccount)}>Sign up now</span>
                          </p>

                         </>
                           ) : (
                          <>
                          <button id="btnTwo" onClick={handleSignUp}>Sign up</button>
                          <p id="pTwo">
                                Have an Account ? <span id="spanTwo" onClick={() => setHasAccount(!hasAccount)}>Sign In</span>
                          </p>
                        
                          </>

                         )}

                        </div>
                    </div>

                </section>
            </form>
        </div>
    )
}

export default Login;