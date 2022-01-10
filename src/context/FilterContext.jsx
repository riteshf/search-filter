import React, { createContext, useState, useEffect } from "react";
export const FilterContext = createContext();

export const FilterProvider = ({ children, options }) => {
  const filterMenu = options.filter_menu;
  const nomanclature = options.common_filter_values;
  const [selections, setSelections] = useState({});

  const clearLabelSelections = (label) => {
    setSelections({
      ...selections,
      [label]: [],
    });
  };
  useEffect(() => {
    const s = Object.keys(options).reduce((acc, crr) => {
      acc[crr] = [];
      return acc;
    }, {});
    setSelections(s);
  }, [options]);

  return (
    <FilterContext.Provider
      value={{ selections, filterMenu, nomanclature, clearLabelSelections }}
    >
      {children}
    </FilterContext.Provider>
  );
};
