import React, { Component } from 'react'
import Rank from './Rank'
import SongList from './SongList'
import { Link, Route } from 'react-router-dom'
import NotFound from './NotFound'

export default class My extends Component {
  render() {
    return (
      <div>
        <h3>我的</h3>
        <Rank/>
        <SongList/>
        <ul>
          <li>
            <Link to='/my/rank'>排行榜</Link>
          </li>
          <li>
            <Link to='/my/songlist'>歌单</Link>
          </li>
        </ul>
        <Route component={Rank} path='/my/rank'></Route>
        <Route component={SongList} path='/my/songlist'></Route>
        <Route component={NotFound}/>
      </div>
    )
  }
}
