import React, {useState} from 'react'
import { connect } from 'react-redux'
import { addPosts} from './actionsCreators'


function NewPost({dispatch,toggle}) {

    const[state,setState]=useState('')


    function handleChange(evt){
        const value=evt.target.value;
        setState({
            ...state,
            [evt.target.name]:value
        })
    }

    function onSubmit(e){
        
        if(state.title===undefined||state.comment===undefined
            ||state.title===''||state.comment===''){
            alert("title and comment cannot be empty")
        }else{
        dispatch(addPosts(state))
       
        setState({
            title:'',
            comment:''
        })
    }
    }


    return (
        <div className="form-group">
           
        <label for="title" >Title </label>
        <input type="title" className="form-control" name="title" onChange={handleChange} value={state.title} /> 
        <label for="comment">Comment:</label>
        <textarea className="form-control" rows="5" name="comment" onChange={handleChange}  value={state.comment}></textarea>
        <button type="submit" className="btn btn-default" onClick={onSubmit}>
            Publish
        </button>
        <button type="submit" className="btn btn-default" onClick={toggle} >
            Cancel
        </button>
       
       </div>
    )
}


export default connect() (NewPost)
