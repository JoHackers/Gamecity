// import { GET_CHATS, AFTER_POST_MESSAGE } from "../actions";

// export default function chatsReducer(state = [], action) {
//     console.log(action.payload,"action.payload")
//     // console.log(state.chats.concat(action.payload),"state.chats.concat(action.payload)")
//   switch (action.type) {
//     case GET_CHATS:
//       return { ...state, chats: action.payload };

//     case AFTER_POST_MESSAGE:
//       console.log("stateeeeeeee",state.chats)//it is an object
//       var array = [];
//       array.push(state.chats)
//       console.log(array, "arrrrrrrrrrr")
//       console.log(array.concat(action.payload), "array.concat(action.payload)")
//       // console.log("action.payloaddddddd",action.payload)//it is an array of objects
//       // return { ...state, chats: action.payload };
//       return { ...state, chats: array.concat(action.payload) };//aray of objects
      

//     default:
//       return state;
//   }
  
// }

import { GET_CHATS, AFTER_POST_MESSAGE } from "../actions";

export default function chatsReducer(state = {}, action) {
  switch (action.type) {
    case GET_CHATS:
      return { ...state, chats: action.payload };

    case AFTER_POST_MESSAGE:
      // return { ...state, chats: action.payload };
      console.log(state.chats,"state.chats in chat reducer")//array of objects the old msgs
      console.log(action.payload,"action.payload in chat reducer")//array of object the msg I got 
      return { ...state, chats: state.chats.concat(action.payload) };

    default:
      return state;
  }
}
