import { Box, Button, VStack, Text, HStack } from "@chakra-ui/react";
import React, { useEffect, useRef, useState } from "react";
import TokenSelectListRow from "./token-select-row";
import { useBalances } from "@/hooks/balances/useBalances";
import { useAccount } from "wagmi";
import { useAppSelector } from "@/hooks/rtkHooks";
import { RootState } from "@/store/store";
import { useWalletsPortfolio } from "@/hooks/useMobula";
import { AssetClass } from "@/utils/classes";

function TokenSelectList() {
  const { address } = useAccount();

  const { data, error, loading } = useWalletsPortfolio();
  const [userWalletTokens, setUserWalletTokens] = useState<AssetClass[]>([]);

  useEffect(() => {
    if (data) {
      setUserWalletTokens(data.assets);
    }
  }, [data]);

  const xxx = useBalances({
    account: address ?? "",
  });

  // useEffect(() => {}, []);
  // const userWalletTokens = useAppSelector(
  //   (state: RootState) => state.SweepTokensSlice.userWalletTokens,
  // );

  return (
    <VStack
      borderTop="1px solid #F7E5F7"
      width="100%"
      height="341px"
      px="1rem"
      pb="1.4rem"
      overflowY="scroll"
      // ref={vStackRef}
      gap="12px"
    >
      <HStack
        fontSize="smaller"
        padding="0.5rem"
        color="#9E829F"
        justifyContent="space-between"
        width="100%"
      >
        <Text>Tokens</Text> <Text>Value</Text>
      </HStack>
      {/* <Button onClick={handleHeightCheck}>{_height ? _height : "e"}</Button> */}
      {userWalletTokens?.map((token, i) => {
        return (
          <Box key={i} width="100%">
            <TokenSelectListRow token={token} />
          </Box>
        );
      })}
    </VStack>
  );
}

export default TokenSelectList;
