import React from "react"
import './home.css'
class Home extends React.Component{
    render(){
        return(
            <div className="home">
                <div className="nav">
                    <h2 className="logo">NETFLIX</h2>
                    <div className="but">
                        <button className="eng hello">English</button>
                        <button className="hello sign"> Sign In</button>
                    </div>
                </div>
                <div className="body">
                   <div className="container">
                   <h1 className="title">
                        Unlimited movies, TV shows and more
                    </h1>
                    <p className="text">Watch anyWhere.Cancel anytime</p>
                    <p className="text">Ready to watch? Enter your email to create or restart your menbership</p>
                    <div className="inp">
                        <input type="text" className="inpt" placeholder="Email address"/>
                        <button className="sub">Get Started</button>
                    </div>
                   </div>
                </div>
            </div>
        )
    }
}

export default Home