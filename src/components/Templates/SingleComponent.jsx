import { useLocation } from "react-router";
import { ComponentsMap } from "./ComponentsMap";
export default function SingleComponent() {
  const location = useLocation();
  const Component = ComponentsMap[location.state.component];
  const componentProps = location.state.props;
  return (
    <div>
      {Component ? <Component {...componentProps} /> : "Error, Try again"}
    </div>
  );
}
