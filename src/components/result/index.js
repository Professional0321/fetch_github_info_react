import React, { useEffect, useState } from 'react'
import { useSelector } from 'react-redux'
import Header from '../header'
import './styles.css'

const Result = (props) => {
  const [usersData, setUsersData] = useState([])
  const { profileData } = useSelector((state) => state.search)
  useEffect(() => {
    setUsersData(profileData)
  }, [profileData])
  return (
    <div className="App">
      <Header title="result" />
      <div className="main container">
        <div className="row">
          {usersData &&
            usersData.length > 0 &&
            usersData.map((profile, index) => (
              <div className="col-md-6 col-xs-12" key={index}>
                <div className="profile-tab">
                  <div className="col-sm-6">
                    <img src={profile.avatar_url} alt="avatar" />
                  </div>
                  <div className="col-sm-6 mt-2">
                    <div className="title">User Name</div>
                    <div className="name">{profile.login}</div>
                    <div className="title">Github Link</div>
                    <a href={profile.html_url} target="_blank" className="name" rel="noopener noreferrer">
                      {profile.html_url}
                    </a>
                  </div>
                </div>
              </div>
            ))}
        </div>
      </div>
    </div>
  )
}

export default Result
