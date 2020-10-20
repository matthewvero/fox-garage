import {combineReducers} from 'redux'
import headerReducer from './header/header.reducer'
import screenSizeReducer from './screen-size/screen-size.reducer'
import engineSelectorReducer from './engine-selector/engine-selector.reducer'
import { blogReducer } from './blogs/blog.reducer'


export default combineReducers ({
      header: headerReducer,
      screenSize: screenSizeReducer,
      engineSelector: engineSelectorReducer,
      blog: blogReducer
})