let tableData = [{},{},{},{},{},{},{},{},{},{},{},{},{},{},{},{},{},{},{},{},{},{},{},{},{},{},{},{},{},{},{},{},{},{},{},{}];

function stateWise(state=tableData,action){
    switch(action.type){
case "UPDATEARRAY":
     let newArray = action.array
     return newArray;
     break;

     default: return state;
    }
}

export default stateWise;