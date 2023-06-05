# ASSESSMENT 6: Interview Practice Questions

Answer the following questions.

First, without external resources. Challenge yourself to answer from memory.

Then, research the question to expand on your answer. Even if you feel you have answered the question completely on your own, there is always something more to learn. Write your researched answer in your OWN WORDS.

1. As a developer, I am creating a Rails application with a model called Cohort and a model called Student. The cohort model has_many students, but OOPS! I forgot to add the foreign key. How can I fix this mistake? What is the name of the foreign key? Would the foreign key be on the Cohort model or the Student model?

Your answer:
Create a new model or migrate an added a column 
Researched answer:
To fix the mistake of not adding the foreign key, you can generate a migration in Rails and add the foreign key column to the students table. The foreign key should be named "cohort_id" and it would be added to the Student model to establish the association between Cohort and Student models.

2. Which RESTful routes must always be passed params? Why?

Your answer:
create & update
Researched answer:
The RESTful routes that must always be passed params are the "create" and "update" routes. This is because these routes involve modifying or creating resources, and the necessary parameters are needed to define the data to be created or updated.
 FOR MYSELF:
 The common RESTful routes include:

GET: Retrieve a specific resource or a collection of resources. Examples: /users (get all users), /users/1 (get user with ID 1).

POST: Create a new resource. Example: /users (create a new user).

PUT/PATCH: Update an existing resource. Example: /users/1 (update user with ID 1).

DELETE: Delete an existing resource. Example: /users/1 (delete user with ID 1).

3. Name three rails generator commands. What is created by each?

Your answer:
rails g migration - new data structure for existing model 
rails g model - a model for a table
rails g controller -to handle incoming requests and interacts with the model

Researched answer:

rails generate model: This command is used to generate a new model file along with a migration file. The model represents a database table and includes the attributes and associations for the corresponding resource.

rails generate controller: This command is used to generate a new controller file along with associated view files. The controller handles the logic and actions for a specific resource or functionality within the Rails application.

rails generate scaffold: This command is used to generate a complete set of resources including a model, migration, controller, and views. It creates a basic CRUD interface for the specified resource, providing a quick way to generate the necessary files and code for a typical resource management system.

4. Consider the Rails routes below. What is the name of the controller method that would be called by each route? What action would each of the controller methods perform?

action: "GET" location: /students

def index
end

action: "POST" location: /students

def create
end

action: "GET" location: /students/new

def new
end

action: "GET" location: /students/2

def show
end

action: "GET" location: /students/2/edit

def edit 
end

action: "PATCH" location: /students/2

def update
end

action: "DELETE" location: /students/2

def destroy
end

5. As a developer, you are making an application to manage your to do list. Create 10 user stories that will help you get your application started. [Here is a resource](https://www.atlassian.com/agile/project-management/user-stories) to help you create your user stories.

## Summary: A user story is an informal, general explanation of a software feature written from the perspective of the end user. Its purpose is to articulate how a software feature will provide value to the customer.

## Product purpose: Manage a TASK LIST
What can I do as a user? - Think of CRUD and http verbs
1. Create new tasks
2. Delete old tasks
3. Edit tasks
4. View entire task list for any particular day 
5. Recieve reminders of tasks 
6. Set a duration tim\e I allot to a task
7. Organize tasks into catagories 
8. Schedule task with time/date input 
9. Organize tasks in order of importance 
10. I can see a visibly pleasing application