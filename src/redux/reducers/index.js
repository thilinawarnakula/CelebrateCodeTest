import {combineReducers} from 'redux';
import UpcomingLaunchesReducer from './upcomingLaunchesReducer';
import CompletedLaunchesReducer from './completedLaunchesReducer';

export default combineReducers({
  upcomingLaunches: UpcomingLaunchesReducer,
  completedLaunches: CompletedLaunchesReducer,
});
