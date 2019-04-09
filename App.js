import React from 'react';
import { Home } from './app/view/Home';
import { Contact } from './app/view/Contact';
import { StackNavigator } from 'react-navigation';
import { Video } from './app/view/Video';
import { VideoDetail } from './app/view/VideoDetail';
import { Register } from './app/view/Register';
import { Login } from './app/view/Login';


export default class App extends React.Component {
  render() {
    return (
      <MyRoutes />
    );
  }
}

const MyRoutes = StackNavigator({
  HomeRT: {
    screen: Home
  },
  ContactRT: {
    screen: Contact
  },
  VideoRT: {
    screen: Video
  },
  VideoDetailRT: {
    screen: VideoDetail
  },
  RegisterRT: {
    screen: Register
  },
  LoginRT: {
    screen: Login
  }
}, 
{initialRouteName: 'HomeRT'});


