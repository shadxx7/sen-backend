# SEN Backend

### To run the server

- You need Node & Yarn to run this application. Download them here - [Node](https://nodejs.org/), [Yarn](https://yarnpkg.com).

- You will need to set the database host url in a new .env file to the url you are hosting the database server on.

- An example Database file will look like this:

    ```bash
    PORT=5000
    DB_ADDRESS="<Your DB Address here>"
    ```

- Run the following commands in the directory of sen-backend:

  ```bash
  yarn
  yarn dev
  ```