import React, { Component } from 'react'

import Notifications from './Notifications';
import ProjectList from '../projects/ProjectList';
// import rootReducer from '../../store/reducers/rootReducer'

import { connect } from 'react-redux'
import { compose } from 'redux'
import { firestoreConnect } from 'react-redux-firebase';

class Dashboard extends Component {
  render() {
    // console.log('this.props', this.props);
    // establish project object
    const { projects } = this.props;
    return (
      <div className='dashboard container'>
        <div className='row'>

          <div className='col s12 m6'>
            <ProjectList projects={projects} />
          </div>

          <div className='col s12 m5 offset-m1'>
            <Notifications />
          </div>

        </div>
      </div>
    )
  }
}

const mapStateToProps = (state) => {
  // console.log('state', state)
  return {
    projects: state.firestore.ordered.projects
  }
}

export default compose(
  connect(mapStateToProps),
  firestoreConnect([
    { collection: 'projects' }
  ])
)(Dashboard)

