import React                  from 'react'
import { DropdownMenuBox }    from './dropdown-menu.styles'
import { connect }            from 'react-redux'

const DropdownMenu = ({menuHeight, children}) => (
      <DropdownMenuBox height={menuHeight}>
            {children}
      </DropdownMenuBox>
)


const mapState = (state) => ({
      menuHeight: state.header.mobileMenuHeight
})

export default connect(mapState)(DropdownMenu)
