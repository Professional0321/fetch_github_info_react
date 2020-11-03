import React from 'react'
import { useDispatch } from 'react-redux'
import { useHistory } from 'react-router-dom'
import * as CONSTS from '../../constant/const'
import './styles.css'

const Header = (props) => {
  const history = useHistory()
  const dispatch = useDispatch()

  const { title } = props
  const goProfile = () => {
    dispatch({ type: CONSTS.PROFILE_DATA, payload: [] })
    history.push('/')
  }
  return (
    <div className="header">
      <div className="blue-header">
        <div className="container content">
          {title === 'search' ? (
            <span className="logo">Search Github Profile</span>
          ) : (
            <div className="result-header">
              <i className="far fa-arrow-alt-circle-left back-btn" onClick={goProfile} />
              <span className="logo">Search Results</span>
            </div>
          )}
        </div>
      </div>
    </div>
  )
}

export default Header
