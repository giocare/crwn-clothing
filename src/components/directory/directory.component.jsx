import React from 'react';
import { render } from '@testing-library/react';
import MenuItem from '../menu-item/menu-item.component';
import { connect } from 'react-redux'
import { createStructuredSelector } from 'reselect'
import { selectDirectorySections } from "../../redux/directory/directory.selectors"
import './directory.styles.scss'
// needs to be a class because we need a state

const Directory = ({ sections }) => (
  <div className='directory-menu'>
    {sections.map(({id, ...otherSectionProps }) => (
      <MenuItem key={id} {...otherSectionProps} />
      ))}
  </div>
)

const mapStateToProps = createStructuredSelector({
  sections: selectDirectorySections
})

export default connect(mapStateToProps)(Directory)