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
