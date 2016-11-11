//holds directoryTable view and FilterUsers view
import {Component} from 'react';
import FilterUsers from './FilterUsers';
import DirectoryTable from './DirectoryTable';

export default class Directory extends Component {
  render(){
    return (
      <div>
        <h1>directory says hi</h1>
        <FilterUsers />
        <DirectoryTable />
      </div>
    )
  }
}

//do we see Filter Users?
//Add in DirectoryTable
//review pluralsite when you connect a component to the store
//break out directoryTable into it's own folder
