import CheckBoxes from "../components/CheckBoxes";
import LocalStorageComponent from "../components/LocalStorageComponent";
import StateButton from "../components/StateButton";

export default function ShopPage() {
  return (
    <div className="p-6 flex-col space-y-7  h-[calc(100dvh)]">
      <h1>Shop Page</h1>
      <CheckBoxes />
      <StateButton />
      <LocalStorageComponent />
    </div>
  );
}
