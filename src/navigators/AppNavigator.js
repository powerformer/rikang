import React, { PropTypes } from 'react';
import { connect } from 'react-redux';
import { Platform } from 'react-native';
import { addNavigationHelpers, StackNavigator, TabNavigator } from 'react-navigation';

//user section screen
import LoginScreen from '../components/LoginScreen';
import Register from '../components/Register';

//home section screen
import TabBarNavigation from './TabBarNavigation';

import ProfileScreen from '../components/ProfileScreen';
import Practice from '../components/practice';

//register and login logic navigator
export const UserNavigator = StackNavigator({
    Login: { screen: LoginScreen },
    Register: { screen: Register },
  },
  {
    navigationOptions: {
      gesturesEnabled: false,
      header: null,
    }
  }
);

// export const MainNavigator = TabNavigator({

// })

export const AppNavigator = StackNavigator({
    TabBarNavigation: { screen: TabBarNavigation },
    UserNavigator: { screen: UserNavigator },
    Profile: { screen: ProfileScreen },
  },
  {
    navigationOptions: {
      headerLeft: null,
      headerStyle: Platform.OS === 'ios' ? { height: 90 } : { height: 88 },
    },
    initialRouteName: 'TabBarNavigation',
  },
);

const AppWithNavigationState = ({ dispatch, nav }) => (
  <AppNavigator navigation={addNavigationHelpers({ dispatch, state: nav })} />
);

AppWithNavigationState.propTypes = {
  dispatch: PropTypes.func.isRequired,
  nav: PropTypes.object.isRequired,
};

const mapStateToProps = state => ({
  nav: state.get('nav')
});

export default connect(mapStateToProps)(AppWithNavigationState);
