import React, {useState} from "react";

const withActiveFlag = (Component) => {

  const WithActiveFlag = (props) => {

    const [isOpen, setIsOpen] = useState(true);

    const handleActiveChange = () => {
      setIsOpen(!isOpen);
    };

    return (
      <Component
        {... props}
        isActiveOption={isOpen}
        onActiveChange={() => handleActiveChange()}
      />
    );
  };

  return WithActiveFlag;
};

export default withActiveFlag;
