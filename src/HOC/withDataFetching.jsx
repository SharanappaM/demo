import React, { useEffect, useState } from "react";
import axios from "axios";

function withDataFetching(WrappedComponent, apiUrl) {
  return function WithDataFetchingComponent(props) {
    const [data, setData] = useState([]);
    const [loading, setLoading] = useState(true);
    const [error, setError] = useState(null);

    useEffect(() => {
      let isMounted = true; // prevent state updates if component is unmounted

      axios.get(apiUrl)
      .then(res=>{
        if(isMounted){
            setData(res.data)
            setLoading(false);
        }
      }).catch(err=>{
        if(isMounted){
            setError(err.message)
            setLoading(false);
        }
      })

    //   fetchData();

      return () => {
        isMounted = false; // cleanup to avoid memory leaks
      };
    }, [apiUrl]);

    return (
      <WrappedComponent
        {...props}
        data={data}
        loading={loading}
        error={error}
      />
    );
  };
}

export default withDataFetching;
