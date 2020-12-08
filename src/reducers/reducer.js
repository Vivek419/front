const initial = {
    Allrecord: []
}
const Studentreducer = (state = initial, action) => {
    switch (action.type) {
        case "INSERT":
            console.log(action.payload)
            state.Allrecord.push(action.payload)
            return state
        case "DELETE":
            return state.Allrecord.filter((index)=>index !== action.payload)
        case "UPDATE":
            return state.Allrecord.map((item,index)=>index ===action.id ? action.payload:item);
        case "AllRecord":
            return{
                ...state,
                Allrecord:action.payload
            }

        default:
            return state


    }
};
export default Studentreducer;