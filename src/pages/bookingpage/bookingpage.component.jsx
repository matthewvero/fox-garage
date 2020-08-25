import React from 'react'

import Page from '../page/page.component'
import EngineSelector from '../../components/engine-selector/engine-selector.component'
import Services from '../../components/services/services.component'
import WidgetCluster from '../../components/info-widget/widget-cluster/widget-cluster.component'
import Widget from '../../components/info-widget/widget/widget.component'

import {servicesAndPrices} from '../../data/data'
const BookingPage = () => {
      return (
            <Page>
            
                  <EngineSelector></EngineSelector>
                  <WidgetCluster width='95vw'>
                        <Widget>
                              <Services data={servicesAndPrices.MOTTesting} tileColor='DODGERBLUE'/>
                        </Widget>
                        <Widget>
                              <Services data={servicesAndPrices.maintenance} tileColor='ORANGERED'/>
                        </Widget>
                        <Widget>
                              <Services data={servicesAndPrices.freeChecks} tileColor='LIGHTGREEN'/>
                        </Widget>
                  </WidgetCluster>
            </Page>
      )
}

export default BookingPage
