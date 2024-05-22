import React from 'react';
import ItemListContainer from './ItemListContainer';

function Home() {

  return (<div>
            <div className="container-fluid">
                <div className="row">
                    <div className="col-12 text-center">
                        <h1>Welcome</h1>
                        <ItemListContainer/>
                    </div>
                </div>
            </div>
    </div>);
}

export default Home;
