import React, {useState} from "react";

const withActiveFlag = (Component) => {

  const WithActiveFlag = (props) => {

    const [isOpen, setIsOpen] = useState(false);

    const handleActiveChange = () => {
      setIsOpen(!isOpen);
    };

    return (
      <Component
        {... props}
        isActiveOptions={useState.isOpen}
        onActiveChange={handleActiveChange}
      />
    );
  };

  return WithActiveFlag;
};

export default withActiveFlag;
