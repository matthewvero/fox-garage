import React            from 'react'
import { WidgetBox }    from './widget-cluster.styles'


const WidgetCluster = ({children, ...otherprops}) => {
      return (
            <WidgetBox {...otherprops}>
                  {children}
            </WidgetBox>
      )
}

export default WidgetCluster
