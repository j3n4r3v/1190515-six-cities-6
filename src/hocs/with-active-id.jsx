import React, {useState} from "react";

const withActiveId = (Component) => {

  const WithActiveId = (props) => {

    const [data, changeData] = useState({
      activeId: null
    });

    const handleActiveIdChange = (id) => {
      changeData(() => ({activeId: id}));
    };

    return (
      <Component
        {...props}
        activeId={useState.activeId}
        onActiveIdChange={handleActiveIdChange}
      />
    );
  };

  return WithActiveId;
};

export default withActiveId;
