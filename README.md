# **Network Monitor Lab**

This project implements a network monitoring system using a microservices architecture. It integrates various technologies and tools for service orchestration, monitoring, and visualization.

## **Table of Contents**
- [Features](#features)
- [Architecture](#architecture)
- [Technologies Used](#technologies-used)
- [Setup and Installation](#setup-and-installation)
- [Usage](#usage)
- [Contributing](#contributing)
- [License](#license)

---

## **Features**
- **API Gateway:** Manages requests to microservices.
- **Microservices:** Independent services that provide currency data:
  - Official Dollar (Flask)
  - Blue Dollar (FastAPI)
  - MEP Dollar (Deno)
- **Client Dashboard:** User interface built with React (Vite).
- **Load Balancer:** Distributes requests across microservices for improved performance and reliability.
- **Monitoring Stack:** 
  - **Prometheus:** Collects metrics from microservices.
  - **Grafana:** Displays real-time metrics on dashboards.
  - **ELK Stack:** Manages centralized logging for all services.

---

## **Architecture**
Dashboard/
├── ApiGateway/           # API Gateway using Express/TypeScript
├── Client/               # Frontend built with Vite + React
├── Server-1/             # Service for Official Dollar (Flask)
├── Server-2/             # Service for Blue Dollar (FastAPI)
├── Server-3/             # Service for MEP Dollar (Deno)
├── LoadBalancer/         # Load Balancer (NGINX)
├── Monitoring/           # Monitoring and logging tools
│   ├── Prometheus/
│   ├── Grafana/
│   └── ELK/
├── docker-compose.yml    # Multi-service orchestration
└── README.md             # Documentation

## **Technologies Used**

-   **Backend:** Flask, FastAPI, Deno
-   **Frontend:** React (Vite)
-   **Load Balancer:** NGINX
-   **Monitoring Tools:** Prometheus, Grafana, ELK Stack
-   **Containerization:** Docker, Docker Compose

## **Setup and Installation**
1.  Clone the repository:  `git clone https://github.com/your-repo/network-monitor-lab.git cd network-monitor-lab` 
2.  Ensure you have Docker and Docker Compose installed.
3.  Start the services:  `docker-compose up --build` 
4.  Access the following:
    -   Client Dashboard: http://localhost:3000
    -   API Gateway: http://localhost:4000
    -   Grafana: http://localhost:3001
    -   Kibana: http://localhost:5601


## **Secuence Diagram**

sequenceDiagram
Client->>ApiGateway: Request data (Dollar rates)
ApiGateway->>LoadBalancer: Distribute request
LoadBalancer->>FlaskService: Fetch Official Dollar
LoadBalancer->>FastAPIService: Fetch Blue Dollar
LoadBalancer->>DenoService: Fetch MEP Dollar
FlaskService-->>LoadBalancer: Return Official Dollar
FastAPIService-->>LoadBalancer: Return Blue Dollar
DenoService-->>LoadBalancer: Return MEP Dollar
LoadBalancer-->>ApiGateway: Aggregated data
ApiGateway-->>Client: Return response to client
Client->>Grafana: View metrics (via Prometheus)
Client->>Kibana: View logs (via ELK)

## **Components**

graph TD
A[Client] -->|Sends requests| B[ApiGateway]
B -->|Routes to services| C[LoadBalancer]
C -->|Fetch data| D[FlaskService]
C -->|Fetch data| E[FastAPIService]
C -->|Fetch data| F[DenoService]
B -->|Logs requests| G[ELK Stack]
C -->|Monitors services| H[Prometheus]
H -->|Visualize metrics| I[Grafana]
