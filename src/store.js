import { createStore } from 'redux'
import  {ADD_POSTS} from './actionsCreators'

const initialState = [{
            title:' Title',
            comment:'React Redux gives you two ways to let components dispatch actions: By default, a connected component receives props'
},
{
    title:'Stack',
    comment:"ome languages don't allow single-branch if statements because they lead to problems like this. You'd be doing yourself a favor if you always, always write"
}
]

const reducer =(state,action)=>{
    switch(action.type){
        case ADD_POSTS:           
            return [
                ...state,{
                    title:action.posts.title,
                    comment:action.posts.comment
                }
            ]
        default:
            return state
    }

}


export const store = createStore(reducer,initialState)