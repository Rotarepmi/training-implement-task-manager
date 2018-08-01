const TaskManager = function() {
  this.taskList = []
  this.getList = function() {
    return this.taskList
  }
  this.addTask = function(a, b, c) {
    this.taskList.push({
      name: a,
      callback: b,
      context: c
    })
  }
  this.run = function() {
    this.taskList.forEach(task => task.callback.bind(task.context)())
  }
}