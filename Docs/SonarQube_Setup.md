# SonarQube Setup

## Run SonarQube Container

docker run -d \
--name sonar \
-p 9000:9000 \
sonarqube:lts-community

## Create Token

Administration
→ Security
→ Users
→ Generate Token

## Jenkins Integration

Manage Jenkins
→ System
→ SonarQube Servers

Configure:

- Server URL
- Authentication Token

Install Plugins:

- SonarQube Scanner
- Sonar Quality Gates
