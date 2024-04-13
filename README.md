# My Maritime Single Window

This project is an implementation of a simple working software that visualizes the open data of current port calls https://meri.digitraffic.fi/api/port-call/v1/port-calls. The application is built with React.js and is a small playground version of the European Maritime Single Window.

## Getting Started

These instructions will get you a copy of the project up and running on your local machine for development and testing purposes.

### Installing

#### Using npm:

You need Node.js and npm installed on your machine. You can use `node -v` and `npm -v` to check if you have them installed.

1. Clone the repository and navigate into the cloned repository: `cd <yourpath>\msw-app`
2. Install the dependencies: `npm install`
3. Start the application: `npm start`
4. The application (displays message "There are xxx portcalls.") should now be running and accessible in your browser at `http://localhost:3000`. And the message appears in the browser's console as well.

#### Using Docker:

Make sure Docker is installed and running on your machine before executing these commands.

1. Clone the repository and navigate into the cloned repository: `cd <yourpath>\msw-app`
2. Build the Docker image from the Dockerfile: `docker build -t <app_name> .`

3. Run the Docker container: `docker run -p <yourport>:3000 <app_name>`

4. The application (displays message "There are xxx portcalls.") should now be running and accessible in your browser at `http://localhost:<yourport>`. And the message appears in the browser's console as well.

You can name your Docker image `app_name` as per your preference.

You can replace `<yourport>` with any available port number on your machine.

#### Using Package Pull:

Make sure Docker is installed and running on your machine before executing these commands.

1. You can also pull the docker image directly from GitHub using: `docker pull ghcr.io/jingjingyang0803/jingjing-maritime-single-window/msw-app:latest`
2. Run the Docker container: `docker run -p <yourport>:3000 ghcr.io/jingjingyang0803/jingjing-maritime-single-window/msw-app`
3. The application (displays message "There are xxx portcalls.") should now be running and accessible in your browser at `http://localhost:<yourport>`. And the message appears in the browser's console as well.

You can name your Docker image `app_name` as per your preference.

You can replace `<yourport>` with any available port number on your machine.


