import { Accessor, createSignal, onMount, Setter } from "solid-js";
import { Selector } from "../Selector";
import {IMonthSelectorType, Locale, IColors, MakeOptionalRequired, DateObjectUnits} from "../../interface/general";

interface MonthSelectorProps extends IColors {
  month: Accessor<number>;
  setMonth: Setter<number>;
  ref?: Setter<HTMLDivElement | undefined>;
  type?: IMonthSelectorType;
  zIndex?: number;
  locale?: Locale;
  minDate?: MakeOptionalRequired<DateObjectUnits>;
  maxDate?: MakeOptionalRequired<DateObjectUnits>;
  year?: Accessor<number>;
  twoMonthsDisplay?: boolean;
}
export const MonthSelector = (props: MonthSelectorProps) => {
  const [monthArray, setMonthArray] = createSignal<string[]>([]);

  onMount(() => {
    const months = Array.from({ length: 12 }, (e, i) => {
      return new Date(0, i + 1, 0).toLocaleDateString(props.locale || "en", {
        month: props.type || "short",
      });
    });
    setMonthArray(months);
  });

  return (
    <Selector
      {...props}
      optionsArray={monthArray()}
      option={props.month}
      setOption={props.setMonth}
      ref={props.ref}
      gridTemplateColumnsNo={props.type === "long" ? "3" : "6"}
      attributes={{
        "data-month": "true",
      }}
      className={"month-selector-option"}
      zIndex={props.zIndex}
      primaryColor={props.primaryColor}
      primaryTextColor={props.primaryTextColor}
      secondaryColor={props.secondaryColor}
      secondaryTextColor={props.secondaryTextColor}
      twoMonthsDisplay={props.twoMonthsDisplay}
    />
  );
};
