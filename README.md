# Sequelize_RESTfulAPI_findOrCreate
An express app connecting to mySQL database and implementing RESTful API to POST to the database using a .findOrCreate() function.

COMMAND PROMPT

(1) Run the following to navigate to your Desktop: 

    cd Desktop

(2) Create a new folder on Desktop: 

    mkdir Express

(3) Navigate to the Express directory: 

    cd Express

(4) Run the following command to install the Express generator globally onto your computer: 

    npm install express-generator -g

(5) Enter the following command to generate the Express starter app. This will set the view to use Handlebars and will name the app express_Sequelize_RESTfulAPI_findOrCreate: 

    express --view=hbs express_Sequelize_RESTfulAPI_findOrCreate

(6) Once the process is complete, navigate into the express_Sequelize_RESTfulAPI_findOrCreate directory: 

    cd express_Sequelize_RESTfulAPI_findOrCreate
    
(7) Now in the express_Sequelize_RESTfulAPI_findOrCreate directory, run the following: 

    npm install

(8) Install Nodemon globally: 

    npm install -g nodemon
    
(9) Install Nodemon as a devDependency in the package.json file within the express_Sequelize_RESTfulAPI_findOrCreate directory:

    npm install -save-dev nodemon
    
(10) Install mysql2:

    npm install --save mysql2

(11) Install sequelize: 

    npm install --save sequelize@5.15.1

(12) Open in VS code:

    code . 


VS CODE

(13) Navigate to the routes/index.js file and require mysql2 and models in routes/index.js file.: ![Require mysql2 in routes-index js file (Sequelized_RESTfulAPI_findOrCreate)](https://user-images.githubusercontent.com/35668707/71036299-6c06a680-20eb-11ea-8e74-09cbbf12bf04.JPG)

COMMAND PROMPT

(14) Create necessary sequelize folders and files in project.:

    sequelize init

(15)  Generate a model file for the actor table. (-h: IP/Hostname; -d: Database; -u: Username for database; -x: Password for database; -o: directory to place the models; -t: comma-seperated names of tables to import):  

    sequelize-auto -h localhost -d sakila -u root -x Password1! -o "./models" -t film,actor,film_actor
    
VS CODE

(16) Create a new folder in your "models" folder called rel. Create a file in your rel folder called associations.js and define the relationships between the "film" and "actor" models in this file.: ![In models folder create rel folder and an associations js file in the rel folder (Sequelized_RESTfulAPI_findOrCreate)](https://user-images.githubusercontent.com/35668707/71036366-8c366580-20eb-11ea-9fbd-fd183ac4a200.JPG)

![Update the associations js file in the rel folder (Sequelized_RESTfulAPI_findOrCreate)](https://user-images.githubusercontent.com/35668707/71036461-c273e500-20eb-11ea-98f7-9c019dcb317a.JPG)

(17) In the models/index.js file add associations constant and at the bottom of the models/index.js file add the call to associations function.: ![Call associations function in models-index js file (Sequelized_RESTfulAPI_findOrCreate)](https://user-images.githubusercontent.com/35668707/71036764-4c23b280-20ec-11ea-92b3-21ae9a3d0e6f.JPG)

(18) Open config/config.json file and change settings to connect to the database.: ![Update database connection info in config-config json file (Sequelized_RESTfulAPI_findOrCreate)](https://user-images.githubusercontent.com/35668707/71036821-6a89ae00-20ec-11ea-8a63-23d07fad07f2.JPG)

(19) Open app.js file at the root of the project and include the './model" folder so that the models are available everywhere in the application.: ![Add models sequelize sync in app js file (Sequelized_RESTfulAPI_findOrCreate)](https://user-images.githubusercontent.com/35668707/71036937-a7ee3b80-20ec-11ea-8532-7c348c75bdf7.JPG)

(20) Add sequelize sync code above module.exports in the app.js file to ensure that the tables within the models in the project are the same as in the database.: Add models sequelize sync in app js file (Sequelized_RESTfulAPI_Post)
![Add models sequelize sync in app js file (Sequelized_RESTfulAPI_findOrCreate)](https://user-images.githubusercontent.com/35668707/71036937-a7ee3b80-20ec-11ea-8532-7c348c75bdf7.JPG)

(21) In the routes/index.js file require the models.: ![Require models in routes-index js file (Sequelized_RESTfulAPI_findOrCreate)](https://user-images.githubusercontent.com/35668707/71037169-2b0f9180-20ed-11ea-9b51-56dc2ca0d29a.JPG)

(22) In the routes/index.js file add post() route for /actors that will use the findAll() method.: 

COMMAND PROMPT

(23) Run nodemon in terminal to see DB sync'd up: 

    nodemon

POSTMAN

(24) Navigate to localhost3000/actors/[insert specific id #] in Postman and perform a GET request to view data.: 

NODEMON NOTE

Sometimes nodemon crashes in Windows 10 and there is a simple fix:

(1) Open Task manager (press Ctrl+Alt+Delete)

(2) Select the 'Processes tab'

(3) Search for 'Node.js: Server-side JavaScript'

(4) Select it and click on 'End task' button

Now you can run npm start.
