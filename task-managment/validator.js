//Assignment 1: 
//-------------
//Task Management System (ToDo App Modules):
  //   Building a task manager like Todoist

//Requirements:
  //   Create a modular todo app with 3 separate files:

       
          
    //    i. validator.js - Input validation
 // TODO: Export these validation functions
 //  1. Validate task title (not empty, min 3 chars)
                      function validateTitle(title) {
                        // Your code here
                        if(!title && title.length() <=3){
                          return 'not accepted'
                      }
                      else{
                        return 'accepted'
                      }
                    }
                      
                      // 2. Validate priority (must be: low, medium, high)
                    function validatePriority(priority) {
                        // Your code here
                        if (priority=='low'){
                          return true
                        }
                        else if (priority=='high'){
                          return true
                        }
                        else if (priority=='medium'){
                          return ture
                        }
                        else {
                          return false
                        }
                      }
                      
                      // 3. Validate due date (must be future date)
                      function validateDueDate(date) {
                         return true
                      }
                      export {validateTitle,validatePriority,validateDueDate}
