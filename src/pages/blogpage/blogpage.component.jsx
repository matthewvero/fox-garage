import React, { useEffect, useState } from 'react';
import Page from '../page/page.component';
import WidgetText from '../../components/info-widget/widget-text/widget-text.component';
import BlogPost from '../../components/blogpost/blogpost.component';
import { connect } from 'react-redux';
import {updateBlogPosts} from '../../redux/blogs/blog.actions';
import { db } from '../../firebase';

const BlogPage = ({blog, updateBlogPosts}) => {

      const [activeBlog, setActiveBlog] = useState('carmaintenance');
      const [loading, setLoading] = useState('true')
      
      useEffect(() => {

            const populateBlog = async () => {
                  if( !blog[activeBlog] ) {
                        const snapshot = await db.collection(activeBlog).get();
                        try {
                              const posts = snapshot.docs[0].data().posts;
                              updateBlogPosts({blog: activeBlog, posts});
                        }
                        catch (error) { 
                              console.log(error); 
                              return 
                        };
                        
                  } 
                  setLoading(false);
            }
            populateBlog();
     
// eslint-disable-next-line react-hooks/exhaustive-deps
      }, [activeBlog]);

      const handleClick = (newblog) => {
            !blog[newblog] && setLoading(true);
            setActiveBlog(newblog);
      }   

      return (
            <Page>
                  <div 
                        style={{
                              width: '90vw',
                              display: 'flex',
                              alignItems: 'start',
                              marginTop: '5vh',
                        }}
                  >
                  
                  <div 
                        style={{
                              flexDirection: 'column', 
                              display: 'flex',
                              width: '28vw',
                              height: '75vh',
                              backgroundColor:'#666666', 
                              justifySelf: 'start',
                              marginRight: '2vw',
                              boxShadow: '0 0 15px #222222',
                  
                        }
                  }>
                        <WidgetText
                              $color='dodgerblue'
                        >
                              Categories
                        </WidgetText>
                        <div 
                              onClick={() => handleClick('carmaintenance')}
                              style={{height: '5vh', cursor: 'pointer', color: 'white', margin: '2vh 0', marginTop: '4vh'}}
                        >
                              Car Maintenance
                        </div>
                        <div 
                              onClick={() => handleClick('motorindustrynews')}
                              style={{height: '5vh', cursor: 'pointer', color: 'white', margin: '2vh 0' }}
                        >
                              Motor Industry News
                        </div>
                        <div 
                              onClick={() => handleClick('howtoguides') }
                              style={{height: '5vh', cursor: 'pointer', color: 'white', margin: '2vh 0' }}
                        >
                              How To Guides
                        </div>
                  </div>
                  <div
                        style={{
                              display: 'flex',
                              flexDirection: "column",
                              height: '85vh',
                        }}
                  >
                  
                  <div
                        style={{
                              backgroundColor: '#666666',
                              width: '100%',
                              height: '15vh',
                              boxShadow: '0 0 15px #222222',
                              display: 'flex',
                              alignItems: 'center',
                              justifyContent: 'center', 
                              zIndex: '1'
                              
                        }}
                  >
                        <WidgetText
                              $color='white'
                        >
                              Car Maintenance
                        </WidgetText>
                  </div>

                  <div
                        style={{
                              flexDirection: 'column', 
                              display: 'flex',
                              width: '60vw',
                              height: '95vh',
                              backgroundColor:'rgba(0,0,0,0)', 
                              overflow: 'auto',
                              

                        } }
                  >

                        
                        {
                              loading ?
                              
                                    <BlogPost $placeholder/>
                  
                              :

                              blog[activeBlog].map((el, idx) => (
                                    <BlogPost 
                                          $title={el.title}
                                          $body={`${el.body.replace(/^(.{100}[^\s]*).*/, "$1")}...`}
                                          $image={el.image}
                                          key={idx}
                                    />
                              ))
                        }
                        
                  </div>
                  </div>
                  </div>
            </Page>
      )
}

const mapState = state => ({
      loading: state.blog.loading,
      blog: state.blog, 
})

const mapDispatch = dispatch => ({
      updateBlogPosts: posts => dispatch(updateBlogPosts(posts)),

})

export default connect(mapState, mapDispatch)(BlogPage)
