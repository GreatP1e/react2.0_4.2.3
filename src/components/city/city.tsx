import { Input, InputBase, Combobox, useCombobox, Card } from "@mantine/core";
import { IconLocation } from "../../shared/Icons";
import { City as CityType } from "../../types";
import { useAppDispatch, useAppSelector } from "../../hooks/reduxHooks";
import { setCity } from "../../reducer/reducer";

export const City = () => {
  const combobox = useCombobox({
    onDropdownClose: () => combobox.resetSelectedOption(),
  });
  const { city } = useAppSelector((state) => state.searchParams);
  const dispatch = useAppDispatch();
  const cities = [CityType.ALL, CityType.MOSCOW, CityType.SPB];

  const options = cities.map((item) => (
    <Combobox.Option value={item} key={item}>
      {item}
    </Combobox.Option>
  ));

  return (
    <Card radius="md">
      <Combobox
        store={combobox}
        onOptionSubmit={(val) => {
          dispatch(setCity(val as CityType));
          combobox.closeDropdown();
        }}>
        <Combobox.Target>
          <InputBase
            data-testid="city-input"
            component="button"
            type="button"
            pointer
            leftSection={<IconLocation />}
            rightSection={<Combobox.Chevron />}
            rightSectionPointerEvents="none"
            onClick={() => combobox.toggleDropdown()}>
            {city === "1" && CityType.MOSCOW}
            {city === "2" && CityType.SPB}
            {!city && <Input.Placeholder>Все города</Input.Placeholder>}
          </InputBase>
        </Combobox.Target>

        <Combobox.Dropdown>
          <Combobox.Options data-testid="city-options">
            {options}
          </Combobox.Options>
        </Combobox.Dropdown>
      </Combobox>
    </Card>
  );
};
