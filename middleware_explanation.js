////////////////REDUX MIDDLEWARE////////////////

//Below is the definition of a middleware
const middleware = store => {
  return next => {
    return action => {
        /**
         * This is the middleware part where we can write out logic to do
         * some business logic before dispatching action to reducer
         */
        /**
         * Here 'next' is point to 'dispatch' function so once we done with
         * all the manipulation we should call 'next(action)' which again returns   
         * action
         */
        /**
         * Here suppose if we are using two middlewares then 'next' in first middleware would point to middleware two. 'next' in middleware two will
         * point to 'dispatch' finally.
         * so in this way all the middlewares will execute in a chain and final middleware will dispatch action to reducer
         */
        next(action);
    };
  };
};

const middlewareTwo = store => {
    return next => {
      return action => {
          next(action);
      };
    };
  };


  createStore(reducer,applyMiddleware(middleware,middlewareTwo));