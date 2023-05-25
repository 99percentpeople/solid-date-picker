import { Component, createSignal, For, onMount } from "solid-js";
import { DatePickerWeek } from "../DatePickerWeek";
import { DatePickerDay } from "../DatePickerDay";
import { IColors, Locale, WeekDaysType } from "../../interface/general";

interface IProps extends IColors {
  locale?: Locale;
  weekDaysType?: WeekDaysType;
}
export const WeekDays: Component<IProps> = (props) => {
  const [weekDaysArray, setWeekDaysArray] = createSignal<Array<string>>([]);

  onMount(() => {
    const dayNames = Array.from({ length: 7 }, (e, i) => {
      const weekDay = new Date(0, 0, i - 1 + 1).toLocaleDateString(
        props.locale || "en",
        {
          weekday: "short",
        }
      );
      if (props.weekDaysType === "single") {
        return weekDay[0];
      } else {
        return weekDay;
      }
    });
    setWeekDaysArray(dayNames);
  });
  return (
    <DatePickerWeek>
      <For each={weekDaysArray()}>
        {(day) => (
          <DatePickerDay weekDaysNameColor={props.weekDaysNameColor} header>
            {day}
          </DatePickerDay>
        )}
      </For>
    </DatePickerWeek>
  );
};
