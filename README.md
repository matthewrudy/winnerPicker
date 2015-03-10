winner-picker
=====================

Using React.js and Flux to build a "simple" winner-picker
for a raffle at Codeaholics.

### Usage

```
npm install
npm start
open http://localhost:3000
```

### Sources

* Base project forked from @gaeron's [react-hot-boilerplate](https://github.com/gaearon/react-hot-boilerplate)
* Flux design based on facebook's [flux-todomvc](https://github.com/facebook/flux/tree/f21c43e2864c62c8043df3d48b4540d3705c3d00/examples/flux-todomvc)

### Structure

`Contestant` is our primary resource.

Each Contestant has the following properties

* id // an auto incrementing integer id
* name // the name of the contestant

`ContestantStore` is our interface to load and be notified of changes to Contestants

* ContestantStore.getAll() // loads all contestants
* ContestantStore.addChangeListener(callback) // fires the callback on change
* ContestantStore.removeChangeListener(callback) // remove the callback

`ContestantActions` is how we fire off actions on the Contestant resource

* ContestantActions.create(object) // sends a new object to be created
* ContestantActions.destroy(id) // deletes a Contestant from the store

`ContestantConstants` stores the canonical names of events, for use with the dispatcher

* ContestantConstants.CONTESTANT_CREATE // the actionType for creating
* ContestantConstants.CONTESTANT_DESTROY // the actionType for destroying

`AppDispatcher` is our primary event hub

* ContestantActions fires events into the Dispatcher
* ContestantStore subscribes to events from the Dispatcher

`ContestantList` is our primary component

* it loads data from `ContestantStore`
* it listens to changes from `ContestantStore`
* it displays the data as a list

<pre>
scripts/
  actions/
    ContestantActions.js
  components/
    App.js
    Contestant.js
    ContestantForm.js
    ContestantList.js
  constants/
    ContestantConstants.js
  dispatcher/
    AppDispatcher.js
  stores/
    ContestantStore.js
</pre>
