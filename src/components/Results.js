import React from 'react'
import Result from './Result';

 function Results({results, openDetail}) {
  return (
    <section className="results">
        {typeof results != "undefined" ? (
            results.map((result)=>(
                <Result
                key={result.imdbID} result={result}
                openDetail={openDetail}/>
            ))
        ):(
            <div className="not-found">
                <h2>sorry movie not found</h2>
                <h2>
                    check other nmovies
                </h2>
            </div>
        )}
    </section>
  )
}
export default Results;
