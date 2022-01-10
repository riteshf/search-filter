import React from "react";
import { Checkbox, Stack } from "@chakra-ui/react";
import { ColorPicker } from "./ColorPicker/ColorPicker";

export const ValueFilter = ({ headLabel = "", labelOptions, values = {} }) => {
  if (Object.keys(values).length > 0) {
    if (headLabel === "color") {
      return <ColorPicker values={values} />;
    } else {
      return (
        <Stack spacing={5} direction="column">
          {values?.map((value, index) => (
            <Checkbox key={index} colorScheme="blue" value={value.key}>
              {value.label}
            </Checkbox>
          ))}
        </Stack>
      );
    }
  } else {
    return <div />;
  }
};
