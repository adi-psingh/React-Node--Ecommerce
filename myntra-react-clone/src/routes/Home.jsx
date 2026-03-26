import HomeItem from "../components/HomeItem";
import { useSelector } from "react-redux";

export default function Home() {
  const items = useSelector((store) => store.items);

  console.log("ITEMS:", items);
  return (
    <>
      <main>
        <div className="company-name">TEST DEBUG</div>
        <div className="items-container">
          {items.map((item) => {
            console.log("ITEM:", item);
            return <HomeItem key={item.id} item={item} />;
          })}
        </div>
      </main>
    </>
  );
}
