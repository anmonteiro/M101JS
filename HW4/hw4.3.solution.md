# Homework Assignment 4.3 Solution

## Index for the blog homepage

```javascript
db.posts.ensureIndex({ "date" : -1 })
```


## Index for getting posts by tagname

```javascript
db.posts.ensureIndex({
  "tags" : 1,
  "date" : -1
})
```


## Index for getting a post by permalink

```javascript
db.posts.ensureIndex({ "permalink" : 1})
```
