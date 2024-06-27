function receivesAFunction(cb){
    cb();
};

const returnsANamedFunction = () =>{
    return function named(){}
}

const returnsAnAnonymousFunction = () =>{
    return () => {}
}

