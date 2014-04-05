# Homework Assignment 2.1 Solution

```javascript
use weather
```

```javascript
db.data.find( { "Wind Direction" : 
			    { "$gt" : 180,
			      "$lt" : 360
			    }
			  },
			  { "State": true,
			    "_id" : false
			  }).sort( { "Temperature" : 1 } );
```

Should return "New Mexico" as the first element, which yields the correct answer

