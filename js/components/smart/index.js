
import React, { Component } from 'react';
import { connect } from 'react-redux';
import { View } from 'react-native';
import { Container, Icon, IconNB, Text } from 'native-base';
import { Header, Button, Tabs, TabContent } from 'native-base/ui';
import { openDrawer } from '../../actions/drawer';
import myTheme from '../../themes/base-theme';
import styles from './styles';

class Smart extends Component {

  static propTypes = {
    openDrawer: React.PropTypes.func,
  }

  render() {
    return (
      <Container theme={myTheme} style={styles.container}>

        <Header leftButton={<Icon name="menu" />} leftButtonPress={this.props.openDrawer} title="Smart Haeder" rightButton={<Icon name="apps" />} rightButtonPress={this.props.openDrawer} style={{}} leftButtonStyle={{}} titleStyle={{}} rightButtonStyle={{}} />


        <View style={{ backgroundColor: '#FBFAFA', flex: 1 }}>
          <Tabs initialPage={1} tabBarPosition="top" vertical tabBarTextStyle={{}} tabBarIconStyle={{}} tabBarStyle={{}} underlineStyle={{}}>

            <TabContent padder tabLabel="SmartTab1" tabIcon="ios-camera">
              <Text>Content 1</Text>
            </TabContent>

            <TabContent padder tabLabel="SmartTab2" tabIcon="ios-apps">
              <Text>Content 2</Text>
              <Button info bordered rounded style={{}} iconLeft={<Icon name="arrow-back" />} iconRight={<Icon name="arrow-forward" />} buttonText={'Smart button'} buttonTextStyle={{}} />
            </TabContent>

          </Tabs>


        </View>


      </Container>
    );
  }
}

function bindAction(dispatch) {
  return {
    openDrawer: () => dispatch(openDrawer()),
  };
}

const mapStateToProps = state => ({
  navigation: state.cardNavigation,
});

export default connect(mapStateToProps, bindAction)(Smart);
