class HomeController {
  constructor ($firebaseArray, $firebaseObject, Firebase) {
    'ngInject';
    this.ref = new Firebase('https://plussteam.firebaseio.com/site');
    this.msg = 'WAT';
    this.data = $firebaseObject(this.ref);
    this.msgRef = this.ref.child('messages');
    this.messages = $firebaseArray(this.msgRef);
    this.formOpen = false;
  }

  newMessage(form){
    var now = Date.now();
    this.msgRef.push({
      title: form.title,
      text: form.msg,
      author: form.author,
      postedOn: now
    });
  }

  openForm(){
    this.formOpen = !this.formOpen;
  }
}

export default HomeController;
