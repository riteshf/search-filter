import React, { useContext, useState } from "react";
import {
  Button,
  Icon,
  Input,
  InputGroup,
  InputLeftAddon,
  Menu,
  MenuButton,
  MenuItem,
  MenuList,
} from "@chakra-ui/react";
import { FaChevronDown } from "react-icons/fa";

import { FilterContext } from "../../../context/FilterContext";

export const StringFilter = ({ labelOption = {} }) => {
  const { nomanclature } = useContext(FilterContext);
  const typeNomenclature = nomanclature[labelOption.type];
  const [select, setSelect] = useState(typeNomenclature[0]);
  return (
    <InputGroup>
      <InputLeftAddon px="0">
        <Menu>
          <MenuButton
            as={Button}
            rightIcon={<Icon as={FaChevronDown} />}
            _focus={{
              boxShadow: "none",
            }}
          >
            {select.label}
          </MenuButton>
          <MenuList>
            {typeNomenclature.map((pair, index) => (
              <MenuItem
                key={index}
                value={pair}
                onClick={() => setSelect(pair)}
              >
                {pair.label}
              </MenuItem>
            ))}
          </MenuList>
        </Menu>
      </InputLeftAddon>

      <Input
        type="string"
        bgColor="white"
        placeholder={`Search ${labelOption.label}`}
      />
    </InputGroup>
  );
};
