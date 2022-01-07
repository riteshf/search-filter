import React from "react";
import {
  Accordion,
  AccordionButton,
  AccordionItem,
  AccordionPanel,
  Box,
  Icon,
} from "@chakra-ui/react";
import { MdAdd, MdMinimize } from "react-icons/md";

import { StringFilter } from "./StringFilter/StringFilter";
import { DateFilter } from "./DateFilter/DateFilter";
import { NumberFilter } from "./NumberFilter/NumberFilter";

export const LabelFilter = ({ data = [] }) => {
  if (data.length === 0) {
    return <div />;
  }

  return (
    <Accordion allowToggle bgColor="gray.200">
      {data.map((labelOption, index) => (
        <AccordionItem key={index}>
          {({ isExpanded }) => (
            <>
              <h2>
                <AccordionButton
                  _focus={{
                    boxShadow: "none",
                  }}
                >
                  <Box flex="1" textAlign="left" aria-hidden>
                    {labelOption.label}
                  </Box>
                  {isExpanded ? (
                    <Icon as={MdMinimize} fontSize="12px" />
                  ) : (
                    <Icon as={MdAdd} fontSize="12px" />
                  )}
                </AccordionButton>
              </h2>
              <AccordionPanel p={2} bgColor="gray.300">
                {labelOption.type === "string" && (
                  <StringFilter labelOption={labelOption} />
                )}
                {labelOption.type === "date" && (
                  <DateFilter labelOption={labelOption} />
                )}
                {labelOption.type === "numeric" && (
                  <NumberFilter labelOption={labelOption} />
                )}
              </AccordionPanel>
            </>
          )}
        </AccordionItem>
      ))}
    </Accordion>
  );
};
