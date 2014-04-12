# Homework Assignment 3.1 Solution

```javascript
var cursor = db.students.find();

cursor.forEach(function (doc) {
  var scores = doc.scores;
  scores.sort(function(a, b){
  	var res = 0;

  	res = a.type == "homework" ?
  	  (b.type == "homework" ? a.score-b.score : -1) :
  	  (b.type == "homework" ? 1 : a.score-b.score);
  	return res;
  });

  doc.scores = doc.scores.splice(1);
  db.students.update({
    _id : doc._id
  }, {
    "$set": {
      "scores": doc.scores
    }
  });

});
```
