class StringSplosion{
  constructor (text){
    this.text = text;
  }
  function manipulate(){
    return this.manipu();
  }
  manipu(){
      var a = "";
      for (var i =0; i < (this.text.length+1); i++){
        a = a + this.text.slice(0,i);
      }
      return a;
}
}
