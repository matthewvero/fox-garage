import React from 'react'
import { DropdownMenuSectionContainer } from './dropdown-menu-section.styles'
import { createRef } from 'react'
import { connect } from 'react-redux';

import { setMobileMenuHeight } from '../../redux/header/header.actions'

class DropdownMenuSection extends React.Component {
      constructor(props) {
            super(props)
            this.myRef = createRef();
      }
      

      calcHeight = (reference) => {
            return reference.firstChild.offsetHeight * reference.children.length
      }

      componentDidMount() {
            this.props.setHeight(this.calcHeight(this.myRef.current))
      }

      render() {
            return (

                  <DropdownMenuSectionContainer ref={this.myRef}>
                        {this.props.children}
                  </DropdownMenuSectionContainer>
            )
      }
}

const mapDispatch = (dispatch) => ({
      setHeight: height => dispatch(setMobileMenuHeight(height))
})

export default connect(null, mapDispatch)( DropdownMenuSection )
