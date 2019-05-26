import { NavigationActions } from 'react-navigation'

let _navigator
function navigate(routeName) {
    _navigator.dispatch(
      NavigationActions.navigate({
        routeName,
        
      })
    );
}

// add other navigation functions that you need and export them

export default {
  navigate,
};