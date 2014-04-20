# Homework Assignment 4.4 Solution

This homework is a multiple choice question; you can find the answer to the question by running the following command in a mongo shell instance

```javascript
db.profile.find({
  "ns" : "school2.students"
}).sort({
  "millis" : -1
}).limit(1).pretty()
```
