import React from 'react'
import { DropDownButton, HamburgerLine } from './header-dropdown-button.styles'
import { HeaderNavComponent } from '../header-component/header.styles'

class HeaderDropDownButton extends React.Component {
      state = {
            open: false
      }

      render() {
            return (
                  <HeaderNavComponent>
                        <DropDownButton open={this.state.open} onClick={() => this.setState({open: !this.state.open})}>
                              <HamburgerLine />
                              <HamburgerLine />
                              <HamburgerLine />
                        </DropDownButton>
                  </HeaderNavComponent>
            )
      }
            
}

export default HeaderDropDownButton
