import React from 'react'

function Login() {
  return (
    <>
    <div>
     {/* <!-- Login --> */}
    <section id="login" >
        <div className="container" style={{paddingTop:'4rem'}}>
            <div className="row" >
                
                <div className="col-lg-6">
                    <img className="w-100" src="http://localhost:5173/public/img/class2.jpg" alt="College Students Image-1"
                        height="100%"/>
                </div>
                

                
                <div className="col-lg-6 bglogin p-4">
                    <center>
                    <form>
                       
                        
                       
                       <h1 className="mb-5 text-center">Ragister Now</h1>

                       
                       <div className="row mb-3">
                           <div className="col-lg-2 text-center bg-secondary rounded text-light fw-light my-auto p-2">Email</div>
                           <div className="col-lg-10">
                               <input className="form-control" type="email" placeholder="name@example.com" required></input>
                           </div>
                       </div>

                       
                       <div className="row mb-5">
                           <div className="col-lg-2 text-center bg-secondary rounded text-light fw-light my-auto p-2">Password</div>
                           <div className="col-lg-10">
                               <input className="form-control" type="password" required></input>
                           </div>
                       </div>

                       
                       <center>
                           <button > <a href='/' className="btn btn-primary  btn-lg">Sign In</a></button>
                       </center>
                       
                       
                       <center>
                           <p className="text-uppercase fw-light">Do not have an account? &nbsp;<a href="./register.html">Register Now</a></p>
                       </center>
                   </form>

                    </center>
                    
                </div>
                
            </div>
        </div>
    </section>
    {/* <!-- End Login --> */}
    
    </div>
    </>
  )
}

export default Login