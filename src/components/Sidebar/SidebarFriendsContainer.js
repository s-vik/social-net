import { connect } from 'react-redux';
import SidebarFriends from './SidebarFriends';

let mapStateToProps = (state) => {
  return {
    friends: state.sidebarFriends.friends
  }
} 
let mapDispatchToProps = (dispatch) => {
  return {

  }
} 
const SidebarFriendsContainer = connect(mapStateToProps,mapDispatchToProps)(SidebarFriends);


export default SidebarFriendsContainer;