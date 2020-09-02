const func = ({dispatch, getState}) => next => action => {
    if(typeof action === "function")
        action(dispatch, getState);
    else
        // next middleware i.e. reducer
        next(action);
}

export default func;