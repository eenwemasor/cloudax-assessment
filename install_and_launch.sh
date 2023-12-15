#!/bin/bash

# Function to install dependencies
install_dependencies() {
    echo "Installing dependencies..."
    cd $1
    npm install
    cd -
}

# Function to launch the application
launch_application() {
    echo "Launching $1..."
    cd $1
    npm start &
    cd -
}

# Install dependencies for cloudax-api
install_dependencies "cloudax-api"

# Install dependencies for cloudax-app
install_dependencies "cloudax-app"

# Launch cloudax-api
launch_application "cloudax-api"

# Launch cloudax-app
launch_application "cloudax-app"

echo "Applications installed and launched successfully."