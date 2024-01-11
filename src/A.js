import React from 'react'
import store from "./redux/store";
import { Provider } from "react-redux";
import B from './B'
import C from './C'

const A = () => {
  return (
    <Provider store={store}>
      <div className='m-20 justify-center'>
        <B />
        <C />
      </div>
    </Provider>
  )
}

export default A