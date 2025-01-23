### [Part 1](https://devopswithkubernetes.com/part-1)

**Execises For Part 1:**

**Exercise 1.01: Getting started**

Create an application that generates a random string on startup, stores this string into memory, and outputs it every 5 seconds with a timestamp.

Deploy it into your Kubernetes cluster and confirm that it's running with `kubectl logs ...`

Submission

The Log Output application has been published to Docker hub [frankhul/log-output](https://hub.docker.com/r/frankhul/log-output)

##### View logs of the the Log Output image

![Logs for the log-output app](1.01/img/1.01_log_output_logs.png)

#### List deployments

![List Deployments](1.01/img/1.01_list_deployments.png)

#### List pods

![List Pods](1.01/img/1.01_list_pods.png)

#### Create a deployment for the log output image

![Create Log Output Deployment](1.01/img/1.01_create_log_output_deployment.png)

#### Create a cluster using k3d

![Create Cluster](1.01/img/1.01_create_cluster_with_k3d.png)

**Exercise 1.02: Project v0.1**

Create a web server that outputs "Server started in port NNNN" when it is started and deploy it into your Kubernetes cluster.

Please make it so that an environment variable PORT can be used to choose that port.

You will not have access to the port when it is running in Kubernetes yet. We will configure the access when we get to networking.

Submission

The Todo App version v0.1 has been published to Docker hub [frankhul/todo-app:v0.1](https://hub.docker.com/layers/frankhul/todo-app/v0.1/images/sha256-25ae5ef44876bd7942370f9c2cf53e8f55dc2774fdd4a94884d4c1755ddab3ff)

#### View logs for the todo-app v0.1 (frankhul/todo-app:v0.1 image)

![Logs for the todo-app](1.02/img/1.02_todo_app_logs.png)

#### List deploymentes

![List Deployments](1.02/img/1.02_list_deployments.png)

#### List pods

![List Pods](1.02/img/1.02_list_pods.png)

#### Create a deployment for the todo-app v0.1 (frankhul/todo-app:v0.1 image)

![Create Todo App v0.1 Deployment](1.02/img/1.02_create_todo_app_deployment.png)
