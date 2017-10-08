


 const activeReducer = (state = {
 		active: 3,
 		activeFooter: false,
 		lastValue: [],
 		lastFooter: []
 }, action) => { 
 	switch (action.type) {
 		case "activeThumbnail":
 			state = {
 				...state,
 				active: action.payload,
 				lastValue: [ ...state.lastValue, action.payload]
 			};
 			break;

 		case "activeFooter":
 			state = {
	 			...state,
	 			activeFooter: action.payload,
	 			lastFooter: [ ...state.lastFooter, action.payload]
 			}
 			break;
 		};
 		
 		return state;
 	};


export default activeReducer;