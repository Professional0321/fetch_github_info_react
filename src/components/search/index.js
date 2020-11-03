import React, { useState, useEffect } from 'react'
import { useDispatch, useSelector } from 'react-redux'
import { useHistory } from 'react-router-dom'

import { searchUserName } from '../../actions/action'
import Header from '../header'
import './styles.css'

const Search = (props) => {
  const dispatch = useDispatch()
  const history = useHistory()
  const { loading, profileData } = useSelector((state) => state.search)
  const [searchKey, setSearchKey] = useState('')
  const [searchFlag, setSearchFlag] = useState(false)

  const handleChange = (e) => {
    setSearchKey(e.target.value)
  }
  const searchProfile = () => {
    dispatch(searchUserName(searchKey))
  }
  useEffect(() => {
    if (profileData && profileData.length > 0) {
      history.push('/result')
    } else {
      setSearchFlag(true)
    }
    // eslint-disable-next-line
  }, [profileData])
  useEffect(() => {
    if (searchKey !== '') dispatch(searchUserName(searchKey))
    setSearchFlag(false)
    // eslint-disable-next-line
  }, [])
  return (
    <div className="App">
      <Header title="search" />
      <div className="main container">
        <div className="row">
          <div className="col-md-8">
            <input
              className="form-control"
              type="text"
              value={searchKey}
              placeholder="Input Github Username"
              onChange={handleChange}
              name="search"
            />
          </div>
          <div className="col-md-4">
            <button className="btn btn-primary search-btn" onClick={searchProfile}>
              Search
            </button>
          </div>
        </div>
        <div className="row mt-5">
          <div className="col-md-12 text-center">
            {loading ? (
              <div className="lds-roller">
                <div></div>
                <div></div>
                <div></div>
                <div></div>
                <div></div>
                <div></div>
                <div></div>
                <div></div>
              </div>
            ) : (
              searchFlag && <span className="no-data">There is no profile</span>
            )}
          </div>
        </div>
      </div>
    </div>
  )
}

export default Search
