import React, { PureComponent } from 'react';
import { TouchableOpacity, Text, View, } from 'react-native';

import { NavigationActions } from 'react-navigation';
import { connect } from 'react-redux';

//import async action constants
import { GET_SINGLE_POST } from '../../../constants/'

//import selector for computing data
import { getPostSelector } from '../../../selectors/'


class PutQuestion extends PureComponent {

  componentDidMount() {
    // const { navigation, dispatch } = this.props;
    // const { token, id } = navigation.state.params;

    // dispatch({ type: GET_SINGLE_POST, payload: { token, id }});
  }

  render() {
    return (
      <Text>hhhh</Text>
    )
  }
}

export default connect(
  state => getPostSelector(state),
)(PutQuestion);