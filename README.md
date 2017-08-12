# Connekt App
## Setup

You need to install all the necessary dependencies for the project. You may wish to install globally 
```
sudo npm install react create-react-app 
sudo npm update
sudo apt-get install mysql-server
```
choose the password: connekt for the mysql database

## Run database
to login to the database, run (use previous password to login)
```
mysql -u root -p
```

create a database of name connekt.
```
create database connekt;
```

in the db folder (connekt/react-backend/db/), run the following to start up the mysql database
```
node connect.js
```

back in the mysql, run the following to select which database you are using
```
use connekt;
```

To check that the database is running, install [postman](https://www.getpostman.com/) and update the database with an entry, e.g. POST: 'localhost:3000/user/create?firstname=John&lastname=Smith&email=john@smith.com&password=passwd1'. you can check the entry in the database by going into mysql and running,
```
select * from users;
```

## Setup local server
To start a local server, run the following command in the the front folder (connekt/react-backend/).
```
npm start
```
You can view this on on localhost:3000 in a browser.
