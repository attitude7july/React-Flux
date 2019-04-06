# React-Flux
# Initial Setup
    # npm install --save
    # npm init -y
    # create src folder
    # create dist 
# Setting up Gulp configuration
    # install packages
    # npm install --save gulp@3.9.0 gulp-connect@2.2.0 gulp-open@1.0.0
    # npm install gulp-cli -g
    # create gulpfile.js
        # create config varibale with below items
        # create tasks connect, open, html and default
# Setting up Browserify configuration
    # install packages
    # npm install --save browserify@11.0.1 reactify@1.1.1 vinyl-source-stream@1.1.0
    # create main.js in src folder
    # create task in gulpfile.js
    # add watcher for js task

# create index.html file in src folder
    # add <script src="scripts/bundle.js"></script> reference under body tag in src/index.html
# Setting up bootstrap and jQuery
    # install packages
    # npm install --save bootstrap@3.3.5 jquery@2.1.4 gulp-concat@2.6.0
    # add concat gulp-concate
    # add css in config section
    # create task for css in gulpfile.js
    # add jQuery and Css references in main.js file in src folder
    # add reference to bundle.css in index.html
# Setting up EsLint
    # install package
    # npm install --save gulp-eslint@0.15.0
    # add task in gulpfile.js
    # add watcher for js files
# Setting up React , React Router and Flux
    # install package
    # npm install --save react@0.13.0 react-router@0.13.0 flux@2.0.3