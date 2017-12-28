import { put } from 'redux-saga/effects';
import { push } from 'react-router-redux';


function *to(url) {
    yield put(push(url));
}

export default {
    to
};