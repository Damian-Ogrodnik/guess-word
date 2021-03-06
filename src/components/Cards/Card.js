import React from 'react';
import Img from 'react-image';

class Card extends React.Component {
    getStyle = (category) => {
        switch (category) {
                case 'Colors':
                    return(
                        {backgroundColor: this.props.source, width: "120px", minHeight:"120px" ,height: "auto", border: "5px solid black", borderRadius: "5%", boxShadow: "10px 10px 5px 0px rgba(0, 0, 0, 0.75)", margin: "10px" }
                    )
                case 'Animals':
                    return(
                        {height: "auto", margin: "10px", maxHeight: "200px"}
                    )               
                default:        
                }
    }

    getCard(){
        if (this.props.categoryType === 'Colors'){
            return (
                <div className ="ui grid center aligned">
                    <div style = {this.getStyle(this.props.categoryType)} onClick={ () => this.props.updateScore(this.props.word, this.props.categoryType) } >
                    </div>
                </div>
                )
        } else {
            return (
                <div className ="ui grid center aligned"  onClick={ () => this.props.updateScore(this.props.word, this.props.categoryType) }>
                    <Img 
                        alt={this.props.word}
                        className = {this.props.categoryType === "Flags" ? "ui small image" : "ui medium circular image"} 
                        style = {this.getStyle(this.props.categoryType)} 
                        src={this.props.source} 
                        loader={
                                <div className="ui grid">
                                    <div className="sixteen wide column center aligned">
                                        <div className="ui statistic center">
                                            <div className = "value"> 
                                                <div className="ui active inline loader"></div>
                                            </div>
                                        </div>
                                    </div>
                                </div>
                                } 
                    />
                </div>
            )
        }
    }

    render(){
        return (<div className ="eight wide column"> 
                {this.getCard()}
                </div>
        )
    };     
}

export default Card;