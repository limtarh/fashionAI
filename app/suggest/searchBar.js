"use client"

import {useState,useDeferredValue} from 'react';
import runQuery from './query';
import SearchResult from './results'



function SearchBar() {
    const [query, setQuery] = useState("");
    const [similarity, setSimilarity] = useState(0);
  
    return (
       <>
       <input onChange={e => setQuery(e.target.value)} /> 
       <button onClick={e => runQuery(query).then((e) => {setSimilarity(e.toString())})}>
           suggest</button>
       <SearchResult similarity={similarity} />
       </>
    );
}
export default SearchBar;