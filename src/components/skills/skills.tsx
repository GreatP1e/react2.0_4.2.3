import { useAppDispatch, useAppSelector } from "../../hooks/reduxHooks";
import { useForm } from "@mantine/form";
import {
  BackgroundImage,
  Button,
  Card,
  Group,
  Pill,
  Space,
  Text,
  TextInput,
} from "@mantine/core";
import { addSkill, dellSkill } from "../../reducer/reducer";
import plus from "../../assets/icons/plus.svg";

export const Skills = () => {
  const { skills } = useAppSelector((state) => state.searchParams);
  const dispatch = useAppDispatch();
  const handlerSubmit = ({ skill }: { skill: string }) => {
    dispatch(addSkill(skill));
    form.reset();
  };
  const form = useForm({
    mode: "uncontrolled",
    initialValues: {
      skill: "",
    },
  });
  return (
    <Card radius="md" data-testid="skills">
      <Text>Ключевые навыки</Text>
      <form onSubmit={form.onSubmit(handlerSubmit)}>
        <Group gap={20} wrap="nowrap">
          <TextInput
            required
            withAsterisk
            radius="sm"
            key={form.key("skill")}
            placeholder="Навык"
            {...form.getInputProps("skill")}
          />
          <Button
            type="submit"
            bg="myIndigo.3"
            w={34}
            h={30}
            radius="sm"
            data-testid="skill-add-btn">
            <BackgroundImage
              src={plus}
              pos="absolute"
              left="30%"
              w="15px"
              h="15px"
            />
          </Button>
        </Group>
      </form>
      <Space h={20} />
      <Pill.Group data-testid="skills-group">
        {skills.map((skill, index) => (
          <Pill
            key={index}
            withRemoveButton
            data-testid="skill"
            onRemove={() => dispatch(dellSkill(index))}
            removeButtonProps={{ "data-testid": "skill-remove-btn" } as any}>
            {skill}
          </Pill>
        ))}
      </Pill.Group>
    </Card>
  );
};
