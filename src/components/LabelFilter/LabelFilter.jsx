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

export const LabelFilter = ({ data = [] }) => {
  if (data.length === 0) {
    return <div />;
  }

  return (
    <Accordion allowMultiple bgColor="gray.200">
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
              <AccordionPanel p={0} bgColor="gray.300">
                {labelOption.type === "string" && (
                  <StringFilter labelOption={labelOption} />
                )}
              </AccordionPanel>
            </>
          )}
        </AccordionItem>
      ))}
    </Accordion>
  );
};
