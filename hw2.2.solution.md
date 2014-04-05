# Homework Assignment 2.2 Solution

```javascript
var cursor = db.data.find({}, {"State":true,"Temperature":true,"_id":true}).sort({"State":1,"Temperature":-1});

var cState='-1';
var ids = [];
while (cursor.hasNext()) {
   var next = cursor.next();

   if (next.State != cState) {
     cState = next.State;
     
     db.data.update({"_id" : next._id}, {"$set":{"month_high" : true}});
   }
}
```