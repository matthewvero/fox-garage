import React from 'react'
import { BlogPostContainer, BlogPostImageContainer, BlogPostContentBox, BlogPostContentPlaceholder } from './blogpost.style'
import Image from '../image/image.component'

const BlogPost = ({$title, $image, $body, $placeholder}) => {
      return (
            <BlogPostContainer>
                  <BlogPostImageContainer>
                        {
                              $placeholder ? 
                              <BlogPostContentPlaceholder style={{height: '100%'}}/>
                              
                              :

                              <Image
                              $image={$image}
                              $imageSize='10%'
                              />
                        }
                  </BlogPostImageContainer>
                        <BlogPostContentBox>
                        {
                              $placeholder ? 
                              <React.Fragment>
                                    <BlogPostContentPlaceholder/>
                                    <BlogPostContentPlaceholder/>
                                    <BlogPostContentPlaceholder/>
                              </React.Fragment>
                              
                              :
                              <React.Fragment>
                                    <p>{$title}</p>
                                    <p>{$body}</p>
                              </React.Fragment>
                        }
                              
                        </BlogPostContentBox>
            </BlogPostContainer>
      )
}

export default BlogPost
