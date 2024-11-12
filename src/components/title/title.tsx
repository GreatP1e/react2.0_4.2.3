import { Text, Flex, Title as MantineTitle } from "@mantine/core";
export const Title = () => (
  <Flex direction="column">
    <MantineTitle order={1}>Список вакансий</MantineTitle>
    <Text c="myGrey.3">по профессии Frontend-разработчик</Text>
  </Flex>
);
