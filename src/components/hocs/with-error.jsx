import React, {useEffect} from "react";
import {useSelector, useDispatch} from "react-redux";

import Error from "../../components/error/error";

import {ERROR_TIMEOUT} from "../../const";

import {setIsError} from "../../store/actions";

const withError = (Component) => {
  const WithError = (props) => {
    const dispatch = useDispatch();
    const {isError} = useSelector((state) => state.MAIN);

    useEffect(() => {
      if (isError) {
        setTimeout(() => dispatch(setIsError(false)), ERROR_TIMEOUT);
      }
    }, [isError]);

    return (
      <>
        {
          isError && <Error />
        }
        <Component {...props} />
      </>
    );
  };

  return WithError;
};

export default withError;
