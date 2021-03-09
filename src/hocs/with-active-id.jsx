import React, {useState} from "react";

const withActiveId = (Component) => {

  const WithActiveId = (props) => {

    const [activeId, setActiveId] = useState(null);

    const handleActiveIdChange = (id) => {
      setActiveId({activeId: id});
    };

    return (
      <Component
        {...props}
        activeId={activeId}
        onActiveIdChange={handleActiveIdChange}
      />
    );
  };

  return WithActiveId;
};

export default withActiveId;
