import React from 'react'
import { Redirect } from 'react-router-dom'

export default class Index extends React.Component<any, any> {
  render() {
    return <Redirect from="/" to="/admin" />
  }
}
