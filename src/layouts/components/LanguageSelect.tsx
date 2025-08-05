import { Select } from "antd";

export const LanguageSelect = () => {
  return (
    <Select
      defaultValue="en"
      style={{ width: 140 }}
      onChange={() => {}}
      size="large"
      options={[
        { value: "en", label: "English" },
        { value: "vi", label: "Vietnamese" },
        { value: "ja", label: "Japanese" },
      ]}
    />
  );
};
