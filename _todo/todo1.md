
# ~TODO 1~

## Redux Cycle for APIs
* Create an API utility function that gets data from backend.
* Create actions for calling API & receiving data. This requires defining a new constant and action creator.
* Create a reducer to respond to transform data into a slice of state
  * Each slice of state has one and only one reducer.
  * Reducers can next into other reducers
* Create a requestData thunk action creator.
* Create a container that maps props to component.
  * mapStateToProps: slice of state that the component is interested in observing
  * mapDispatchToProps: action/thunk action that the component will call upon some event or change of state.
* Create a class for the component. Note that the state and dispatch objects are now set as props
* (Optional) If the component has an initial prop that relies on a slice of state, and this slice of state cannot not be initialized by default.
  * Inside of the component, create a lifecycle method componentDidMount, call 'this.props.[thunkAction]'.
  * This will call dispatch -> calls the reducer -> allows for the state of your application to change -> allows your component to rerender.
* (Optional) Routing
  * Add a Route that renders the Container/Component when the url matches a specific path.
  * We'll add the Route to the end of our parent container render function.

## Reminder: Git frequently. Branch early & Branch often
* git commit -m [description]
* git checkout -b [yourbranchname]
* git branch -m [newBranchName]
* git show-branch -a
* git checkout master
* git merge [branch]
* git push heroku master
* heroku run rake db:migrate
* ***you shouldn't even have to look at this***
