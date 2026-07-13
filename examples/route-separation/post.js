'use strict'

// Fake posts database

var posts = [
  { title: 'Foo', body: 'some foo bar' },
  { title: 'Foo bar', body: 'more foo bar' },
  { title: 'Foo bar baz', body: 'more foo bar baz' },
  { title: 'Foo bar baz qux', body: 'more foo bar baz qux' },
  { title: 'Foo bar baz qux quux', body: 'more foo bar baz qux quux' },
   { title: 'Fooo bar baz qux quux', body: 'more foo bar baz qux quux' }
];

exports.list = function(req, res){
  res.render('posts', { title: 'Posts', posts: posts });
};

