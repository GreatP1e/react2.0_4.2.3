import {
  Badge,
  Button,
  Card,
  Flex,
  Group,
  Space,
  Text,
  Title,
} from "@mantine/core";
import { Vacancy } from "../../types";
import { formatSalary } from "../../utils/formatSalary";

export const JobCard = ({
  name,
  area,
  salary,
  experience,
  employer,
  alternate_url,
}: Vacancy) => (
  <Card radius="md">
    <Flex direction="column">
      <Title order={2} c="myIndigo.9">
        {name}
      </Title>
      <Group>
        {salary && (
          <Text c="myBlack" size="md" lh="lg">
            {formatSalary(salary)}
          </Text>
        )}
        <Text c="myGrey.3" size="sm" lh="lg">
          {experience.name}
        </Text>
      </Group>
      <Space h={15} />
      <Text c="myGrey.3" size="sm" lh="lg">
        {employer.name}
      </Text>
      <Space h={5} />
      <Badge size="xs" bg="myIndigo.7" c="myWhite" radius="xs">
        Можно удалённо
      </Badge>
      <Space h={3} />
      <Text c="myBlack" size="md" lh="lg">
        {area.name}
      </Text>
      <Space h={15} />
      <Group align="center" w="100%" gap={10}>
        <Button bg="myBlack" c="myWhite" fw={500}>
          Смотреть вакансию
        </Button>
        <Button
          component="a"
          href={alternate_url}
          target="_blank"
          bg="myGrey.0"
          c="myBlack"
          fw={500}>
          Откликнуться
        </Button>
      </Group>
    </Flex>
  </Card>
);
