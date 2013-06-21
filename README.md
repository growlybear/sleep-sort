sleep-sort
==========

Just following Anders Janmyr's instructions for [writing a node module](http://anders.janmyr.com/2012/04/writing-node-module.html)

`sleep-sort` works by creating a task for every number to be sorted. The task
will "sleep" n number of milliseconds and then push the number onto an array.
When all tasks are done, the array is returned sorted.
