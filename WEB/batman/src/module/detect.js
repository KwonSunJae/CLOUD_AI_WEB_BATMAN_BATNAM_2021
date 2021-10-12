import { createAction, handleActions } from "redux-actions";
import { put, takeLatest } from "redux-saga/effects";

// 현재 감시중인가?
// 감시 시작
// 감시 종료

const SET_RUNWAY = "detect/SET_RUNWAY";
const DETECT_START = "detect/DETECT_START";
const START_SUCCESS = "detect/START_SUCCESS";
const START_FAILED = "detect/START_FAIL";
const DETECT_STOP = "detect/DETECT_STOP";
const STOP_SUCCESS = "detect/STOP_SUCCESS";
const STOP_FAILED = "detect/STOP_FAILED";

export const setRunway = createAction(SET_RUNWAY,runway=>runway);
export const detectStart = createAction(DETECT_START,id=>id);
export const detectStop = createAction(DETECT_STOP);

// how to set runway ?

function* startSaga(){
    // check connect to server
}

function* stopSaga(){
    // check connect to server
}

export function* detectSaga(){
    
}

const initState = {
    isDetect : false,
    runway:null,
    eror:null
}

export default handleActions({
    [SET_RUNWAY]:(state,{payload:runway})=>({
        ...state,
        runway:runway
    }),
    [DETECT_START]:(state)=>({
        ...state,
        isDetect:true        
    }),
    [DETECT_STOP]:(state)=>({
        ...state,
        isDetect:false,
        runway:null
    })
},
initState);
