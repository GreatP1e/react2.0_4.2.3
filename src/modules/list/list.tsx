import { Center, Flex, Pagination } from "@mantine/core";
import { JobCard } from "../../components/jobCard";
import { useAppDispatch, useAppSelector } from "../../hooks/reduxHooks";
import { fetchVacancies } from "../../reducer/thunk";

export const List = () => {
  const { vacancies, pages, page } = useAppSelector((state) => state.vacancies);
  const { city, skills, search } = useAppSelector(
    (state) => state.searchParams
  );
  const dispatch = useAppDispatch();
  const handlerChange = (value: number) => {
    dispatch(fetchVacancies({ search, city, skills, page: value - 1 }));
  };
  return (
    <Flex direction="column" w="70%" gap={20} data-testid="list">
      {vacancies.map((vacancy) => (
        <JobCard key={vacancy.id} {...vacancy} />
      ))}
      <Center>
        <Pagination
          total={pages}
          color="myGrey.2"
          radius="xs"
          withEdges
          value={page + 1}
          onChange={handlerChange}
          data-testid="pagination"
        />
      </Center>
    </Flex>
  );
};
