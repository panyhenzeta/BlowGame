
export default function popCircle( state = false, action){
    switch(action.type){
        case 'POP_CIRCLE':
          return action.popCircle;
        default: 
          return state;

    }

}