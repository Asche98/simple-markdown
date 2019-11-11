import React from 'react';
import HtmlGenerator from './HtmlGenerator';
class TransformedText extends React.Component{
  changeText(text){
    text=text.replace(/\#([\s\S]*?)[\n]/g,'<h1>$1</h1>');
    text=text.replace(/\n/g, "<br>");
    text=text.replace(/\*\*([\s\S]*?)\*\*/g,'<b>$1</b>');
    text=text.replace(/\*([\s\S]*?)\*/g,'<i>$1</i>');
    return text;
  }
  render(){
    return(
      <div class="form-group">
  <label for="transformed">Magic:</label>
  <div className="form-control transformed-text" id="transformed"><HtmlGenerator text={this.changeText(this.props.text)}/></div>
</div>
    )
  }
}

export default TransformedText;
