import React from "react";

class Comp extends React.Component{
    render(){
        return(
            <div className="box">
                <div className="leftComponent">
                    <h1 className="boxtitle">{this.props.text1}</h1>
                    <p className="classtext">{this.props.text2}<br/> <span>{this.props.text3}</span></p>
                </div>
                <div className="rightComponent">
                    <img src={this.props.image} alt="images" className="product"/>
                </div>
            </div>
        )
    }
}

export default Comp