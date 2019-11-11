import React from 'react';
import TransformedText from './TransformedText';

class UserForm extends React.Component{
  constructor(props) {
   super(props);
   this.state = {text: ''};
   this.handleChange = this.handleChange.bind(this);
 }

  handleChange(event) {
    this.setState({text: event.target.value});
  }
  render(){
    return(
      <div className="row">
      <div className="col-md-6">
      <div class="form-group">
  <label for="comment">Введите текст:</label>
  <textarea class="form-control user-text" id="comment" onChange={this.handleChange}></textarea>
</div>
</div>
<div className="col-md-6"><TransformedText text={this.state.text}/></div>
</div>
    )
  }


}

export default UserForm;
