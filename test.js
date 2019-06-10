// Sample code
// Using aray based approach

const streamReducer = (state=[], action) => {
	switch(action.type) {
		case EDIT_STREAM:
			return state.map(stream => {
				if(stream.id === action.payload.id) {
					return action.payload;
				}else {
					return stream;
				}
			});
		default:
			return state; 
	}
}


const streamReducer = (state={}, action) => {
	switch(action.type) {
		case EDIT_STREAM:
			// const newState = {...state};
			// newState[action.payload.id] = action.payload;
			// return newState;
			return { ...newState, [action.payload.id]: action.payload };   //this is the key interpolation syntax 1: {id:'1', type: 'asdfj'}
		default:
			return state;
	}
}