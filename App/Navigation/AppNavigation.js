import { StackNavigator } from 'react-navigation'
import TabScreen from '../Containers/TabScreen'

import styles from './Styles/NavigationStyles'

// Manifest of possible screens
const PrimaryNav = StackNavigator({
  TabScreen: { screen: TabScreen }
}, {
  // Default config for all screens
  headerMode: 'none',
  initialRouteName: 'TabScreen',
  navigationOptions: {
    headerStyle: styles.header
  }
})

export default PrimaryNav
