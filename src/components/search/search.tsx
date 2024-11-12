import { Button, Group, TextInput } from "@mantine/core";
import { IconSearch } from "../../shared/Icons";
import styles from "./search.module.css";
import { useForm } from "@mantine/form";
import { useAppDispatch, useAppSelector } from "../../hooks/reduxHooks";
import { setSearch } from "../../reducer/reducer";
import { fetchVacancies } from "../../reducer/thunk";

export const Search = () => {
  const { city, skills } = useAppSelector((state) => state.searchParams);
  const dispatch = useAppDispatch();
  const form = useForm({
    mode: "uncontrolled",
    initialValues: {
      search: "",
    },
  });

  const handlerSubmit = ({ search }: { search: string }) => {
    dispatch(setSearch(search));
    dispatch(fetchVacancies({ search, city, skills, page: 0 }));
  };
  return (
    <form onSubmit={form.onSubmit(handlerSubmit)}>
      <Group>
        <TextInput
          required
          variant="unstyled"
          w={400}
          leftSection={<IconSearch />}
          placeholder="Должность или название компании"
          className={styles.input}
          key={form.key("search")}
          {...form.getInputProps("search")}
        />
        <Button type="submit">Найти</Button>
      </Group>
    </form>
  );
};
