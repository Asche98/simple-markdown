import React from 'react';

class HtmlGenerator extends React.Component{
  render(){
    return(
      <div dangerouslySetInnerHTML={{__html:this.props.text}}></div>
    )
  }
}

export default HtmlGenerator;
