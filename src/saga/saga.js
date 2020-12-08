import {call, put, takeLatest} from 'redux-saga/effects'
import {getdata} from './api'
import {AllData} from '../actions/action'


 function* getapi(){
    alert("hy")
    let data = yield  call(getdata('api/all'))
    alert("bye")
    yield put({type:"AllRecord",payload:data})
    // alert("data submitted")
}



 export function* watcher(){
    yield takeLatest(AllData,getapi)
    
}
export default watcher





