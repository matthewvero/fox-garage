import React                  from 'react'
import { DropdownMenuBox }    from './dropdown-menu.styles'
import { connect }            from 'react-redux'
import { setActiveMenu, setMobileMenuHeight } from '../../redux/header/header.actions'

class DropdownMenu extends React.Component {
      componentWillUnmount() {
            this.props.setActiveMobileMenu('main')
            this.props.resetMobileMenuheight()
      }
      render() {
            return (
                  <DropdownMenuBox height={this.props.menuHeight}>
                        {this.props.children}
                  </DropdownMenuBox>
            )
      }

      
}


const mapState = (state) => ({
      menuHeight: state.header.mobileMenuHeight
})

const mapDispatch = (dispatch) => ({
      setActiveMobileMenu: menu => dispatch(setActiveMenu(menu)),
      resetMobileMenuheight: height => dispatch(setMobileMenuHeight(250))
})

export default connect(mapState, mapDispatch)(DropdownMenu)
