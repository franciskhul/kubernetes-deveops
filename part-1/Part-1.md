### [Part 1](https://devopswithkubernetes.com/part-1)

**1.01: Getting started**

Create an application that generates a random string on startup, stores this string into memory, and outputs it every 5 seconds with a timestamp.

Deploy it into your Kubernetes cluster and confirm that it's running with `kubectl logs ...`

Submission

The Log Output application has been published to Docker hub [frankhul/log-output](https://hub.docker.com/r/frankhul/log-output)

##### 1. View logs of the the Log Output image

![Logs for the log output app](1.01/img/1.01_log_output_logs.png)

#### 2. List deployments

![List Deployments](1.01/img/1.01_list_deployments.png)

#### 3. List pods

![List Pods](1.01/img/1.01_list_pods.png)

#### 4. Create a deployment for the log output image

![Create Log Output Deployment](1.01/img/1.01_create_log_output_deployment.png)

#### 5. Create a cluster using k3d

![Create Cluster](1.01/img/1.01_create_cluster_with_k3d.png)
