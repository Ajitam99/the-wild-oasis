import TableOperations from "../../ui/TableOperations";
import Filter from "../../ui/Filter";
import SortBy from "../../ui/SortBy";

function CabinTableOperations() {
  return (
    <div>
      <TableOperations>
        <Filter
          filterField="discount"
          options={[
            { value: "all", label: "All" },
            { value: "no-discount", label: "No discount" },
            { value: "with-discount", label: "With discount" },
          ]}
        />
        <SortBy
          options={[
            { value: "name-as", label: "Sort by name A-Z" },
            { value: "name-desc", label: "Sort by name Z-A" },
            { value: "regularPrice-asc", label: "Sort by price (low first)" },
            { value: "regularPrice-desc", label: "Sort by price (high first)" },
            {
              value: "maxCapacity-asc",
              label: "Sort by capacity (low first)",
            },
            {
              value: "maxCapacity-desc",
              label: "Sort by capacity (high first)",
            },
          ]}
        />

        {/*     <SortBy options={[{ value: "name-as", label: "Sort by name A-Z" }]} />
        <SortBy options={[{ value: "name-desc", label: "Sort by name Z-A" }]} />
        <SortBy
          options={[
            { value: "regularPrice-asc", label: "Sort by price (low first)" },
          ]}
        />
        <SortBy
          options={[
            { value: "regularPrice-desc", label: "Sort by price (high first)" },
          ]}
        />
        <SortBy
          options={[
            {
              value: "maxCapacity-asc",
              label: "Sort by capacity (low first)",
            },
          ]}
        />
        <SortBy
          options={[
            {
              value: "maxCapacity-desc",
              label: "Sort by capacity (high first)",
            },
          ]}
        /> */}
      </TableOperations>
    </div>
  );
}

export default CabinTableOperations;
