 //  iii. app.js - Main application
                  // TODO: Import task functions
                   import {addTask,getAllTasks,completeTask } from './task.js';
                  // Test your module system
                  addTask('gam','high','2026-05-15')
                  // 1. Add some tasks
                  addTask('sleeping','low','2026-05-15')
                  addTask('walking','medium','2026-05-15')
                  addTask('reading','high','2026-05-15')
                  // 2. Display all tasks
                  console.log(getAllTasks())
                  // 3. Complete a task
                 completeTask('walking')
                  // 4. Display all tasks again
                  console.log(getAllTasks())