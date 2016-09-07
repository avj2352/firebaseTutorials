/*Main Firebase scripts will come here*/
(function($){
  var url = "https://shwethapramodwedding.firebaseio.com/";
  var weddingRef = new Firebase(url + "wedding/");
  var commentsRef = new Firebase(url + "comments/");

  //Referencing Child nodes in Firebase. Use the .child() method
  var dbname = commentsRef.child("dbName");
  //Referencing the Parent nodes in Firebase. Use the .parent() method
  var parentRef = dbname.parent();
  //Referencing the Root node in Firebase. Use the .root() method
  var baseRef = dbname.root();
}(jQuery));//IIFE jQuery

/*Highlight JS script*/
(function($){
  hljs.initHighlightingOnLoad();
}());//IIFE highlightJS
