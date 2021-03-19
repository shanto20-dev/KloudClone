import { combineReducers } from 'redux';
import sessionReducer from './sessions_reducer';
import entitiesReducer from './entities_reducer';
import errorsReducer from './errors_reducer'
import uiReducer from './ui_reducer'
import musicPlayerReducer from './music_player_reducer';

const rootReducer = combineReducers({
    entities: entitiesReducer,
    session: sessionReducer,
    errors: errorsReducer,
    ui: uiReducer,
    musicPlayer: musicPlayerReducer
});

export default rootReducer;
