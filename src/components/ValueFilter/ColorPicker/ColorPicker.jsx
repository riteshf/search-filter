import React, { useState } from "react";
import {
  Button,
  Grid,
  IconButton,
  SimpleGrid,
  Text,
  Tooltip,
} from "@chakra-ui/react";
import { MdCheck } from "react-icons/md";

export const ColorPicker = ({ values = {} }) => {
  const [selectedColors, setSelectedColors] = useState([]);

  return (
    <Grid templateRows="1fr" rowGap={2} p={2}>
      {Object.keys(values).map((key) => (
        <Grid templateColumns="1fr 3fr" key={key}>
          <Text textTransform="uppercase">
            {key}
            {" : "}
          </Text>
          <SimpleGrid columns={10} spacing={1} mb={2} position="relative">
            {values[key].map((c, index) => (
              <Tooltip label={c.label} key={c.hex_code + index}>
                {selectedColors.includes(c.hex_code) ? (
                  <IconButton
                    icon={<MdCheck />}
                    color={c.hex_code.startsWith("#00") ? "white" : "black"}
                    aria-label={c.label}
                    background={c.hex_code}
                    height="22px"
                    width="22px"
                    padding={0}
                    minWidth="unset"
                    borderRadius={3}
                    _hover={{ background: c.hex_code }}
                    onClick={() => {
                      //remove
                      const newColors = selectedColors.filter(
                        (colorCode) => colorCode !== c.hex_code
                      );
                      setSelectedColors(newColors);
                    }}
                  />
                ) : (
                  <Button
                    aria-label={c.label}
                    background={c.hex_code}
                    height="22px"
                    width="22px"
                    padding={0}
                    minWidth="unset"
                    borderRadius={3}
                    _hover={{ background: c.hex_code }}
                    onClick={() => {
                      selectedColors.push(c.hex_code);
                      setSelectedColors([...selectedColors]);
                    }}
                  />
                )}
              </Tooltip>
            ))}
          </SimpleGrid>
        </Grid>
      ))}
    </Grid>
  );
};
