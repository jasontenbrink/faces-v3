export default function reducer(state={
    member: {
      id: null,
      name: 'Jason',
      age: null,
    },
    fetching: false,
    fetched: false,
    error: null,
  }, action) {

    switch (action.type) {
      case "FETCH_MEMBER": {
        //return a new state object with an updated property
        return {...state, fetching: true}
      }
    }

    //if no actions taken, return original state object
    return state
}
