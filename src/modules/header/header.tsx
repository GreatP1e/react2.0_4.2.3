import { AppShellHeader, Flex, Group, Image, Text } from "@mantine/core";
import logo from "../../assets/icons/logo.svg";
import user from "../../assets/icons/user.svg";

import style from "./header.module.css";

export const Header = () => (
  <AppShellHeader pl={20} bg="myWhite">
    <Flex justify="space-between" align="center" w="50%" h={60}>
      <Group>
        <Image src={logo} alt="logo" w={30} h={30} />
        <Text size="md" fw={600}>
          .FrontEnd
        </Text>
      </Group>
      <Group gap={5} className={style.center}>
        <Text size="sm" className={style.dot} mr={35}>
          Вакансии FE
        </Text>
        <Image src={user} alt="user" w={30} h={30} />
        <Text size="sm" c="myGrey.3">
          Обо мне
        </Text>
      </Group>
    </Flex>
  </AppShellHeader>
);
