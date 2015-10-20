class FirebaseService {
  constructor(Firebase){
    'ngInject';
    this.dataRef = new Firebase('https://plussteam.firebaseio.com/site');
  }

  /* getIt(path, $firebaseObject){
    if(path){
      let childRef = this.ref.child(path);
      return $firebaseObject(childRef);
    }
    else {
      return $firebaseObject(this.ref);
    }
  }

  setIt(data, path){
    if(path){
      let childRef = this.ref.child(path);
      childRef.set(data);
    }
    else {
      this.ref.set(data);
    }
  } */
}

export default FirebaseService;
