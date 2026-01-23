import { ComboBoxComponent } from "@syncfusion/ej2-react-dropdowns";
import { Header } from "components";
import React, { useEffect } from "react";

// export const loader = async () => {
//   const response = await fetch("https://restcountries.com/v3.1/all");
//   const data = await response.json();
//   console.log(data);
//   return data;
// };

const createTrip = () => {
  const [countries, setCountries] = React.useState<Array<any>>([]);

  const handleChange = (key: keyof TripFormData, value: string | number) => {};

  const fetchCountries = async () => {
    try {
      const response = await fetch(
        "https://restcountries.com/v3.1/all?fields=name,flag,latlng,maps"
      );
      const data = await response.json();
      console.log("Countries:", data); // ✅ browser console
      setCountries(data);
    } catch (err) {
      console.error("Failed to fetch countries", err);
    }
  };

  const handleSubmit = async () => {};

  useEffect(() => {
    fetchCountries();
  }, []);

  return (
    <main className="flex flex-col gap-10 pb-20 wrapper">
      <Header
        title="Add a new trip"
        description="View and edit AI Generated travel plans"
      ></Header>
      <section className="mt-2.5 wrapper-md">
        <form className="trip-form" onSubmit={handleSubmit}>
          <div>
            <label htmlFor="country">Country</label>
            <ComboBoxComponent
              id="country"
              dataSource={countries}
              fields={{ text: "name.common", value: "name.common" }}
              placeholder="Select a Country"
              className="combo-box"
              change={(e: { value: string | undefined }) => {
                if (e.value) {
                  handleChange("country", e.value);
                }
              }}
              allowFiltering
              filtering={(e) => {
                const query = e.text.toLowerCase();

                const filteredData = countries
                  .filter((country) =>
                    country.name.common.toLowerCase().includes(query)
                  )
                  .map((country) => ({
                    name: country.name,
                    flag: country.flag,
                    latlng: country.latlng,
                    maps: country.maps,
                  }));

                e.updateData(filteredData);
              }}
            ></ComboBoxComponent>
          </div>
        </form>
      </section>
    </main>
  );
};

export default createTrip;
