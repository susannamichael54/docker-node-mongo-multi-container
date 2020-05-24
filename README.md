<h2>Running multiple Docker containers with docker compose</h2>

This project is a beginner project on how docker compose can be used to run multiple containers. There are two containers. One which contains a node.js application and another that runs from a mongo image.

To run the application in your local use the following command from the parent directory:

	docker-compose up --build  

This starts the application. Hit the url http://localhost:8000/ on the browser to check whether the application is running.
You will get the following json response:

	{"message":"You are visiting ROOT route"}

You can get the docker image using the command:
	
	docker pull susannamic/node-mongo-multi-container

