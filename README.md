# ThunderCloud

Easy way to upload files to your system using LAN.

## Setup

Install the node packages

#### `npm install`

Create a new folder named **uploads** at the level of your project folder.

## Running

**Step 0)** Identify the IP address

Connect the device and your system to the same network and replace the IPv4 address in the constants file.

**Step 1)** Run the server

Start the backend server by moving into the **src** folder and running the **server.js** file

#### `cd src`

#### `node server.js`

**Step 2)** Run the react app

Start the react instance. The app runs on port 3000 by default.

#### `npm start`

**Step 3)** Usage

In your client device, connect to the frontend URL. Your uploaded files will be added to the **uploads** folder.

