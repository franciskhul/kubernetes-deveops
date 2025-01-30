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
