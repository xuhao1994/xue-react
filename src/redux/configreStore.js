import { createStore, compose, applyMiddleware } from 'redux';
import thunk from 'redux-thunk';
import rootRedux from './rootRedux';

const finalCreateStore=compose(
    applyMiddleware(
        thunk,
    )
)(createStore);

    export default function (initialState) {
        const store = finalCreateStore(rootRedux, initialState,
            window.devToolsExtension ? window.devToolsExtension() : undefined
            );

        return store;
    }