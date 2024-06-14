import React, { useState } from "react";
import {
  Box,
  Text,
  Button,
  ButtonGroup,
  Flex,
  HStack,
  Input,
  Stack,
  useDisclosure,
} from "@chakra-ui/react";
import ModalComponent from "@/components/ModalComponent";
import { COLORS } from "@/constants/theme";
import { GrCircleQuestion } from "react-icons/gr";
import CustomTooltip from "@/components/CustomTooltip";
import { RiListSettingsLine } from "react-icons/ri";

export function SwapSettings() {
  const { isOpen, onOpen, onClose } = useDisclosure();
  const [activeButton, setActiveButton] = useState<string>("auto");

  return (
    <>
      <Button
        onClick={onOpen}
        fontWeight="500"
        bg={COLORS.btnBGGradient}
        borderRadius="8px"
        color={COLORS.tabTextColor}
        style={{
          border: "1px solid",
          borderImage: `${COLORS.borderImageColor}`,
          borderRadius: "8px",
        }}
        _hover={{
          bg: `${COLORS.btnBGGradient}`,
          border: "1px solid",
          borderImage: `${COLORS.borderImageColor}`,
        }}
      >
        <RiListSettingsLine color={COLORS.settingIconColor} size="15px" />
      </Button>

      {/* ----------------------- Sweep Setting UI ------------------------- */}
      <ModalComponent
        isOpen={isOpen}
        onClose={onClose}
        closeOnOverlayClick={false}
        modalContentStyle={{
          background: "#FDFDFD33",
          borderRadius: "16px",
          border: `1px solid ${COLORS.borderColor}`,
          boxShadow: "#E9C7EA4D",
        }}
      >
        <Stack>
          {/* ----------------- Threshold ------------------------ */}
          <Box>
            <HStack>
              <Text
                color="#281629"
                fontSize="14px"
                fontWeight={500}
                lineHeight="16.8px"
              >
                Threshold
              </Text>
              <Box>
                <CustomTooltip label="coming soon">
                  <GrCircleQuestion color="#C9BCCA" size="13.3px" />
                </CustomTooltip>
              </Box>
            </HStack>

            <Input
              backgroundColor="#FBFDFE"
              mt="8px"
              border={`1px solid ${COLORS.borderColor}`}
              borderRadius="12px"
              _focus={{
                border: `1px solid ${COLORS.borderColor}`,
                outline: "none",
                boxShadow: "none",
              }}
              placeholder="$30"
              textAlign="right"
            />
          </Box>

          {/* ----------------- Maximum Slippage ------------------------ */}
          <Box mt="24px">
            <HStack>
              <Text
                color="#281629"
                fontSize="14px"
                fontWeight={500}
                lineHeight="16.8px"
              >
                Maximum Slippage
              </Text>
              <Box>
                <CustomTooltip label="coming soon">
                  <GrCircleQuestion color="#C9BCCA" size="13.3px" />
                </CustomTooltip>
              </Box>
            </HStack>

            <HStack mt="8px">
              <ButtonGroup
                border={`1px solid ${COLORS.borderColor}`}
                borderRadius="12px"
                background="#FAF6FD"
                p="6px 6.5px 6px 6.5px"
              >
                <Button
                  width="50px"
                  height="27px"
                  fontSize="14px"
                  bg={activeButton === "auto" ? "#E2E8EC" : "transparent"}
                  color={activeButton === "auto" ? "black" : "black"}
                  fontWeight={500}
                  onClick={() => setActiveButton("auto")}
                  _hover={{ bg: "#E2E8EC" }}
                >
                  Auto
                </Button>
                <Button
                  width="65px"
                  height="27px"
                  fontSize="14px"
                  bg={activeButton === "custom" ? "#E2E8EC" : "transparent"}
                  color={activeButton === "custom" ? "black" : "black"}
                  fontWeight={500}
                  onClick={() => setActiveButton("custom")}
                  _hover={{ bg: "#E2E8EC" }}
                >
                  Custom
                </Button>
              </ButtonGroup>

              <Input
                backgroundColor="#B5B4C6"
                border={`1px solid ${COLORS.borderColor}`}
                borderRadius="12px"
                _focus={{
                  border: `1px solid ${COLORS.borderColor}`,
                  outline: "none",
                  boxShadow: "none",
                }}
                color="#917193"
                placeholder="0.5%"
              />
            </HStack>
          </Box>

          {/* ----------------- Transaction deadline ------------------------ */}
          <Box mt="16px">
            <HStack>
              <Text
                color="#281629"
                fontSize="14px"
                fontWeight={500}
                lineHeight="16.8px"
              >
                Transaction deadline
              </Text>
              <Box>
                <CustomTooltip label="coming soon">
                  <GrCircleQuestion color="#C9BCCA" size="13.3px" />
                </CustomTooltip>
              </Box>
            </HStack>

            <Input
              backgroundColor="#FBFDFE"
              mt="8px"
              border={`1px solid ${COLORS.borderColor}`}
              borderRadius="12px"
              _focus={{
                border: `1px solid ${COLORS.borderColor}`,
                outline: "none",
                boxShadow: "none",
              }}
              placeholder="5"
              textAlign="right"
            />
          </Box>

          <Button
            mt="25px"
            borderRadius="8px"
            h="40px"
            background={COLORS.btnGradient}
            fontWeight={400}
            color="white"
            _hover={{
              bg: `${COLORS.btnGradient}`,
              color: "white",
            }}
            onClick={onClose}
          >
            Update
          </Button>
        </Stack>
      </ModalComponent>
    </>
  );
}
