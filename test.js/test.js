
var a = {
  b : function() {
    var that  = this;
    var foo = {bar: 10};
    with(foo) {
      console.log(this == that);
    }
  }
}

a.b();
