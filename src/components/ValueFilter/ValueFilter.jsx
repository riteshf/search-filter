import { Checkbox, Stack } from "@chakra-ui/react";
import React from "react";

export const ValueFilter = ({ headLabel = "", labelOptions, values = [] }) => {
  if (Array.isArray(values)) {
    return (
      <Stack spacing={5} direction="column">
        {values?.map((value, index) => (
          <Checkbox key={index} colorScheme="blue" value={value.key}>
            {value.label}
          </Checkbox>
        ))}
      </Stack>
    );
  } else {
    return <div />;
  }
};
