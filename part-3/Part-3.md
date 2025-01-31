### [Part 2](https://devopswithkubernetes.com/part-3)

**Exercises For Part 2:**

**Exercise 3.01: Pingpong GKE**

Deploy Ping-pong application into GKE.

In this exercise use a LoadBalancer service to expose the service.

Submission

The ping pong application for this exercise is found in the following folder [Ping Pong GKE](../apps/ping-pong-exercise-3.01-gke/)

The service.yaml, postgres-statefulset.yaml, deployment.yaml and postgres-configmap can be found in the following folder
[Ping Pong GKE manifest](../apps/ping-pong-exercise-3.01-gke//manifests/)

#### Screenshot of the view of the application of in browser

![Ping Pong GKE Access](3.01/img/3.01_viewing_ping_pong_gke.png)

#### Screenshot of the creation of the postgres statefulset

![Ping Pong Postgres StatefulSet Creation](3.01/img/3.01_postgres_statefulset_creation.png)

#### Logs for successful creation of the postgres statefulset

![Ping Pong Postgres StatefulSet Logs](3.01/img/3.01_postgres_statefulset_creation_logs.png)

#### Screenshot of the allocated external ip address of the service(loadbalancer)

![External IP Address of Service](3.01/img/3.01_loadbalancer_service_creation.png)

**Exercise 3.02: Back to Ingress**

Deploy the "Log output" and "Ping-pong" applications into GKE and expose it with Ingress.

"Ping-pong" will have to respond from /pingpong path. This may require you to rewrite parts of the code.

Note that Ingress expects a service to give a successful response in the path / even if the service is mapped to some other path!

Submission

The log output applications used to tackle this exercise can be found in the following folder [Ping Pong and Logoutp](../apps/ping-pong-log-output-data-sharing-Exercise-3.02/log-output/)

The ping pong applications used to tackle this exercise can be found in the following folder [Ping Pong and Logoutp](../apps/ping-pong-log-output-data-sharing-Exercise-3.02/ping-pong/)

I have used one ingress declaration file [Ingress Declaration](../apps/ping-pong-log-output-data-sharing-Exercise-3.02/manifest/ingress.yaml)

The log-output service declaration can be found at [Logoutput Service](../apps/ping-pong-log-output-data-sharing-Exercise-3.02/log-output/manifests/service.yaml)

The ping-pong service declaration can be found at [Ping Pong Service](../apps/ping-pong-log-output-data-sharing-Exercise-3.02/ping-pong/manifests/service.yaml)

#### The NodePort service listing for the log-output and ping-pong

![NodePort Services](3.02/img/3.02_nodeport_service.png)

#### The Ingress listing that redirect to log-output if / and ping-pong if /pingpong

![ServiceApp Ingress](3.02/img/3.02_service_ingress.png)
