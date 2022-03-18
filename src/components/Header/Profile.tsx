import { Avatar, Box, Flex, Text } from "@chakra-ui/react";

interface ProfileProps {
  showProfileData?: boolean;
}

export function Profile({ showProfileData = true }: ProfileProps) {
  return (
    <Flex align={"center"}>
      {showProfileData && (
        <Box mr="4" textAlign={"right"}>
          <Text>Agnaldo Cordeiro</Text>
          <Text color={"gray.300"} fontSize="small">
            agske13@gmail.com
          </Text>
        </Box>
      )}
      <Avatar
        size={"md"}
        name="Agnaldo Cordeiro"
        src="https://github.com/AgnaldoCordeiro.png"
      />
    </Flex>
  );
}
