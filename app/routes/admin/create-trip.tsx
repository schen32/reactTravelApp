import { ComboBoxComponent } from "@syncfusion/ej2-react-dropdowns";
import {
  LayerDirective,
  LayersDirective,
  MapsComponent,
} from "@syncfusion/ej2-react-maps";
import { Header } from "components";
import { formatKey } from "lib/utils";
import React, { useEffect } from "react";
import { comboBoxItems, selectItems } from "~/constants";
import { world_map } from "~/constants/world_map";

// export const loader = async () => {
//   const response = await fetch("https://restcountries.com/v3.1/all");
//   const data = await response.json();
//   console.log(data);
//   return data;
// };

const createTrip = () => {
  const [countries, setCountries] = React.useState<Array<any>>([]);
  const [formData, setFormData] = React.useState<TripFormData>({
    country: countries[0]?.name?.common || "",
    travelStyle: "",
    interest: "",
    budget: "",
    duration: 0,
    groupType: "",
  });

  const mapData = [
    {
      country: formData.country,
      color: "#EA382E",
      coordinates:
        countries.find((c: Country) => c.name === formData.country)
          ?.coordinates || [],
    },
  ];

  const handleChange = (key: keyof TripFormData, value: string | number) => {
    setFormData({ ...formData, [key]: value });
  };

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

          <div>
            <label htmlFor="duration">Duration</label>
            <input
              id="duration"
              name="duration"
              placeholder="Enter a number of days (5, 12, ...)"
              className="form-input placeholder:text-gray-100"
              onChange={(e) => handleChange("duration", Number(e.target.value))}
            ></input>
          </div>

          {selectItems.map((key) => (
            <div key={key}>
              <label htmlFor={key}>{formatKey(key)}</label>
              <ComboBoxComponent
                id={key}
                dataSource={comboBoxItems[key].map((item) => ({
                  text: item,
                  value: item,
                }))}
                fields={{ text: "text", value: "value" }}
                placeholder={`Select ${key}`}
                change={(e: { value: string | undefined }) => {
                  if (e.value) {
                    handleChange(key, e.value);
                  }
                }}
                allowFiltering
                filtering={(e) => {
                  const query = e.text.toLowerCase();

                  const filteredData = comboBoxItems[key]
                    .filter((item) => item.toLowerCase().includes(query))
                    .map((item) => ({
                      text: item,
                      value: item,
                    }));

                  e.updateData(filteredData);
                }}
              ></ComboBoxComponent>
            </div>
          ))}

          <div>
            <label htmlFor="location">Location on the world map</label>
            <MapsComponent>
              <LayersDirective>
                <LayerDirective
                  dataSource={mapData}
                  shapeData={world_map}
                  shapePropertyPath="name"
                  shapeDataPath="country"
                  shapeSettings={{ colorValuePath: "color", fill: "#e5e5e5" }}
                ></LayerDirective>
              </LayersDirective>
            </MapsComponent>
          </div>
        </form>
      </section>
    </main>
  );
};

export default createTrip;
