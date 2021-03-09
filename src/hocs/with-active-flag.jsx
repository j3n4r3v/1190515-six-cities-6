import React, {useState} from "react";

const withActiveFlag = (Component, status = false) => {

  const WithActiveFlag = (props) => {

    const [data, changeData] = useState({
      isActive: status
    });

    const handleActiveChange = () => {
      useState((prevState) => ({isActive: !prevState.isActive}));
    };

    return (
      <Component
        {... props}
        isActive={useState.isActive}
        onActiveChange={handleActiveChange}
      />
    );
  };

  return WithActiveFlag;
};

export default withActiveFlag;
