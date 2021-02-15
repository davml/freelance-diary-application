import React, { useState }from 'react';

import Layout from './components/layout/layout';

const App = () => {

    const [currentId, setCurrentId] = useState(null);

    return (
        <div>
            <Layout />
        </div>
    )
}

export default App;