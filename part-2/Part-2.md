### [Part 2](https://devopswithkubernetes.com/part-2)

**Exercises For Part 2:**

**Exercise 2.01: Connecting pods**

Connect the "Log output" application and "Ping-pong" application. Instead of sharing data via files use HTTP endpoints to respond with the number of pongs. Deprecate all the volume between the two applications for the time being.

The output will stay the same:

```
2020-03-30T12:15:17.705Z: 8523ecb1-c716-4cb6-a044-b9e83bb98e43.
Ping / Pongs: 3
```

Submission:

The folder containing the Log Output Application [Log Output Application](../apps/ping-pong-log-output-data-sharing-Exercise%202.01/log-output/)

The folder containing the Ping Pong Application [Ping Pong Application](../apps/ping-pong-log-output-data-sharing-Exercise%202.01/ping-pong/)

The folder containing the kubernetes Log Output Application [Log Output Application Manifest](../apps/ping-pong-log-output-data-sharing-Exercise%202.01/log-output/manifests/)

The folder containing the kubernets Ping Pong Application [Ping Pong Application](../apps/ping-pong-log-output-data-sharing-Exercise%202.01/ping-pong/manifests/)

The image for the Log Output Application has been published to docker hub [frankhul/log-output:v0.3](https://hub.docker.com/repository/docker/frankhul/log-output/tags/v0.3/sha256-fb38e5235394e1c0d9870500e6a37f9b00f3dd7ff43537b8dba327077ff819dd)

The image for the Ping Pong Application has been published to docker hub [frankhul/ping-pong:v0.2](https://hub.docker.com/repository/docker/frankhul/ping-pong/tags/v0.2/sha256-1c060ca6d55bd2add3df198a4a0dfbc90bbc6df40a8b132276b8121165b591cc)

#### Screenshot for the log output application

![Log Output Application Screenshot](2.01/img/2.01_log_output_screenshot.png)

#### Screenshot for the ping pong application

![Ping Pong Application Screenshot](2.01/img/2.01_ping_pong_screenshot.png)

**Exercise 2.02: Project v1.0**

Let us get back to our Project. In the previous part we added a random pic and a form for creating todos to the app. The next step is to create a new container that takes care of saving the todo items.

This new service, let us call it todo-backend, should have a GET /todos endpoint for fetching the list of todos and a POST /todos endpoint for creating a new todo. The todos can be saved into memory, we'll add a database later.

Use ingress routing to enable access to the todo-backend.

The role of the service that we made in previous exercises (Todo-app in the figure) is to serve the HTML and possibly JavaScript to the browser. Also, the logic for serving random pictures and caching those remain in that service.

The new service then takes care of the todo items.

After this exercise, you should be able to create new todos using the form, and the created todos should be rendered in the browser.

Submission:

1. Todo Backend

The todo-backend for this project is found in the following folder [Todo Backend](../apps/todo-app-v1.0/todo-backend/)

The todo-backend image has been published to docker hub [frankhul/todo-backend:v0.1](https://hub.docker.com/repository/docker/frankhul/todo-backend/tags/v0.1/sha256-dd751f2487d44a66265a05ff1b929823c5d5c77c375ee835dc4b22f0d05e28d0)

The deployment for the todo-backend is in the following folder [Todo Backend Deployment](../apps/todo-app-v1.0/todo-backend/manifests/deployment.yaml)

The ClusterIP service for the todo-backend is in the following folder [Todo Backend Service](../apps/todo-app-v1.0/todo-backend/manifests/service.yaml)

The ingress for the todo-backend is in the following folder [Todo Backend Ingress](../apps/todo-app-v1.0/todo-backend/manifests/ingress.yaml)

#### Screenshot for the todo-app access

[Todo Backend Access](2.02/img/2.2_todo_backend_access.png)

#### Screenshot for the created deployment for the todo-backend

![Todo backend Deployment Creation](2.02/img/2.2_create_todo_backend_deployment.png)

#### Screenshot for the created service for the todo-backend

![Todo backend Service Creation](2.02/img/2.2_create_todo_backend_service.png)

#### Screenshot for the created ingress for the todo-backend

![Todo backend ingress creation](2.02/img/2.2_create_todo_backend_ingress.png)

2. Todo Application

The todo applicaton can be found in the following folder [Todo Application](../apps/todo-app-v1.0/todo-app/)

The todo-app image has been published to docker hub [frankhul/todo-app:v0.8](https://hub.docker.com/repository/docker/frankhul/todo-app/tags/v0.8/sha256-d1c66e0b6988eb78f97277e0f779e1b77020e6e8a272b68a2ed25d333d5756ea)

The deployment for the todo-app is in the following folder [Todo App Deployment](../apps/todo-app-v1.0/todo-app/manifests/deployment.yaml)

The ClusterIP service for the todo-app is in the following folder [Todo App Service](../apps/todo-app-v1.0/todo-app/manifests/service.yaml)

The ingress for the todo-app is in the following folder [Todo App Ingress](../apps/todo-app-v1.0/todo-app/manifests/ingress.yaml)

#### Screenshot for the todo-app access

[Todo App Access](2.02/img/2.2_todo_app_access.png)

**Exercise 2.03: Keep them separated**

Create a namespace for the applications in the exercises.

Move the "Log output" and "Ping-pong" to that namespace and use that in the future for all of the exercises.

You can follow the material in the default namespace.

Submission

- Created the namespace development. Screenshot for the creation

![Development Namespace Creation](2.03/img/2.03_create_namespace.png)

1. Log output

- The deployment for the log output with namespace can be found [Namespaced deployment](../apps/log-output/manifests/exercise_2.03/deployment.yaml)

- The ingress for the log output with namespace can be found [Namespaced ingress](../apps/log-output/manifests/exercise_2.03/ingress.yaml)

- The service for the log output with namespace can be found [Namespaced Service](../apps/log-output/manifests/exercise_2.03/service.yaml)

2. Ping pong

- - The deployment for the ping pong with namespace can be found [Namespaced deployment](../apps/ping-pong/manifests/exercise_2.03/deployment.yaml)

- The ingress for the ping pong with namespace can be found [Namespaced ingress](../apps/ping-pong/manifests/exercise_2.03/ingress.yaml)

- The service for the ping pong with namespace can be found [Namespaced Service](../apps/ping-pong/manifests/exercise_2.03/service.yaml)
