const logger = param => state => next => action => {
    console.log("Logging", param);
    // console.log(state);
    // console.log(next);
    // console.log(action);
    // It is required to pass the action to next middleware i.e. reducer
    next(action);
}

export default logger;
// Applied currying principle in middleware
// N => 1