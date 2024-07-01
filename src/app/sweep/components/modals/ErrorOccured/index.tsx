"use client";

import React from "react";
import {
  Stack,
  Flex,
  Box,
  Image,
  Text,
  Button,
  ModalCloseButton,
} from "@chakra-ui/react";
import Link from "next/link";
import ModalComponent from "@/components/ModalComponent";

const ErrorOccured = ({
  isOpen,
  onClose,
}: {
  isOpen: boolean;
  onClose: () => void;
}) => {
  return (
    <ModalComponent
      closeOnOverlayClick={false}
      isOpen={isOpen}
      onClose={onClose}
    >
      <ModalCloseButton
        _hover={{
          bg: "none",
        }}
      />
      <Stack w="100%">
        <Flex justify="center" alignItems="center" flexDir="column">
          <Image src="/image/error_info_icon.png" w={"100px"} alt="an image" />

          <Box w={"100%"} textAlign="center">
            <Text fontWeight={600} mt="10px" fontSize="18px" color="#0D0D0D">
              An Error has occured
            </Text>
            <Text as="span" color="#E2001B" fontSize="14px">
              “Unknown Error” Error: Chain ID unsupported{" "}
            </Text>

            <Button
              mt="25px"
              w="100%"
              color="#FDFDFD"
              bgColor="#E2001B"
              border="1px solid #F6EEFC"
              _hover={{
                bgColor: "#E2001B",
              }}
              fontWeight={400}
              fontSize="16px"
              h="48px"
              onClick={onClose}
            >
              Dismiss
            </Button>
          </Box>
        </Flex>
      </Stack>
    </ModalComponent>
  );
};

export default ErrorOccured;
