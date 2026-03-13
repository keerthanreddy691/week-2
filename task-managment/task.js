// ii. task.js - Task operations
                    // TODO: Import validator functions
                    // import { ... } from './validator.js';

import { validateDueDate, validatePriority, validateTitle } from "./validator.js";

                    
                    const tasks = [];
                    
                    // 1. Add new task
                    function addTask(title, priority, dueDate) {
                      // Validate using imported functions
                      if(!validateTitle(title)&&!validatePriority(priority)&&validateDueDate(dueDateate)){
                        return ' adding task failed not valid credientials'
                      }
                      // If valid, add to tasks array
                      else{
                        tasks.push({title:title,priority:priority,duedate:dueDate})
                      }
                      // Return success/error message
                      return 'task is added'
                    }
                    
                    // 2. Get all tasks
                    function getAllTasks() {
                      // Return all tasks
                      return tasks
                    }
                    
                    // 3. Mark task as complete
                    function completeTask(taskId) {
                      // Find task and mark as complete
                      
                      let find1=tasks.findIndex((obj)=>obj.title==taskId)
                      
                     tasks.splice(find1,1)
                     
                    }
export { addTask,getAllTasks,completeTask}