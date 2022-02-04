import {combineReducers} from 'redux';
import UpcomingLaunchesReducer from './upcomingLaunchesReducer';
import CompletedLaunchesReducer from './completedLaunchesReducer';
import FilterReducer from './filterReducer';

export default combineReducers({
  filters: FilterReducer,
  upcomingLaunches: UpcomingLaunchesReducer,
  completedLaunches: CompletedLaunchesReducer,
});
