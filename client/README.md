# WDI-SM-62: Project FOUR "PORT=f0710"... by Joy Serquiña)
### Build a Full Stack MERN app
I have created a full stack MERN app that is to templatize portfolios for tech/design creatives so they can create, upload, and update their projects easily into their online resume/portfolios.



### Preview
![Haute-Food13 splash/about page](https://i.imgur.com/8RTwrml.png)
![Haute-Food13 sign up page] (https://i.imgur.com/NshuHSV.png)
![Haute-Food13 sign  page] (https://i.imgur.com/SIt8y6Z.png)
![Edit Profile page] (https://i.imgur.com/zNXWApU.png)
![Community food feed page] (https://i.imgur.com/AEvJkCO.png)
![User's food feed page] (https://i.imgur.com/iLVc1gV.png)
![User's new post page] (https://i.imgur.com/cm7jY0h.png)
![User's edit post page] (https://i.imgur.com/FsBRreR.png)


### ERD
![Relationship btw User and Project Models] (https://i.imgur.com/RbbKhls.jpg?1)


### My Process
#####Pre-Coding:
1. I started by writing out my idea and jotting down the models/Schemas (User Schema, Resume Schema, and Project Schema) that intend to incorporate in my app. 
2. I ended up moving towards eliminating the Resume Schema and incorporating the data into the User Schema.
3. Then went on to sketching out wireframes of each section as shown here:


### Wireframes
![PORT=f0710 Wireframe pg 1] (https://i.imgur.com/EBe9YeF.jpg?2)
![PORT=f0710 Wireframe Sketch pg 2] (https://i.imgur.com/1NoJmDt.jpg)
![PORT=f0710 Wireframe Sketch pg 3] (https://i.imgur.com/kkpl0G3.jpg)

3. I then created my user stories in trello to list the actions they would take, what they would see etc: 
4. Talked through my ideas/ processes with Zac for approval.
6. Create a new git repo for the project.

#####Setting up the Database & Authentication:
1. Created and set up with MongoDB.
2. Set up the authentication with JWT token.
3. Set up the CRUD-able resource for my User Model Schema.
4. Set up the CRUD-able resource for my Project Model Schema.


#####Setting up the functionality:
1. Used map to iterate through the all the users projects' in my database to show the projects and their data in the Projects section of the Users' page.[Screencapture of forEach code on hike list page](https://i.imgur.com/6WwNmeE.png).
2. Used a map to iterate through the all the users in my database to render a component with their name, location, job title, and link to their respective pages.[Screencapture of forEach code on hike list page](https://i.imgur.com/4N8nhYr.png).
3. Upon signing in the User is led to the All Users page to see a list of all users in the database.
4. When clicking on their own page, they are led to seeing their resume as well as link to add projects to their portfolio.
5. When the project is added/generated a button also generates with the component with the option to delete the project.
6. The edit user page enables the user to edit all their user login info as well as their resume info.

#####Pushed to Heroku:
1. Saved to Github during each major save/change.
2. Upon completing the base functionality of my site I deployed it to Heroku prior to styling.
4. Will re-deploy once I've completed styling my app.

##### Technologies Used
16. Used the following:
17. HTML5 / React.js Layouts to build the structure and layout of the views based on the wireframes I sketched out in the beginning.
18. CSS3 / Semantic UI to adjust the spacing and general form/navbar functionality.
19. Ruby was used to create the functionality of the routes/paths/buttons/form submissions to communicate with the back-end. 
20. MongoDB in conjunction with Postman, were used to build, test and develop the back-end database.
21. Used Trello to track my daily goals and productivity as well.
22. Used Git/Github to save/track my build as it progressed.
23. Used Heroku to deploy my app.


##Unsolved Problems:
* I want to implement AWS to allow uploading of screeshots for the projects as well as profile photos and a header image.
* I want to add a search feature so you can search Users.
* I want to pop-down add/edit menus components for each of the sections.

## Wins :)
* Was able to get the full list of Users with links going to their respective pages show up.
* Got my authentication and database set up pretty early on and fully functioning CRUD for my User model Schema!
* Got CRD on my 2nd model: Projects.

### Credits:
*Joy Serquiña

### Designed and Developed by: Joy Serquiña 
*![Joy's github for Project 4 CAPSTONE: Full Stack App: PORT=f0710](https://github.com/essjay05/WDI-SM-62_P4-Capstone)
*![Link to live site hosted up by Heroku](http://port-f0710.herokuapp.com)




This project was bootstrapped with [Create React App](https://github.com/facebook/create-react-app).

## Available Scripts

In the project directory, you can run:

### `npm start`

Runs the app in the development mode.<br>
Open [http://localhost:3000](http://localhost:3000) to view it in the browser.

The page will reload if you make edits.<br>
You will also see any lint errors in the console.

### `npm test`

Launches the test runner in the interactive watch mode.<br>
See the section about [running tests](https://facebook.github.io/create-react-app/docs/running-tests) for more information.

### `npm run build`

Builds the app for production to the `build` folder.<br>
It correctly bundles React in production mode and optimizes the build for the best performance.

The build is minified and the filenames include the hashes.<br>
Your app is ready to be deployed!

See the section about [deployment](https://facebook.github.io/create-react-app/docs/deployment) for more information.

### `npm run eject`

**Note: this is a one-way operation. Once you `eject`, you can’t go back!**

If you aren’t satisfied with the build tool and configuration choices, you can `eject` at any time. This command will remove the single build dependency from your project.

Instead, it will copy all the configuration files and the transitive dependencies (Webpack, Babel, ESLint, etc) right into your project so you have full control over them. All of the commands except `eject` will still work, but they will point to the copied scripts so you can tweak them. At this point you’re on your own.

You don’t have to ever use `eject`. The curated feature set is suitable for small and middle deployments, and you shouldn’t feel obligated to use this feature. However we understand that this tool wouldn’t be useful if you couldn’t customize it when you are ready for it.

## Learn More

You can learn more in the [Create React App documentation](https://facebook.github.io/create-react-app/docs/getting-started).

To learn React, check out the [React documentation](https://reactjs.org/).

### Code Splitting

This section has moved here: https://facebook.github.io/create-react-app/docs/code-splitting

### Analyzing the Bundle Size

This section has moved here: https://facebook.github.io/create-react-app/docs/analyzing-the-bundle-size

### Making a Progressive Web App

This section has moved here: https://facebook.github.io/create-react-app/docs/making-a-progressive-web-app

### Advanced Configuration

This section has moved here: https://facebook.github.io/create-react-app/docs/advanced-configuration

### Deployment

This section has moved here: https://facebook.github.io/create-react-app/docs/deployment

### `npm run build` fails to minify

This section has moved here: https://facebook.github.io/create-react-app/docs/troubleshooting#npm-run-build-fails-to-minify
