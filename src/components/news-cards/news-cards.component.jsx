import React from 'react'
import { NewsCardsContainer, NewsCard, NewsCardTypeText, NewsCardText, NewCardInfoBox } from './news-cards.styles'
import Image from '../image/image.component'



const NewsCards = ({ $items}) => {

      return (
            <NewsCardsContainer>
                  
                  {

                        $items.map((el, idx) => {
                              let color
                              switch(el.type) {
                              case 'How To Guides': 
                                    color = 'rgb(51,194,146)';
                                    break;
                              case 'Car Maintenance': 
                                    color = 'rgb(72,214,224)'; 
                                    break;
                              case 'Motor Industry News': 
                                    color = 'rgb(100,100,255)'; 
                                    break;
                              default:
                                    color = 'white'
                                    break; 
                              }
                              return (

                              <NewsCard key={idx} $color={color}>
                                    <Image
                                          $image={el.image}
                                          $preLoadImage={el.preLoadImage}
                                          $alt='generic image'
                                    />
                                    <NewCardInfoBox $color={color}>
                                    <NewsCardTypeText $color={color}>{el.type}</NewsCardTypeText>
                                    <NewsCardText>{el.title}</NewsCardText>
                                    </NewCardInfoBox>
                              </NewsCard>

                              )
                        })
                  
                  }
            </NewsCardsContainer>
      )
}

export default NewsCards
