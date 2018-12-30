#!/bin/bash

# Install Node.
curl -sL https://deb.nodesource.com/setup_10.x | bash -
apt-get install -y nodejs

# Install Node dependencies.
npm install cors
