import React, { useContext } from "react";
import {
  Accordion,
  AccordionItem,
  AccordionButton,
  AccordionPanel,
  AccordionIcon,
  Box,
} from "@chakra-ui/react";
import { LabelFilter } from "../LabelFilter/LabelFilter";
import { FilterContext } from "../../context/FilterContext";

export const SearchOptions = () => {
  const { selections, filterMenu } = useContext(FilterContext);
  const accordianLabels = Object.keys(filterMenu);

  return (
    <Accordion allowMultiple bgColor="gray.50">
      {accordianLabels.map((label, index) => (
        <AccordionItem key={index}>
          <h2>
            <AccordionButton
              p={4}
              _focus={{
                boxShadow: "none",
              }}
            >
              <Box
                flex="1"
                textAlign="left"
                textTransform="uppercase"
                textColor={
                  selections[label] && selections[label].length > 0
                    ? "blue"
                    : "black"
                }
              >
                {label}
              </Box>
              <AccordionIcon />
            </AccordionButton>
          </h2>
          <AccordionPanel p={2} bgColor="gray.100">
            <LabelFilter
              headLabel={label}
              labels={filterMenu[label]?.labels}
              values={filterMenu[label]?.values}
            />
          </AccordionPanel>
        </AccordionItem>
      ))}
    </Accordion>
  );
};
