import { AppShellMain, Divider, Flex, Group, Space } from "@mantine/core";
import { Title } from "../../components/title";
import { Search } from "../../components/search";
import { Skills } from "../../components/skills";
import { City } from "../../components/city";
import { List } from "../list";

export const Main = () => (
  <AppShellMain px={20}>
    <Space h={84} />
    <Group justify="space-between" maw={1000} mx="auto">
      <Title />
      <Search />
    </Group>
    <Space h={20} />
    <Divider />
    <Space h={20} />
    <Group justify="space-between" maw={1000} mx="auto" align="start">
      <Flex maw="28%" direction="column">
        <Skills />
        <Space h={10} />
        <City />
      </Flex>
      <List />
    </Group>
  </AppShellMain>
);
