import React, { useContext } from "react";
import {
  Accordion,
  AccordionButton,
  AccordionItem,
  AccordionPanel,
  Box,
  Icon,
  Tag,
  TagLabel,
  TagLeftIcon,
} from "@chakra-ui/react";
import { MdAdd, MdClose, MdMinimize } from "react-icons/md";

import { StringFilter } from "./StringFilter/StringFilter";
import { DateFilter } from "./DateFilter/DateFilter";
import { NumberFilter } from "./NumberFilter/NumberFilter";
import { ValueFilter } from "../ValueFilter/ValueFilter";
import { FilterContext } from "../../context/FilterContext";

export const LabelFilter = ({ headLabel = "", labels = [], values = {} }) => {
  const { selections } = useContext(FilterContext);
  if (labels.length === 0) {
    return <ValueFilter headLabel={headLabel} values={values} />;
  }

  return (
    <Accordion allowMultiple bgColor="gray.200">
      {labels.map((labelOption, index) => (
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
                  {selections[headLabel] &&
                    selections[headLabel].includes(labelOption.label) && (
                      <Tag
                        size="xs"
                        variant="subtle"
                        colorScheme="gray"
                        borderRadius={8}
                        px={2}
                      >
                        <TagLeftIcon boxSize="12px" as={MdClose} />
                        <TagLabel>CLEAR</TagLabel>
                      </Tag>
                    )}
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
                <ValueFilter
                  headLabel={headLabel}
                  labelOption={labelOption}
                  values={values[labelOption.key]}
                />
              </AccordionPanel>
            </>
          )}
        </AccordionItem>
      ))}
    </Accordion>
  );
};
