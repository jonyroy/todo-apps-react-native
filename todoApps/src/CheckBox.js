
//CheckBox
import React, { Component } from 'react';
import Icon from  'react-native-vector-icons/MaterialIcons';

class CheckBox extends Component {
  constructor(props) {
    super(props);
    this.state = { data: this.props.data };
  }

  render() {
    let iconName = this.state.data.completed ? 'check-box' : 'check-box-outline-blank';
    let color = this.props.color || '#000';
    return (
      <Icon.Button
        data={this.state.data}
        name={iconName}
        backgroundColor='rgba(0,0,0,0)'
        underlayColor='rgba(0,0,0,0)'
        color={color}
        size={30}
        onPress={this.props.onCheckBoxPressed}
      >
      </Icon.Button>
    );
  }
}

module.exports = CheckBox;
