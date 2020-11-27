import './App.css'
import NewPost from './NewPost';
import { connect } from 'react-redux'
import {useState} from 'react';

function App({posts}) {
  
  const [search,setSearch]=useState('');

  const [toggle,setToggle]=useState(true);

  

  function onChange(e){
    setSearch(e.target.value);
  }

  function viewToggle(){
      setToggle(true)
  }

  const result = posts.filter(
    (post)=>{
      if(search===''){
        return post;
      }
        else if(
          post.title.toLowerCase()
        .includes(search.toLowerCase())||
        post.comment.toLowerCase()
        .includes(search.toLowerCase())
        )
        {
          return post;
        
        }
        
    }).map((post)=>{
    return (
      <div className="card" >
        <div className="card-body">
          <h5 className="card-title">
              {post.title}
          </h5>
          
          <p className="card-text">
          {post.comment}
          </p>
          
        </div>      
      </div>  
      )}
      
    )
 

  return (
    <div className="App">
      {/* search */}
        <div className="search">
        <button type="button" class="btn btn-default" id='search-button'>
            <span class="glyphicon glyphicon-search"></span> 
          </button>  
          
          <div className="search__input">  
          
            <input type="text" placeholder="Search.." onChange={onChange} value={search} />
          </div>
          <div className="search__icon"> 
                 
          <button type="submit" className="btn btn-default" onClick={()=>setSearch('')}>
            Clear
        </button>
          </div>
      </div>
 
      {/* pageTitle */}
      <div className="title">
        <div className="title-left">
        <button type="submit" className="btn btn-success btn-lg" onClick={()=>setToggle(false)}>
            New Post
        </button>
        </div>
        <div className="title-right">
        <button type="submit" className="btn btn-success btn-lg" onClick={()=>setToggle(true)}>
            Published
        </button>
        </div>
      </div>
      {/* published */}      
      <div>
        {toggle?result:<NewPost toggle={viewToggle} />}
      </div>     
     </div>
  );
}

const mapStateToProps = (state) => {
  return {
    posts: state
  }
}



export default connect(mapStateToProps,
  null)( App);
