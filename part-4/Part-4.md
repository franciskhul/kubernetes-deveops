### [Part 4](https://devopswithkubernetes.com/part-4)

## Exercise 4.01: Readiness Probe

Create a ReadinessProbe for the Ping-pong application. It should be ready when it has a connection to the database.

And another ReadinessProbe for Log output application. It should be ready when it can receive data from the Ping-pong application.

Test that it works by applying everything but the database statefulset. The output of kubectl get po should look like this before the database is available:

```
NAME                             READY   STATUS    RESTARTS   AGE
logoutput-dep-7f49547cf4-ttj4f   1/2     Running   0          21s
pingpong-dep-9b698d6fb-jdgq9     0/1     Running   0          21s
```

Adding the database should automatically move the READY states to 2/2 and 1/1 for Log output and Ping-pong respectively.

Submission

1. Ping Pong

- The ping pong application for this exercise can be found in the following folder [Ping Pong ReadinessProbe](../apps/ping-pong-exercise-4.01)

- Here is the ping pong deployment declaration with Readiness probe [Ping Pong Readiness](../apps/ping-pong-exercise-4.01/manifests/deployment.yaml)

2. Log Output

- The log ouput application for this exercise can be found in the following folder [Logout ReadinessProbe](../apps/log-output-Exercise-4.01/)

- Here is the log output deployment declaration with Readiness probe [Log output Readiness](../apps/log-output-Exercise-4.01/manifests/deployment.yaml)
